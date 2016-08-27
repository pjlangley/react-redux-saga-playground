import { fork } from 'redux-saga/effects';
import prepareVeg from './prepare-veg';
import prepareBurger from './prepare-burger';

export default function* onSynchronisationComplete(dispatch, action) {
    switch(action.payload.id) {
        case 5:
            yield fork(prepareVeg, dispatch);
            break;
        case 8:
            yield fork(prepareBurger, dispatch);
            break;
        default:
            yield;
    }
}