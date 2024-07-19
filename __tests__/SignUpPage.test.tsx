import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignUpPage from '@/app/(authentication)/signup/page';
import '@testing-library/jest-dom';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SignUpPage', () => {
  it('renders the Sign Up form with all fields', async () => {
    render(<SignUpPage />);

    // Check for the title
    const title = screen.getByRole('heading', { name: /Sign Up/i });
    expect(title).toBeInTheDocument();

    // Check for username input
    const usernameInput = screen.getByLabelText(/Username/i);
    expect(usernameInput).toBeInTheDocument();

    // Check for email input
    const emailInput = screen.getByLabelText(/Email address/i);
    expect(emailInput).toBeInTheDocument();

    // Check for password input
    const passwordInput = screen.getByLabelText('Password', {
      selector: 'input',
    });
    expect(passwordInput).toBeInTheDocument();

    // Check for repeat password input
    const repeatPasswordInput = screen.getByLabelText('Repeat Password', {
      selector: 'input',
    });
    expect(repeatPasswordInput).toBeInTheDocument();

    // Check for submit button
    const submitButton = screen.getByRole('button', { name: /Sign Up/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('handles successful submission', async () => {
    render(<SignUpPage />);

    // Mock the successful response
    mockedAxios.post.mockResolvedValueOnce({ data: {} });

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/Email address/i), {
      target: { value: 'testuser@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), {
      target: { value: 'password' },
    });
    fireEvent.change(
      screen.getByLabelText('Repeat Password', { selector: 'input' }),
      {
        target: { value: 'password' },
      }
    );
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    // Wait for the registration success
    await waitFor(() => {
      const successNotification = screen.getByText(/Registration successful!/i);
      expect(successNotification).toBeInTheDocument();
    });
  });
});
