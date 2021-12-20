import {HistoricalQuote} from "../../../types/pages/company/companyTypes";
import dayjs from 'dayjs'

export const formatToISODate = (date: number): string => {
    return dayjs.unix(date).format('YYYY-MM-DD')
    // return new Date(date as Date).toISOString().split('T')[0]
}
