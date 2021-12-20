import { FormItemValidation } from '../../types/pages/auth/formValidation';
import dayjs from 'dayjs'
import * as yup from 'yup';

const initDate = dayjs().add(1, 'day').format('YYYY-MM-DD')

const validateStartDate: FormItemValidation = async (rule, value, form) => {
  const startDate = yup
    .date()
    .required()
    .max(initDate);
  try {
    await startDate.validate(value);
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
    .min(dayjs(form.getFieldsValue().startDate).format('YYYY-MM-DD') ?? new Date())
    .max(initDate);
  try {
    await endDate.validate(value);
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
