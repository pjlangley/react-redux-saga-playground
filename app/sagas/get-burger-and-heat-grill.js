import { doUMLAction } from '../modules/uml-actions';
import { synchronisationComplete } from '../modules/actions';
import { call, put } from 'redux-saga/effects';

export default function* getBurgerAndHeatGrill (dispatch) {
    yield [
        call(doUMLAction, 6, 'completed', 2900, dispatch),
        call(doUMLAction, 7, 'completed', 10000, dispatch)
    ];

    yield put(synchronisationComplete({id: 8}));
}