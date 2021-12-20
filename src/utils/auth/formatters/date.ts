import {HistoricalQuote} from "../../../types/pages/company/companyTypes";
import dayjs from 'dayjs'

export const formatToISODate = (date: number): string => {
    return dayjs(date).format('YYYY-MM-DD')
}
