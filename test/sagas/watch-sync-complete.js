import watchSynchronisationComplete from '../../app/sagas/watch-sync-complete';
import onSynchronisationComplete from '../../app/sagas/on-sync-complete';
import { synchronisationComplete } from '../../app/modules/actions';
import { take, fork } from 'redux-saga/effects';
import { expect } from 'chai';

describe('Saga: `watchSynchronisationComplete`', () => {
    var dispatch = () => {};
    var gen = watchSynchronisationComplete(dispatch);

    it('on first iteration, takes the correct pattern', () => {
        expect(gen.next().value).to.deep.equal(
            take(synchronisationComplete(null).type)
        );
    });

    it('on second iteration, it forks the `onSynchronisationComplete` saga', () => {
        expect(gen.next().value).to.deep.equal(
            fork(onSynchronisationComplete, dispatch, undefined)
        );
    });

    it('on third iteration, the generator starts from the beginning', () => {
        expect(gen.next().value).to.deep.equal(
            take(synchronisationComplete(null).type)
        );
    });
});