import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../../components';

describe('ErrorMessage component', () => {
  const message = 'Test error message';

  test('renders the error message', () => {
    render(<ErrorMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders the error icon', () => {
    render(<ErrorMessage message={message} />);
    const iconElement = screen.getByRole('img', { name: /highlight off/i });
    expect(iconElement).toBeInTheDocument();
  });
});
