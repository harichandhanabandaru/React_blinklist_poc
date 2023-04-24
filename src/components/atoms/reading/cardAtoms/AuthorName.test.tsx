import { render } from '@testing-library/react';
import AuthorName from './AuthorName';

describe('AuthorName', () => {
  it('renders the author name correctly', () => {
    const author = 'Jane Doe';
    const { getByText } = render(<AuthorName author={author} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const authorElement = getByText(author);
    expect(authorElement).toBeInTheDocument();
  });
});
