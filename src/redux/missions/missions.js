import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/** @format */
const API_URL = 'https://api.spacexdata.com/v3';
const API_MISSION = `${API_URL}/missions`;
const GET_MISSIONS = 'space/missions/GET_MISSIONS';
const missionReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await axios.get(API_MISSION);
  const missions = response.data.map((mission) => ({
    name: mission.mission_name,
    id: mission.mission_id,
    description: mission.description
  }));
  return missions;
});
export default missionReducer;