/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  test('Builds the snapshot of the Navbar component', () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
