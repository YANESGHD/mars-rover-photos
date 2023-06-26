import { render, screen } from '@testing-library/react';
import { NotFoundMessage } from '../components';

describe('NotFoundMessage', () => {
  it('renders the error message', () => {
    render(<NotFoundMessage />);
    
    const errorMessage = screen.getByText('NO PHOTOS FOUND');
    expect(errorMessage).toBeInTheDocument();
  });
});
