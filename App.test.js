import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import App from './App';

it('should create an item', () => {
  const {getByText, getByPlaceholderText} = render(<App />);

  const addItemButton = getByText('Add to List');
  const textInput = getByPlaceholderText('Enter Item');

  const createdItemText = 'milk';

  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const createdItem = getByText(createdItemText);

  expect(createdItem).not.toBeNull();
});
