import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
import { ENUM_USER_STATUS_CODE_ERROR } from '../../../common/constants/user.status-code.constant';

@Injectable()
export class UserNotFoundGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { __user } = context
      .switchToHttp()
      .getRequest<IRequestApp & { __user: any }>();

    if (!__user) {
      throw new NotFoundException({
        statusCode: ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
        message: 'user.error.notFound',
      });
    }
    return true;
  }
}
