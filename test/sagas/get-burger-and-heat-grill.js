import getBurgerAndHeatGrill from '../../app/sagas/get-burger-and-heat-grill';
import { call, put } from 'redux-saga/effects';
import { doUMLAction } from '../../app/modules/uml-actions';
import { synchronisationComplete } from '../../app/modules/actions';
import { expect } from 'chai';

describe('Saga: `getBurgerAndHeatGrill`', () => {
    var dispatch = () => {};
    var gen = getBurgerAndHeatGrill(dispatch);

    it('on first iteration, it makes the correct two calls to `doUMLAction`', () => {
        var value = gen.next().value;

        expect(value).to.be.instanceOf(Array);
        expect(value).to.have.lengthOf(2);

        expect(value[0]).to.deep.equal(
            call(doUMLAction, 6, 'completed', 2900, dispatch)
        );

        expect(value[1]).to.deep.equal(
            call(doUMLAction, 7, 'completed', 10000, dispatch)
        );
    });

    it('on second iteration it makes a single `put` request', () => {
        expect(gen.next().value).to.deep.equal(
            put(synchronisationComplete({id: 8}))
        );
    });

    it('on third iteration it is completed', () => {
        expect(gen.next()).to.deep.equal({
            done: true, value: undefined
        });
    });
});