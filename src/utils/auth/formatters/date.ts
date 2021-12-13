import {HistoricalQuote} from "../../../types/pages/company/companyTypes";

export const formatToISODate = (date: Date | HistoricalQuote | unknown): string => {
    return new Date(date as Date).toISOString().split('T')[0]
}
