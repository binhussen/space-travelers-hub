/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rocketReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
