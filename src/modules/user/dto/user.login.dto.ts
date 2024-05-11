import { PickType } from '@nestjs/swagger';
import { UserCreateDto } from '@modules/user/dto/user.create.dto';

export class UserLoginDto extends PickType(UserCreateDto, [
  'email',
  'password',
] as const) {}
