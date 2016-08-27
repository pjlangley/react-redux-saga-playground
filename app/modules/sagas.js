import watchSynchronisationComplete from '../sagas/watch-sync-complete';
import watchSynchronisationNotice from '../sagas/watch-sync-notice';
import initUMLDiagram from '../sagas/init-uml-diagram';

export default function setupSagas(dispatch) {
    return function* rootSaga() {
        yield [
            initUMLDiagram(dispatch),
            watchSynchronisationComplete(dispatch),
            watchSynchronisationNotice(dispatch)
        ];
    }
}