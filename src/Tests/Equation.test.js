import { fireEvent, render, screen } from '@testing-library/react';
import Equation from '../Questions/Equation/Equation';

describe('Equation Tests', () => {
  test('renders equation component', () => {
    render(<Equation />)
  });

  test('verify correct equation', () => {
    render(<Equation index={0} position={0} equation="1 + 1" answer="2"/>);
    expect(screen.getByTestId("equationBody")).toHaveClass('correct');
  });

  test('verify incorrect equation', () => {
    render(<Equation index={0} position={0} equation="1 + 1" answer="3"/>);
    expect(screen.getByTestId("equationBody")).toHaveClass('incorrect');
  });

  test('verify current equation', () => {
    render(<Equation index={0} position={0} equation="1 + 1" answer="2"/>);
    expect(screen.getByTestId("equationBody")).toHaveClass('selected');
  });
})