import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rockets: rocketReducer, missions: missionReducer });
const store = configureStore({ reducer: rootReducer });
export default store;
