import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3';
const API_MISSION = `${API_URL}/missions`;
const GET_MISSIONS = 'space/missions/GET_MISSIONS';
const TOGGLE_MISSION = 'space/missions/TOGGLE_MISSION';
const missionReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    case TOGGLE_MISSION: {
      return state.map((mission) => {
        if (mission.id === action.payload) return { ...mission, joined: !mission.joined };
        return mission;
      });
    }
    default:
      return state;
  }
};
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await axios.get(API_MISSION);
  const missions = response.data.map((mission) => ({
    name: mission.mission_name,
    id: mission.mission_id,
    description: mission.description,
    joined: false,
  }));
  return missions;
});
export const toggleJoin = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

export default missionReducer;
