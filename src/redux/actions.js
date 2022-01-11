import { bindActionCreators } from "redux";
import store from './store';
// import actions
import * as genesis from "./actions/genesis";
import * as publicData from "./actions/publicData";
const {dispatch} = store;

// export actions
export const GenesisActions = bindActionCreators(genesis, dispatch);
export const PublicActions = bindActionCreators(publicData, dispatch);