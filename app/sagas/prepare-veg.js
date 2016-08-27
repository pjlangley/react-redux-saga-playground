import { doUMLAction } from '../modules/uml-actions';
import { synchronisationNotice } from '../modules/actions';
import { call, put } from 'redux-saga/effects';

export default function* prepareVeg(dispatch) {
    yield [
        call(doUMLAction, 9, 'completed', 6000, dispatch),
        call(doUMLAction, 10, 'completed', 5500, dispatch),
        call(doUMLAction, 11, 'completed', 6200, dispatch)
    ];

    yield put(synchronisationNotice({id: 15}));
}