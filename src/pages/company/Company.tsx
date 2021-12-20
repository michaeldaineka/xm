import React, {useEffect, useState} from 'react';
import {
    Table,
    PageHeader, Row, Col,
} from 'antd';
import {useHistory, useParams} from 'react-router-dom';
import {useAppSelector} from 'hooks/redux';
import equal from 'fast-deep-equal';
import {CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, LineChart, ResponsiveContainer} from 'recharts';
import {companyDataColumns} from 'utils/company/companyData'
import {formatToISODate} from "../../utils/auth/formatters/date";
import {HistoricalQuote} from "../../types/pages/company/companyTypes";
import dayjs from 'dayjs'

const Company = () => {
    const {symbol} = useParams<{ symbol?: string }>();
    const history = useHistory();
    const prices = useAppSelector((store) => store.company.companyData);
    const isLoading = useAppSelector((store) => store.company.isFetching);
    const [historicalQuotes, setHistoricalQuotes] = useState<HistoricalQuote[]>()

    useEffect(() => {
        if (prices.length) {
            let newPrices = prices.map((item: HistoricalQuote, index: number) =>
                Object.assign({}, item, {newDate: dayjs.unix(item.date).format('YYYY-MM-DD'), key: index})
            )
            newPrices = newPrices.filter((item: HistoricalQuote) => {
                if (localStorage.startDate <= item.date && localStorage.endDate >= item.date) {
                    return item;
                }
            })
            setHistoricalQuotes(newPrices)
        }
    }, [prices])

    return (
        <>
            <PageHeader
                onBack={() => history.goBack()}
                title={symbol}
            />
            <Row>
                <Col sm={24}>
                    <Table dataSource={historicalQuotes} columns={companyDataColumns} loading={isLoading}/>
                </Col>
                <Col sm={24}>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart height={250} data={historicalQuotes}
                                   margin={{top: 20, left: 10, right: 70}}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="newDate"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="close" stroke="red"/>
                            <Line type="monotone" dataKey="open" stroke="green"/>
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    );
};

export default React.memo(Company, (prevProps, nextProps) => equal(prevProps, nextProps));
