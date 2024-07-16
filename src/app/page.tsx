import Image from "next/image";

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
              <img src="/oleg.jpg" alt="Oleg Shchendrigin" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Maxim Fomin</h3>
              <img src="/max.jpg" alt="Maxim Fomin" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Egor Chernobrovkin</h3>
              <img src="/egor.jpg" alt="Egor Chernobrovkin" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Adilia Saifetdiarova</h3>
              <img src="/didi.jpg" alt="Adilia Saifetdiarova" className="team-photo"/>
            </div>
            <div className="team-member">
              <h3>Timur Farizunov</h3>
              <img src="tim.jpg" alt="Timur Farizunov" className="team-photo"/>
            </div>
          </section>

          <section>
            <h2>Contact Us</h2>
            <ul className="contact-list">
              <li><a href="mailto:o.shchendrigin@innopolis.university">o.shchendrigin@innopolis.university</a></li>
              <li><a href="mailto:m.fomin@innopolis.university">m.fomin@innopolis.university</a></li>
              <li><a href="mailto:e.chernobrovkin@innopolis.university">e.chernobrovkin@innopolis.university</a></li>
              <li><a href="mailto:sayfetik2005@gmail.com">sayfetik2005@gmail.com</a></li>
              <li><a href="mailto:t.farizunov@innopolis.university">t.farizunov@innopolis.university</a></li>
            </ul>
          </section>
        </main>
      </div>
  );
}
