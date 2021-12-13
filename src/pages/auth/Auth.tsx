import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, Row, Col, Tabs, Form, FormInstance, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import s from './Auth.module.less';
import equal from 'fast-deep-equal';
import { doLogin } from '../../utils/auth/authFuncs';
import Header from 'components/Header/Header';

const Auth = () => {
  const [form] = Form.useForm<FormInstance>(undefined);
  const { TabPane } = Tabs;
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((store) => store.auth.isFetching);
  const [activeKey, setActiveKey] = useState<string>('1');
  const emailRef = useRef<Input>(null);

  useEffect(() => {
    if (!emailRef.current) throw Error('emailRef is not assigned');
    emailRef.current.focus();
  }, []);

  return (
    <>
      <Header />
      <Row>
        <Col xs={24} md={24}>
          <div className={s.loginSection}>
            <Tabs
              activeKey={activeKey}
              onChange={(tabNum) => setActiveKey(tabNum)}
              tabPosition={'bottom'}
              centered
              style={{ overflow: 'visible' }}
            >
              <TabPane tab="Login" key="1">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={(values) => doLogin(values, dispatch)}
                  style={{ width: 300, maxWidth: '100%' }}
                >
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: ' ', type: 'email' }]}
                    initialValue={'admin@xm.com'}
                  >
                    <Input placeholder="Email" ref={emailRef} />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: ' ' }]}
                    initialValue={'password'}
                  >
                    <Input.Password
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link to="/forgot" style={{ float: 'right' }}>
                      Forgot password
                    </Link>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type={'primary'}
                      className={'bg-secondary'}
                      block
                      htmlType={'submit'}
                      loading={isFetching}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Register" key="2">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={() => {
                    setActiveKey('1');
                    form.resetFields();
                  }}
                  style={{ width: 300, maxWidth: '100%' }}
                  form={form}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: ' ',
                        type: 'string',
                      },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                  <Form.Item name="email" rules={[{ message: ' ', type: 'email' }]}>
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ message: ' ' }]}>
                    <Input.Password
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="repeatPassword"
                    rules={[
                      {
                        message: ' ',
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Repeat Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type={'primary'} block htmlType={'submit'}>
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(Auth, (prevProps, nextProps) => equal(prevProps, nextProps));
