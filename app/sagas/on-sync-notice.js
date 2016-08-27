import { select, call } from 'redux-saga/effects';
import { doUMLAction } from '../modules/uml-actions';

export default function* onSynchronisationNotice(dispatch, action) {
    var state = yield select();
    var goToId = action.payload.id;

    var pendingActions = state.UMLObjects.some(function(item) {
        if (item.goTo === goToId) {
            return item.status !== 'completed';
        }
    });

    if (!pendingActions) {
        yield call(doUMLAction, 16, 'completed', 2000, dispatch);
        yield call(doUMLAction, 17, 'completed', 1800, dispatch);
    }
}