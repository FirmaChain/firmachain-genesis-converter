import { combineReducers } from "redux";
import Genesis from './genesis';
import PublicData from './publicData';

const reducers = combineReducers({
    genesis: Genesis,
    public: PublicData,
});

export default (state, action) => {
    return reducers(state, action)
}