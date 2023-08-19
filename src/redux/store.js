import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);