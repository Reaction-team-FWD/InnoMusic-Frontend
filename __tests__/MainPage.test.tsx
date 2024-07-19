import { render, screen } from '@testing-library/react';
import MainPage from '@/app/page';
import '@testing-library/jest-dom';

describe('MainPage', () => {
  it('renders the main titles, descriptions, and links correctly', () => {
    render(<MainPage />);

    // Check for the title in the introduction section
    const introductionTitle = screen.getByText(
      /Have you already tried InnoMusic\?/i
    );
    expect(introductionTitle).toBeInTheDocument();

    // Check for the description in the introduction section
    const introductionDescription = screen.getByText(
      /It is almost free music streaming service\. Check out our free plan!/i
    );
    expect(introductionDescription).toBeInTheDocument();

    // Check for the "GET STARTED" link
    const getStartedLink = screen.getByRole('link', { name: /GET STARTED/i });
    expect(getStartedLink).toBeInTheDocument();
    expect(getStartedLink).toHaveAttribute('href', './home');

    // Check for the "SEE OTHER PLANS" link
    const seeOtherPlansLink = screen.getByRole('link', {
      name: /SEE OTHER PLANS/i,
    });
    expect(seeOtherPlansLink).toBeInTheDocument();
    expect(seeOtherPlansLink).toHaveAttribute('href', './plans');

    // Check for the title in the benefits section
    const benefitsTitle = screen.getByText(
      /Sign up now and claim your free trial!/i
    );
    expect(benefitsTitle).toBeInTheDocument();
  });
});
