import { delay } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import getBoardAndVeg from './get-board-and-veg';
import getBurgerAndHeatGrill from './get-burger-and-heat-grill';

export default function* initUMLDiagram(dispatch) {
    yield call(delay, 1500);
    yield fork(getBoardAndVeg, dispatch);
    yield fork(getBurgerAndHeatGrill, dispatch);
}