import { fireEvent, render, screen } from '@testing-library/react';
import Questions from '../Questions/Questions';

const testCase = [{
  equation: '1 + 1',
  answer: 2
}]

describe('Questions Component Tests', () => {
  test('renders Questions component', () => {
    render(<Questions questions={testCase} position={0}/>)
  })
})