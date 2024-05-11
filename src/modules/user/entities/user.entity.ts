import { $Enums, Roles, User } from '@prisma/client';

export class UserEntity implements User {
  readonly blocked: boolean;

  readonly blockedDate: Date | null;

  readonly inactiveDate: Date | null;

  readonly inactivePermanent: boolean;

  readonly isActive: boolean;

  readonly mobileNumber: string | null;

  readonly passwordAttempt: number;

  readonly passwordCreated: Date;

  readonly passwordExpired: Date;

  readonly salt: string;

  readonly signUpDate: Date;

  readonly signUpFrom: $Enums.ENUM_USER_SIGN_UP_FROM;

  readonly id!: number;

  readonly phone!: string | null;

  readonly email!: string;

  readonly firstName!: string | null;

  readonly lastName!: string | null;

  readonly password!: string | null;

  readonly roles!: Roles[];

  readonly createdAt!: Date;

  readonly updatedAt!: Date;

  readonly isVerified!: boolean;
}
