import { FormInstance, RuleObject, StoreValue } from 'rc-field-form/lib/interface';

export type FormItemValidation = (
  rule: RuleObject,
  value: StoreValue,
  callback: any,
  lol: any,
) => Promise<void | any> | void;
