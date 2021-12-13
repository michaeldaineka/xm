import React from 'react';
import { Button, Result } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import s from './Error.module.less';

const Error = (): JSX.Element => {
  const history = useHistory();
  return (
    <div className={`${s.errorPage} error`}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type={'primary'} icon={<LeftOutlined />} onClick={() => history.goBack()}>
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Error;
