/** @format */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from '../redux/missions/missions';
import rocketReducer from '../redux/rockets/rockets';
import Rockets from '../pages/Reckets';

const initialState = {
  rockets: [
    {
      id: 'falcon1',
      name: 'Falcon 1',
      reserved: false,
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      image: 'image--rocket1.jpg',
    },
  ],
};

const rootReducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

describe('Rockets tests', () => {
  test('Is Rocket render', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(rockets).toMatchSnapshot();
  });
  test('Displays the Rocket Page', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rocketName = screen.getByText('Falcon 1');
    expect(rocketName).toBeInTheDocument();
  });
});
