import initUMLDiagram from '../../app/sagas/init-uml-diagram';
import getBoardAndVeg from '../../app/sagas/get-board-and-veg';
import getBurgerAndHeatGrill from '../../app/sagas/get-burger-and-heat-grill';
import { delay } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import { expect } from 'chai';

describe('Saga: `initUMLDiagram`', () => {
    var dispatch = () => {};
    var gen = initUMLDiagram(dispatch);

    it('first iteration calls the delay method with the correct args', () => {
        expect(gen.next().value).to.deep.equal(call(delay, 1500));
    });

    it('second iteration calls `fork` on the `getBoardAndVeg` saga', () => {
        expect(gen.next().value).to.deep.equal(fork(getBoardAndVeg, dispatch));
    });

    it('third iteration calls `fork` on the `getBurgerAndHeatGrill` saga', () => {
        expect(gen.next().value).to.deep.equal(fork(getBurgerAndHeatGrill, dispatch));
    });

    it('on the fourth iteration it is completed', () => {
        expect(gen.next()).to.deep.equal({
            done: true, value: undefined
        });
    });
});