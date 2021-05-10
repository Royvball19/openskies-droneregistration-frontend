import React from 'react';
import ReactDOM from 'react-dom';
import TableView from './TableView'

import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { GiLevelTwo } from 'react-icons/gi';

afterEach(cleanup);

test("TableView renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<TableView />, div);
});
