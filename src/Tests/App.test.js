import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Tests', () => {
  test('renders app component', () => {
    render(<App />);
  });
})