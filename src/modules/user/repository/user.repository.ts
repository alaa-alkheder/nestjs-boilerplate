import { PrismaService } from '@providers/prisma';
import { HttpException, Injectable } from '@nestjs/common';
// import { paginator } from '@nodeteam/nestjs-prisma-pagination';
// import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  // private readonly paginate: PaginatorTypes.PaginateFunction;

  constructor(private prisma: PrismaService) {
    /**
     * @desc Create a paginate function
     * @param model
     * @param options
     * @returns Promise<PaginatorTypes.PaginatedResult<T>>
     */
    // this.paginate = paginator({
    //   page: 1,
    //   perPage: 10,
    // });
  }

  findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * @desc Find a user by params
   * @param params Prisma.UserFindFirstArgs
   * @returns Promise<User | null>
   *       If the user is not found, return null
   */
  async findOne(params: Prisma.UserFindFirstArgs): Promise<User | null> {
    return await this.prisma.user.findFirst(params);
  }

  /**
   * @desc Create a new user
   * @param data Prisma.UserCreateInput
   * @returns Promise<User>
   */
  async create(data: Prisma.UserCreateInput): Promise<User> {
    // console.log(data);
    return this.prisma.user.create({ data });
  }

  /**
   * @desc Find all users with pagination
   * @param where Prisma.UserWhereInput
   * @param orderBy Prisma.UserOrderByWithRelationInput
   * @returns Promise<PaginatorTypes.PaginatedResult<User>>
   */
  async findAll(
    where: Prisma.UserWhereInput,
    orderBy: Prisma.UserOrderByWithRelationInput,
  ): Promise<User[]> {
    console.log(where);
    return this.prisma.user.findMany({
      where,
      // where,
      orderBy,
    });
  }
}
