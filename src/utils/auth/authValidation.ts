import { FormItemValidation } from '../../types/pages/auth/formValidation';

const handleValidateName: FormItemValidation = (rule, value) => {
  if (typeof value === 'string') {
    if (!/ \w+/.test(value)) {
      return Promise.reject();
    }
  }
  return Promise.resolve();
};

const handleValidatePassword: FormItemValidation = (rule, value, form) => {
  if (typeof form === 'object') {
    if (value === form.getFieldsValue().password) {
      return Promise.resolve();
    }
  }
  return Promise.reject();
};

export { handleValidateName, handleValidatePassword };
