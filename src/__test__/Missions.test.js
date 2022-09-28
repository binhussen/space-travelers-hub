/** @format */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from '../redux/missions/missions';
import rocketReducer from '../redux/rockets/rockets';
import Missions from '../pages/Missions';

const initialMissionState = {
  missions: [
    {
      id: '9D1B7E0',
      name: 'Thaicom',
      description:
				'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      joined: false,
    },
  ],
};

const rootReducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialMissionState,
});

describe('Missions tests', () => {
  test('Is Mission Page Render', () => {
    const missions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });

  test('Display the Mission page', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const missionName = screen.getByText('Thaicom');
    expect(missionName).toBeInTheDocument();
  });
});
