import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '@modules/user/repository/user.repository';
import { Prisma, User } from '@prisma/client';
import { UserSignUpDto } from "@modules/user/dto/user.sign-up.dto";
import { fa } from "@faker-js/faker";

@Injectable()
export class UserService {
  constructor(private readonly _UserRepository: UserRepository) {}

  async create(createUserDto: UserSignUpDto) {
    return await this._UserRepository.create({ ...createUserDto,signUpFrom:'PUBLIC' , salt:createUserDto.password,isActive:true, inactivePermanent:false,blocked:false });
  }
  async findById(id: number): Promise<User> {
    return this._UserRepository.findById(id);
  }

  /**
   * @desc Find a user by id
   * @param id
   * @returns Promise<User>
   */
  findOne(id: number): Promise<User> {
    const u= this._UserRepository.findOne({
      where: { id },
    });
    console.log(u);
    return u
  }

  /**
   * @desc Find all users with pagination
   * @param where
   * @param orderBy
   */
  findAll(
    where: Prisma.UserWhereInput,
    orderBy: Prisma.UserOrderByWithRelationInput,
  ) {
    return this._UserRepository.findAll(where, orderBy);
  }
}
