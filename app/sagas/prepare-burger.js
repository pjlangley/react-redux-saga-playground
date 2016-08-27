import { doUMLAction } from '../modules/uml-actions';
import { synchronisationNotice } from '../modules/actions';
import { call, put } from 'redux-saga/effects';

export default function* prepareBurger(dispatch) {
    yield [
        call(doUMLAction, 12, 'completed', 3000, dispatch),
        call(doUMLAction, 13, 'completed', 9000, dispatch),
        call(doUMLAction, 14, 'completed', 5500, dispatch)
    ];

    yield put(synchronisationNotice({id: 15}));
}