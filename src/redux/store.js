import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, createStore } from "redux";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['publicData']
};

const enhancedReducer  = persistReducer(persistConfig, reducers);

export default createStore(enhancedReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
