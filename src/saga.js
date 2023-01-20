import * as actions from './actions';
import * as apis from './apis';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

export function* GetJobsData({ payload }) {
    try {
        const result = yield call(apis.getJobsData, payload.startDate,payload.endDate);
        yield put(actions.getJobsData.success(JSON.parse(result.data)));
    } catch (e) {
        yield put(actions.getJobsData.failure(e));
    }
}

function* watchGetJobsData() {
    yield takeLatest(getType(actions.getJobsData.request), GetJobsData);
}

export function* watchJobs() {
    yield all([
        watchGetJobsData(),
    ]);
}