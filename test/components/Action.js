import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Action from '../../app/components/Action';
import UMLObjects from '../../app/modules/uml-objects-init';
import UMLObjectsReducer from '../../app/reducers/uml-objects';
import { expect } from 'chai';
import { mount } from 'enzyme';

var store = createStore(
    combineReducers({
        UMLObjects: UMLObjectsReducer
    })
);

describe('<Action/>', function() {
    describe('Action initiates with correct "Slice tomatoes" details', () => {
        var wrapper;
        var UMLAction;

        before(function setupComponent() {
            wrapper = mount(
                <Provider store={store}>
                    <Action id={9}/>
                </Provider>
            );

            UMLAction = UMLObjects.filter(UMLObject => {
                return UMLObject.id === 9;
            })[0];
        });

        it('has rendered', () => {
            expect(wrapper.find(Action)).to.have.lengthOf(1);
        });

        it('has the expected image src', () => {
            expect(wrapper.find(Action).find('img').html())
                .to.have.string('images/' + UMLAction.status + '.png');
        });

        it('has the expected text', () => {
            expect(wrapper.find(Action).text())
                .to.have.string(UMLAction.text);
        });
    });
});