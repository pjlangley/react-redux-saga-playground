import { takeEvery } from 'redux-saga';
import { synchronisationNotice } from '../modules/actions';
import onSynchronisationNotice from './on-sync-notice';

export default function* watchSynchronisationNotice(dispatch) {
    yield* takeEvery(
        synchronisationNotice(null).type,
        onSynchronisationNotice,
        dispatch
    )
}