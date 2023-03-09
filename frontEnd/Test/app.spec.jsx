
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import GridRentals from "../src/Components/Body/GridRentals"

it('verifica si crashea', () => {
    const { container } = render(<GridRentals />);
    ReactDOM.unmountComponentAtNode(container);
  });