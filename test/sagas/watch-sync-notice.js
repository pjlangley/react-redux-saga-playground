import watchSynchronisationNotice from '../../app/sagas/watch-sync-notice';
import onSynchronisationNotice from '../../app/sagas/on-sync-notice';
import { synchronisationNotice } from '../../app/modules/actions';
import { take, fork } from 'redux-saga/effects';
import { expect } from 'chai';

describe('Saga: `watchSynchronisationNotice`', () => {
    var dispatch = () => {};
    var gen = watchSynchronisationNotice(dispatch);

    it('on first iteration, takes the correct pattern', () => {
        expect(gen.next().value).to.deep.equal(
            take(synchronisationNotice(null).type)
        );
    });

    it('on second iteration, it forks the `onSynchronisationNotice` saga', () => {
        expect(gen.next().value).to.deep.equal(
            fork(onSynchronisationNotice, dispatch, undefined)
        );
    });

    it('on third iteration, the generator starts from the beginning', () => {
        expect(gen.next().value).to.deep.equal(
            take(synchronisationNotice(null).type)
        );
    });
});