/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3';
const API_ROCKETS = `${API_URL}/rockets`;

const GET_ROCKETS = 'space/rockets/GET_ROCKETS';

const initialRockets = [];

export default function rocketReducer(state = initialRockets, action) {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await axios.get(API_ROCKETS);
  const rockets = response.data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[0],
    description: rocket.description,
  }));
  return rockets;
});
