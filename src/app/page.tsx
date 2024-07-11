// app/about/page.tsx

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Spotify',
};

export default function AboutPage() {
  return (
      <div className="about-container">
        <main className="about-main">
          <h1>About Us</h1>
          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to unlock the potential of human creativity—by giving a million creative artists the
              opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.
            </p>
          </section>

          <section>
            <h2>Our Team</h2>
            <div className="team-member">
              <h3>Oleg Shchendrigin</h3>
              <img src="blob:https://web.telegram.org/40344f63-e611-4964-915c-e5e7ebc530d1" alt="Daniel Ek" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Maxim Fomin</h3>
              <img src="blob:https://web.telegram.org/6ee4530a-d41f-4a53-b52e-c334a85a1235" alt="Martin Lorentzon" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Egor Chernobrovkin</h3>
              <img src="blob:https://web.telegram.org/e799f5ca-7e82-41fa-bf5d-13774271d867" alt="Dawn Ostroff" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Adilia Saifetdiarova</h3>
              <img src="blob:https://web.telegram.org/89814f13-c635-4a35-8f89-ae216c0b66af" alt="Dawn Ostroff" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Timur Farizunov</h3>
              <img src="blob:https://web.telegram.org/203ed95f-59e0-4e74-b29f-3719ece1ce33" alt="Dawn Ostroff" className="team-photo"/>
            </div>
          </section>

          <section>
            <h2>Contact Us</h2>
            <ul className="contact-list">
              <li><a href="o.shchendrigin@innopolis.university">o.shchendrigin@innopolis.university</a></li>
              <li><a href="m.fomin@innopolis.university">m.fomin@innopolis.university</a></li>
              <li><a href="e.chernobrovkin@innopolis.university">e.chernobrovkin@innopolis.university</a></li>
              <li><a href="sayfetik2005@gmail.com">sayfetik2005@gmail.com</a></li>
              <li><a href="t.farizunov@innopolis.university">t.farizunov@innopolis.university</a></li>
            </ul>
          </section>
        </main>
      </div>
  );
}
