import { registerAs } from '@nestjs/config';
import { ENUM_MESSAGE_LANGUAGE } from '../../common/message/constants/message.enum.constant';
import { APP_LANGUAGE } from '../../common/constants/app.constant';

export default registerAs(
  'message',
  (): Record<string, any> => ({
    availableLanguage: Object.values(ENUM_MESSAGE_LANGUAGE),
    language: process.env.APP_LANGUAGE ?? APP_LANGUAGE,
  }),
);
