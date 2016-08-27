export function statusChange(payload) {
    return {
        type: 'STATUS_CHANGE',
        payload: payload
    };
}

export function synchronisationComplete(payload) {
    return {
        type: 'SYNCHRONISATION_COMPLETE',
        payload: payload
    };
}

export function synchronisationNotice(payload) {
    return {
        type: 'SYNCHRONISATION_NOTICE',
        payload: payload
    };
}