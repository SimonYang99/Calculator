import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../Calculator/Calculator';

describe('Calculator Tests', () => {
  test('renders calculator component', () => {
    render(<Calculator />);
  });

  test('verify number buttons work', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("0"));
    expect(screen.getByDisplayValue("1234567890")).toBeInTheDocument();
  });

  test('verify addition works, 1 + 1 = 2', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("calcView").value).toBe("2")
  });

  test('verify subtraction works, 1 - 1 = 0', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("calcView").value).toBe("0")
  });

  test('verify multiplication works, 2 * 2 = 4', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("calcView").value).toBe("4")
  });

  test('verify division works, 8 / 2 = 4', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("calcView").value).toBe("4")
  });

  test('submitting nothing should display error', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("< Submit"));
    expect(screen.getByTestId("calcView").value).toBe("ERROR");
  });

  test('submitting a non-number should display error', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("< Submit"));
    expect(screen.getByTestId("calcView").value).toBe("ERROR");
  })

})