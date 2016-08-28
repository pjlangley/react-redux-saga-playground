import onSynchronisationNotice from '../../app/sagas/on-sync-notice';
import { select, call } from 'redux-saga/effects';
import { doUMLAction } from '../../app/modules/uml-actions';
import { expect } from 'chai';

describe('Saga: `onSynchronisationNotice`', () => {
    var dispatch = () => {};

    var action = {
        payload: {
            id: 7
        }
    };

    describe('matching action is incomplete', () => {
        var state = {
            UMLObjects: [
                {
                    id: 6,
                    status: 'completed'
                },
                {
                    id: 8,
                    goTo: 7,
                    status: 'pending'
                }
            ]
        };

        var gen = onSynchronisationNotice(dispatch, action);

        it('on first iteration it yields a `select` event creation from redux-saga', () => {
            expect(gen.next().value).to.deep.equal(select());
        });

        it('on second iteration it doesn\'t find a completed UML Object, so it is completed', () => {
            expect(gen.next(state)).to.deep.equal({
                done: true, value: undefined
            });
        });
    });

    describe('matching action has completed', () => {
        var state = {
            UMLObjects: [
                {
                    id: 6,
                    status: 'completed'
                },
                {
                    id: 8,
                    goTo: 7,
                    status: 'completed'
                }
            ]
        };

        var gen = onSynchronisationNotice(dispatch, action);

        it('on first iteration it yields a `select` event creation from redux-saga', () => {
            expect(gen.next().value).to.deep.equal(select());
        });

        it('on second iteration it yields a `call` event creation for `doUMLAction`', () => {
            expect(gen.next(state).value).to.deep.equal(
                call(doUMLAction, 16, 'completed', 2000, dispatch)
            );
        });

        it('on third iteration it yields a second `call` event creation for `doUMLAction`', () => {
            expect(gen.next().value).to.deep.equal(
                call(doUMLAction, 17, 'completed', 1800, dispatch)
            );
        });

        it('on fourth iteration it is completed', () => {
            expect(gen.next()).to.deep.equal({
                done: true, value: undefined
            });
        });
    });
});