import React from 'react';
import { Alert } from 'antd';
import { AlertProps } from 'antd';
import s from './Alert.module.less';

const AlertWrapper = ({ ...props }: AlertProps): JSX.Element => {
  return <Alert {...props} className={s.alert} />;
};

export default AlertWrapper;
