import { watchJobs} from './saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([watchJobs()]);
}