import initState from '../modules/uml-objects-init';

export default function UMLObjectsReducer(state, action) {
    if (typeof state === 'undefined') {
        return initState;
    }

    switch(action.type) {
        case 'STATUS_CHANGE':
            return state.map(function(item) {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return Object.assign({}, item, {
                    status: action.payload.newStatus
                });
            });
            break;
        default:
            return state;
    }
}
