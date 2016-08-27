import prepareVeg from '../../app/sagas/prepare-veg';
import { call, put } from 'redux-saga/effects';
import { doUMLAction } from '../../app/modules/uml-actions';
import { synchronisationNotice } from '../../app/modules/actions';
import { expect } from 'chai';

describe('Saga: `prepareVeg`', () => {
    var dispatch = () => {};
    var gen = prepareVeg(dispatch);

    it('on first iteration, it makes the correct three calls to `doUMLAction`', () => {
        var value = gen.next().value;

        expect(value).to.be.instanceOf(Array);
        expect(value).to.have.lengthOf(3);

        expect(value[0]).to.deep.equal(
            call(doUMLAction, 9, 'completed', 6000, dispatch)
        );

        expect(value[1]).to.deep.equal(
            call(doUMLAction, 10, 'completed', 5500, dispatch)
        );

        expect(value[2]).to.deep.equal(
            call(doUMLAction, 11, 'completed', 6200, dispatch)
        );
    });

    it('on second iteration it makes a single `put` request', () => {
        expect(gen.next().value).to.deep.equal(
            put(synchronisationNotice({id: 15}))
        );
    });

    it('on third iteration it is completed', () => {
        expect(gen.next()).to.deep.equal({
            done: true, value: undefined
        });
    });
});