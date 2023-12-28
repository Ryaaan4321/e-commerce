import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js";
import userReducer from "./userRedux.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const persistConfig={
    key:'root',
    version:1,
    storage,
}

const persistedReducer = persistedReducer(persistConfig , userReducer);


export default configureStore({
    reducer:persistReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH , REHYDRATE , PAUSE , PURGE , REGISTER]
        },
    }),
        
})

export let persistor 