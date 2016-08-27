import onSynchronisationComplete from '../../app/sagas/on-sync-complete';
import prepareVeg from '../../app/sagas/prepare-veg';
import prepareBurger from '../../app/sagas/prepare-burger';
import { fork } from 'redux-saga/effects';
import { expect } from 'chai';

describe('Saga: `onSynchronisationComplete`', () => {
    var dispatch = () => {};

    describe('synchronisation bar with id of 5', () => {
        var action = {
            payload: {
                id: 5
            }
        };
        var gen = onSynchronisationComplete(dispatch, action);

        it('on first iteration it yields a single `fork` for the `prepareVeg` generator', () => {
            expect(gen.next().value).to.deep.equal(
                fork(prepareVeg, dispatch)
            );
        });

        it('on second iteration it is completed', () => {
            expect(gen.next()).to.deep.equal({
                done: true, value: undefined
            });
        });
    });

    describe('synchronisation bar with id of 8', () => {
        var action = {
            payload: {
                id: 8
            }
        };
        var gen = onSynchronisationComplete(dispatch, action);

        it('on first iteration it yields a single `fork` for the `prepareBurger` generator', () => {
            expect(gen.next().value).to.deep.equal(
                fork(prepareBurger, dispatch)
            );
        });

        it('on second iteration it is complete', () => {
            expect(gen.next()).to.deep.equal({
                done: true, value: undefined
            });
        });
    });

    describe('synchronisation bar with unrecognised id', () => {
        var action = {
            payload: {
                id: 1000000
            }
        };
        var gen = onSynchronisationComplete(dispatch, action);

        it('on first iteration it returns a value of `undefined`', () => {
            expect(gen.next().value).to.be.undefined;
        });

        it('on second iteration it is completed', () => {
            expect(gen.next()).to.deep.equal({
                done: true, value: undefined
            });
        });
    });
});