import { statusChange, synchronisationComplete, synchronisationNotice } from '../../app/modules/actions';
import { expect } from 'chai';

describe('Actions', () => {
    describe('`statusChange` action', () => {
        it('when passed a custom payload, returns the correct action object', () => {
            var payload = {
                status: 'completed'
            };

            var action = {
                type: 'STATUS_CHANGE',
                payload: payload
            };

            expect(statusChange(payload)).to.deep.equal(action);
        });
    });

    describe('`synchronisationComplete` action', () => {
        it('when passed a custom payload, returns the correct action object', () => {
            var payload = {
                id: 1
            };

            var action = {
                type: 'SYNCHRONISATION_COMPLETE',
                payload: payload
            };

            expect(synchronisationComplete(payload)).to.deep.equal(action);
        });
    });

    describe('`synchronisationNotice` action', () => {
        it('when passed a custom payload, returns the correct action object', () => {
            var payload = {
                id: 2
            };

            var action = {
                type: 'SYNCHRONISATION_NOTICE',
                payload: payload
            };

            expect(synchronisationNotice(payload)).to.deep.equal(action);
        });
    });
});
