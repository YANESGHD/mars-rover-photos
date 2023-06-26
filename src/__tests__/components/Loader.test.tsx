import { render, screen } from '@testing-library/react';
import { Loader } from '../../components';

describe('Loader component', () => {
  it('renders the loader', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('progressbar');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveStyle('color: white');
    expect(loaderElement).toHaveStyle('font-size: 90px');
  });
});
