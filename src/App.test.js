import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Movie-Add link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie-Add/i);
  expect(linkElement).toBeInTheDocument();
});

test('hides Rating and Notes but shows Watched using for tvcurrent script selection', () => {
  render(<App />);
  
  // By default, script is "movie". "Rating", "Watched using" and "Notes" should be present.
  expect(screen.getByText('Rating')).toBeInTheDocument();
  expect(screen.getByText('Watched using')).toBeInTheDocument();
  expect(screen.getByText('Notes')).toBeInTheDocument();

  // Get the Script select element (it has default value 'Movie')
  const scriptSelect = screen.getByDisplayValue('Movie');
  userEvent.selectOptions(scriptSelect, 'tvcurrent');

  // "Watched using" should still be in the document
  expect(screen.getByText('Watched using')).toBeInTheDocument();

  // "Rating" and "Notes" should no longer be in the document
  expect(screen.queryByText('Rating')).not.toBeInTheDocument();
  expect(screen.queryByText('Notes')).not.toBeInTheDocument();
});

