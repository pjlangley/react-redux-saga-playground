import { statusChange } from './actions';

export function doUMLAction(id, newStatus, delay, dispatch) {
    return new Promise(function(resolve, reject) {
        var payload = {id: id, newStatus: newStatus};

        setTimeout(() => {
            resolve(payload);
            dispatch(statusChange(payload));
        }, delay || 1000);
    });
}