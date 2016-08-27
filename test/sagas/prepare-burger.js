import prepareBurger from '../../app/sagas/prepare-burger';
import { doUMLAction } from '../../app/modules/uml-actions';
import { synchronisationNotice } from '../../app/modules/actions';
import { call, put } from 'redux-saga/effects';
import { expect } from 'chai';

describe('Saga: `prepareBurger`', () => {
    var dispatch = () => {};
    var gen = prepareBurger(dispatch);

    it('on first iteration it makes the correct three calls to `doUMLAction`', () => {
        var value = gen.next().value;

        expect(value).to.be.instanceOf(Array);
        expect(value).to.have.lengthOf(3);

        expect(value[0]).to.deep.equal(
            call(doUMLAction, 12, 'completed', 3000, dispatch)
        );

        expect(value[1]).to.deep.equal(
            call(doUMLAction, 13, 'completed', 9000, dispatch)
        );

        expect(value[2]).to.deep.equal(
            call(doUMLAction, 14, 'completed', 5500, dispatch)
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