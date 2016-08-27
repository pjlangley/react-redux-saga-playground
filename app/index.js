import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import UMLObjectsReducer from './reducers/uml-objects';
import Row from './components/Row';
import Column from './components/Column';
import Action from './components/Action';
import setupSagas from './modules/sagas';

var sagaMiddleware = createSagaMiddleware();

var store = createStore(
    combineReducers({
        UMLObjects: UMLObjectsReducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(setupSagas(store.dispatch));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Row>
                <Column classes={['s6']}>
                    <Row>
                        <Column classes={['s6']}>
                            <Action id={1}/>
                        </Column>
                        <Column classes={['s6']}>
                            <Action id={2}/>
                        </Column>
                    </Row>
                    <Row>
                        <Column classes={['s6']}>
                            <Action id={3}/>
                        </Column>
                        <Column classes={['s6']}>
                            <Action id={4}/>
                        </Column>
                    </Row>
                </Column>
                <Column classes={['offset-s1', 's5']}>
                    <Row>
                        <Column classes={['s5']}>
                            <Action id={6}/>
                        </Column>
                        <Column classes={['s6']}>
                            <Action id={7}/>
                        </Column>
                    </Row>
                </Column>
            </Row>
            <Row>
                <Column classes={['s6']}>
                    <hr/>
                </Column>
                <Column classes={['offset-s1', 's5']}>
                    <hr/>
                </Column>
            </Row>
            <Row>
                <Column classes={['s2']}>
                    <Action id={9}/>
                </Column>
                <Column classes={['s2']}>
                    <Action id={10}/>
                </Column>
                <Column classes={['s2']}>
                    <Action id={11}/>
                </Column>
                <Column classes={['s2']}>
                    <Action id={12}/>
                </Column>
                <Column classes={['s2']}>
                    <Action id={13}/>
                </Column>
                <Column classes={['s2']}>
                    <Action id={14}/>
                </Column>
            </Row>
            <Row>
                <Column classes={['s12']}>
                    <hr/>
                </Column>
            </Row>
            <Row>
                <Column classes={['offset-s5', 's3']}>
                    <Action id={16}/>
                </Column>
            </Row>
            <Row>
                <Column classes={['offset-s5', 's3']}>
                    <Action id={17}/>
                </Column>
            </Row>
        </div>
    </Provider>,
    document.getElementById('app')
);
