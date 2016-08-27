import getBoardAndVeg from '../../app/sagas/get-board-and-veg';
import { call, put } from 'redux-saga/effects';
import { doUMLAction } from '../../app/modules/uml-actions';
import { synchronisationComplete } from '../../app/modules/actions';
import { expect } from 'chai';

describe('Saga: `getBoardAndVeg`', () => {
    var dispatch = () => {};
    var gen = getBoardAndVeg(dispatch);

    it('on first iteration, it makes the correct four calls to `doUMLAction`', () => {
        var value = gen.next().value;

        expect(value).to.be.instanceOf(Array);
        expect(value).to.have.lengthOf(4);

        expect(value[0]).to.deep.equal(
            call(doUMLAction, 1, 'completed', 3000, dispatch)
        );

        expect(value[1]).to.deep.equal(
            call(doUMLAction, 2, 'completed', 2000, dispatch)
        );

        expect(value[2]).to.deep.equal(
            call(doUMLAction, 3, 'completed', 2500, dispatch)
        );

        expect(value[3]).to.deep.equal(
            call(doUMLAction, 4, 'completed', 2800, dispatch)
        );
    });

    it('on second iteration it makes a single `put` request', () => {
        expect(gen.next().value).to.deep.equal(
            put(synchronisationComplete({id: 5}))
        );
    });

    it('on third iteration it is completed', () => {
        expect(gen.next()).to.deep.equal({
            done: true, value: undefined
        });
    });
});