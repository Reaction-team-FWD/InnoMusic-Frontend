import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/(main)/about/page';
import '@testing-library/jest-dom';

describe('AboutPage', () => {
  it('renders the AboutPage with all main sections, team members, and contact information', () => {
    render(<AboutPage />);

    // Check for the main title
    const mainTitle = screen.getByRole('heading', { name: /About Us/i });
    expect(mainTitle).toBeInTheDocument();

    // Check for the Our Mission section and content
    const missionTitle = screen.getByRole('heading', { name: /Our Mission/i });
    expect(missionTitle).toBeInTheDocument();

    const missionContent = screen.getByText(
      /Our mission is to unlock the potential of human creativity/i
    );
    expect(missionContent).toBeInTheDocument();

    // Check for the Our Team section
    const teamTitle = screen.getByRole('heading', { name: /Our Team/i });
    expect(teamTitle).toBeInTheDocument();

    // Check for each team member's name and image
    const teamMembers = [
      { name: 'Oleg Shchendrigin', imageAlt: 'Oleg Shchendrigin' },
      { name: 'Maxim Fomin', imageAlt: 'Maxim Fomin' },
      { name: 'Egor Chernobrovkin', imageAlt: 'Egor Chernobrovkin' },
      { name: 'Adilia Saifetdiarova', imageAlt: 'Adilia Saifetdiarova' },
      { name: 'Timur Farizunov', imageAlt: 'Timur Farizunov' },
    ];

    teamMembers.forEach((member) => {
      const teamMemberName = screen.getByRole('heading', { name: member.name });
      expect(teamMemberName).toBeInTheDocument();

      const teamMemberImage = screen.getByAltText(member.imageAlt);
      expect(teamMemberImage).toBeInTheDocument();
    });

    // Check for the Contact Us section and contact information
    const contactTitle = screen.getByRole('heading', { name: /Contact Us/i });
    expect(contactTitle).toBeInTheDocument();

    const contactEmails = [
      'o.shchendrigin@innopolis.university',
      'm.fomin@innopolis.university',
      'e.chernobrovkin@innopolis.university',
      'sayfetik2005@gmail.com',
      't.farizunov@innopolis.university',
    ];

    contactEmails.forEach((email) => {
      const contactEmailLink = screen.getByRole('link', { name: email });
      expect(contactEmailLink).toBeInTheDocument();
    });
  });
});
