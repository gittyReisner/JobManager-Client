import { createAsyncAction } from 'typesafe-actions';

export const getJobsData = createAsyncAction(
    'getJobsData/REQUEST',
    'getJobsData/SUCCESS',
    'getJobsData/FAILURE',
)();
