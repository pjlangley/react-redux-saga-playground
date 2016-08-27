import { expect } from 'chai';
import initState from '../../app/modules/uml-objects-init';
import UMLObjectsReducer from '../../app/reducers/uml-objects';

describe('UMLObjectReducer', () => {
    it('when passed a state of `undefined`, returns the default UML Objects', () => {
        var newState = UMLObjectsReducer(undefined, {});
        expect(newState).to.be.instanceOf(Array);
        expect(newState).to.deep.equal(initState);
    });

    it('when passed an unrecognised action, returns the previous state', () => {
        var state = Object.freeze(initState);
        expect(UMLObjectsReducer(state, {type: 'FAKE_ACTION'})).to.deep.equal(initState);
    });
});