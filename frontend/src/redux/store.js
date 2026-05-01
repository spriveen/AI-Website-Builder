// import { configureStore } from "@reduxjs/toolkit"
// import userReducer from "./userSlice"

// const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// })

// export default store


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userSlice from './userSlice';

const persistConfig = {
  key: 'Nexora AI',
  
  version: 1,
  storage: storage.default
  // whitelist: ['user'], // optional: only persist these reducers
  // blacklist: ['counter'], // optional: don't persist these
};

const rootReducer = combineReducers({
user: userSlice,
});

console.log('storage:-', storage)

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore internal redux-persist actions to avoid console errors
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);