import { format } from 'date-fns'

export const getDayOfWeek = () => format(new Date(), 'dddd')

export const getDay = () => format(new Date(), 'MMMM D')
