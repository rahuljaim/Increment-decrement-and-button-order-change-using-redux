import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import ReduxThunk from "redux-thunk";

export const middleware = [ReduxThunk];

export const createStoreMiddlware = applyMiddleware(...middleware)(createStore);

const store = createStoreMiddlware(rootReducer);
export default store;
