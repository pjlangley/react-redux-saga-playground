import { doUMLAction } from '../../app/modules/uml-actions';
import { expect } from 'chai';
import sinon from 'sinon';

describe('`modules/uml-actions`', () => {
    var dispatch;

    before(() => {
        dispatch = sinon.spy();
    });

    it('returns a resolved promise with the expected value', () => {
        return doUMLAction(3, 'completed', 100, dispatch).then(response => {
            expect(response).to.deep.equal({
                id: 3,
                newStatus: 'completed'
            });

            expect(dispatch.calledOnce).to.equal(true);
        });
    });
});