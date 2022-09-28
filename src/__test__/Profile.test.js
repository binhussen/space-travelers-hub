/** @format */

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';
import Missions from '../pages/Missions';
import Rockets from '../pages/Reckets';
import Profile from '../pages/Profile';

const initialState = {
  rockets: [
    {
      id: 'falcon1',
      name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      image: 'https://imgur.com/DaCfMsj.jpg',
      reserved: false,
    },
  ],
  missions: [
    {
      name: 'Thaicom',
      id: '9D1B7E0',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      joined: false,
    },
  ],
};

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore(
  { reducer: rootReducer, preloadedState: initialState },
  applyMiddleware(logger),
);

describe('Profile page Test', () => {
  test('check joined mission in Profile Page', () => {
    render(
      <Provider store={store}>
        <Missions />
        <Profile />
      </Provider>,
    );
    expect(screen.getByText('No Mission joined Available')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Join Mission'));
    expect(screen.getAllByText('Thaicom').length).toEqual(2);
  });

  test('Check Canceled mission in Profile Page', () => {
    render(
      <Provider store={store}>
        <Missions />
        <Profile />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Abort Mission'));
    expect(screen.getAllByText('Thaicom').length).toEqual(1);
  });

  test('Check reserved rocket in Profile Page', () => {
    render(
      <Provider store={store}>

        <Rockets />
        <Profile />
      </Provider>,
    );
    expect(screen.getByText('No Rockets Reserved Available')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reserve Rocket'));
    expect(screen.getAllByText('Falcon 1').length).toEqual(2);
  });

  test('Check canceled rocket in Profile Page', () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Profile />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));
    expect(screen.getAllByText('Falcon 1').length).toEqual(1);
  });
});
