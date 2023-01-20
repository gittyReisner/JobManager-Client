import * as urls from './urls';
import * as moment from 'moment';
import axios from 'axios';

export async function getJobsData(startDate,endDate) {
    return await axios.get(`${urls.GET_JOBS_DATA}?startDate=${moment(startDate).format('yyyy-MM-DD')}&endDate=${moment(endDate).format('yyyy-MM-DD')}`);

}
