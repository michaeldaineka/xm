import { FormItemValidation } from '../../types/pages/auth/formValidation';

import * as yup from 'yup';

const validateStartDate: FormItemValidation = async (rule, value, form) => {
  const startDate = yup
    .date()
    .required()
    .max(new Date().toDateString());
  try {
    await startDate.validate(value?._d.toDateString());
    form.setFields([
      {
        name: 'startDate',
        validating: false,
      },
    ]);
    return Promise.resolve();
  } catch (error: any) {
    form.setFields([
      {
        name: 'startDate',
        errors: error.errors,
        validating: false,
      },
    ]);
    return Promise.reject();
  }
};

const validateEndDate: FormItemValidation = async (rule, value, form) => {
  const endDate = yup
    .date()
    .required()
    .min(form.getFieldsValue().startDate?._d.toDateString() ?? new Date())
    .max(new Date().toDateString());
  try {
    await endDate.validate(value?._d.toDateString());
    form.setFields([
      {
        name: 'endDate',
        validating: false,
      },
    ]);
    return Promise.resolve();
  } catch (error: any) {
    form.setFields([
      {
        name: 'endDate',
        errors: error.errors,
        validating: false,
      },
    ]);
    return Promise.reject();
  }
};

export { validateStartDate, validateEndDate };
