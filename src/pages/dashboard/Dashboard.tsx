import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, FormInstance, Input, Row, Select } from 'antd';
import s from './Dashboard.module.less';
import { validateEndDate, validateStartDate } from '../../utils/dashboard/dashValidation';
import { getSymbols } from '../../services/symbols';
import { useAppDispatch } from '../../hooks/redux';
import { getCompanyData } from '../../store/slices/companySlice';
import { useHistory } from 'react-router-dom';
import {sendEmail} from "../../services/email";
import {formatToISODate} from "../../utils/auth/formatters/date";
import {HistoricalQuote} from "../../types/pages/company/companyTypes";

const Dashboard = (): JSX.Element => {
  const [form] = Form.useForm<FormInstance>(undefined);
  const { Option } = Select;
  const [symbols, setSymbols] = useState<Record<string, unknown>[]>([]);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    getSymbols().then((res) =>
      setSymbols(res.data),
    );
  }, []);

  return (
    <Row>
      <Col sm={24}>
        <section className={s.dashboardContainer}>
          <Form
            name="dashboard"
            initialValues={{ remember: true }}
            onFinish={(values: HistoricalQuote) => {
              history.push(`/company/${values.companySymbol}`);
              sendEmail({
                  email: values.email,
                  companyName: symbols.find((item: Record<string, unknown>) => item["Symbol"] === values.companySymbol)!["Company Name"],
                  startDate: formatToISODate(values.startDate),
                  endDate: formatToISODate(values.endDate),
              })
              dispatch(
                getCompanyData({
                  companySymbol: values.companySymbol,
                  startDate: values.startDate,
                  endDate: values.endDate,
                }),
              );
            }}
            style={{ width: 400, maxWidth: '100%' }}
            form={form as FormInstance}
          >
            <Form.Item
              name="companySymbol"
              rules={[{ required: true, message: 'this is a required field' }]}
            >
              <Select showSearch placeholder="Select a company symbol" optionFilterProp="children">
                {symbols.map((symbol: Record<string, any>) => (
                  <Option value={symbol["Symbol"]} key={symbol["Symbol"]}>
                    {symbol["Symbol"]}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="startDate"
              rules={[
                {
                  required: true,
                  type: 'date',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    return validateStartDate(_, value, form, getFieldValue);
                  },
                }),
              ]}
            >
              <DatePicker placeholder={'Start date'} />
            </Form.Item>
            <Form.Item
              name="endDate"
              rules={[
                { required: true, type: 'date' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    return validateEndDate(_, value, form, getFieldValue);
                  },
                }),
              ]}
            >
              <DatePicker placeholder={'End date'} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'this is a required field', type: 'email' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button type={'primary'} className={'bg-secondary'} block htmlType={'submit'}>
                Start
              </Button>
            </Form.Item>
          </Form>
        </section>
      </Col>
    </Row>
  );
};

export default Dashboard;
