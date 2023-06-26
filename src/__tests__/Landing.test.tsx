import { render, screen } from '@testing-library/react';
import { Landing } from '../components';

describe('Landing component', () => {
  it('renders the image with the correct source', () => {
    render(<Landing />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });

  it('has the correct styles applied to the image', () => {
    render(<Landing />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveStyle('width: 100%');
    expect(imageElement).toHaveStyle('max-height: 500px');
  });
});
