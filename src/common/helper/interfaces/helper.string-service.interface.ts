import {
  IHelperStringCurrencyOptions,
  IHelperStringPasswordOptions,
  IHelperStringRandomOptions,
} from 'src/common/helper/interfaces/helper.interface';

export interface IHelperStringService {
  randomReference(length: number): string;
  random(length: number, options?: IHelperStringRandomOptions): string;
  censor(text: string): string;
  checkEmail(email: string): boolean;
  checkPasswordWeak(
    password: string,
    options?: IHelperStringPasswordOptions,
  ): boolean;
  checkPasswordMedium(
    password: string,
    options?: IHelperStringPasswordOptions,
  ): boolean;
  checkPasswordStrong(
    password: string,
    options?: IHelperStringPasswordOptions,
  ): boolean;
  checkSafeString(text: string): boolean;
  formatCurrency(num: number, options?: IHelperStringCurrencyOptions): string;
}
