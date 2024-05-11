import { applyDecorators } from '@nestjs/common';
import { Doc, DocResponse } from "src/common/doc/decorators/doc.decorator";
import { UserGetSerialization } from 'src/modules/user/serializations/user.get.serialization';

export function UserListDoc(): MethodDecorator {
  console.log('UserListDoc');
  return applyDecorators(
    Doc({
      summary: 'get all of users',
    }),
    DocResponse<UserGetSerialization>('user.list', {
      serialization: UserGetSerialization,
    }),
  );
}
