import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';

test('renders text reader page ', () => {
  let app;
  render(<App />, app);
  const headerText = screen.getByText('BuildingLink Text Reader');
  expect(headerText).toBeInTheDocument();

  const uploadBtn = screen.getByText('Upload File');
  expect(uploadBtn).toBeInTheDocument();

  const textInFile = screen.queryByText('File Contains following text:')
  expect(textInFile).not.toBeInTheDocument()

  const countOFRepeatedWordsInFile = screen.queryByText('Count of Repeated words :')
  expect(countOFRepeatedWordsInFile).not.toBeInTheDocument()
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />);
  unmountComponentAtNode(div);
});
