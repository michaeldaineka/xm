import React from 'react';
import s from './Header.module.less';
import { Row, Col } from 'antd';
import logo from 'images/logo.svg';

const Header = (): JSX.Element => {
  return (
    <header className={s.header}>
      <Row>
        <Col sm={24} className={'d-flex'}>
          <img src={logo} alt="XM Logo" width="147.88px" height="39" data-test-id={"logo"} />
          <small className={s.small}>task</small>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
