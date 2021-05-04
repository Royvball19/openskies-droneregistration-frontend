import React from 'react';
import ReactDOM from 'react-dom';
import Button from './TextExample';
import Data from '../../Data'

import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

// See https://jestjs.io/docs/getting-started


afterEach(cleanup);

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});

test("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Text Example" />);
    expect(getByTestId('button')).toHaveTextContent("Text Example")
});

test('returns correct email', async () => {
    return Data.getAllOperators().then(response => {
        expect(response.data[0].email).toBe('aj@august.com');
    });
});