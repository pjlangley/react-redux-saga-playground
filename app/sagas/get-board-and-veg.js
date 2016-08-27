import { doUMLAction } from '../modules/uml-actions';
import { synchronisationComplete } from '../modules/actions';
import { call, put } from 'redux-saga/effects';

export default function* getBoardAndVeg(dispatch) {

    yield [
        call(doUMLAction, 1, 'completed', 3000, dispatch),
        call(doUMLAction, 2, 'completed', 2000, dispatch),
        call(doUMLAction, 3, 'completed', 2500, dispatch),
        call(doUMLAction, 4, 'completed', 2800, dispatch)
    ];

    yield put(synchronisationComplete({id: 5}));
}