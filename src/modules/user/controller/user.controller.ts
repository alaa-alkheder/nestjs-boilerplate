import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import UserBaseEntity from '@modules/user/entities/user-base.entity';
import Serialize from '../../../common/decorators/serialize.decorator';
import ApiOkBaseResponse from '../../../common/decorators/api-ok-base-response.decorator';
import { UserNotFoundGuard } from '@modules/user/guards/user.not-found.guard';
import { ResponsePaging } from "../../../common/response/decorators/response.decorator";
import { UserListSerialization } from "@modules/user/serializations/user.list.serialization";
import { UserListDoc } from "@modules/user/decorators/userListDoc.doc";

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UserListDoc()
  @ApiOkBaseResponse({ dto: UserBaseEntity, isArray: true })
  @ResponsePaging('user.list', {
    // serialization: UserListSerialization,
  })
  // @Serialize(UserBaseEntity)
  @ApiQuery({ name: 'where', required: false, type: 'string' })
  @ApiQuery({ name: 'orderBy', required: false, type: 'string' })
  async findAll(
    @Query('where') where?: Prisma.UserWhereInput,
    @Query('orderBy')
    orderBy?: Prisma.UserOrderByWithRelationInput,
  ) {
    return this.userService.findAll(where, orderBy);
  }

  @UseGuards(UserNotFoundGuard)
  @Serialize(UserBaseEntity)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
