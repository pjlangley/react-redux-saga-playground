import { takeEvery } from 'redux-saga';
import onSynchronisationComplete from './on-sync-complete';
import { synchronisationComplete } from '../modules/actions';

export default function* watchSynchronisationComplete(dispatch) {
    yield* takeEvery(
        synchronisationComplete(null).type,
        onSynchronisationComplete,
        dispatch
    );
}