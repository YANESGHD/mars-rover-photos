import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../components';

describe('ErrorMessage component', () => {
  const message = 'Test error message';

  it('renders the error message', () => {
    render(<ErrorMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
