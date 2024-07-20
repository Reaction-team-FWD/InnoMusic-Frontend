import styles from './about.module.scss';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Spotify',
};

import Oleg from '/public/img/photos/oleg.jpg';
import Max from '/public/img/photos/max.jpg';
import Egor from '/public/img/photos/egor.jpg';
import DiDi from '/public/img/photos/didi.jpg';
import Tim from '/public/img/photos/tim.jpg';

export default function AboutPage() {
  return (
    <div className={styles.background}>
      <div className={styles.about_container}>
        <main className={styles.about_main}>
          <h1 className={styles.heading_max}>About Us</h1>
          <section className={styles.section}>
            <h2 className={styles.heading_big}>Our Mission</h2>
            <p className={styles.para}>
              Our mission is to unlock the potential of human creativity — by giving a million creative artists the
              opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading_big}>Our Team</h2>
            <div className={styles.team_member}>
              <h3>Oleg Shchendrigin</h3>
              <Image src={Oleg} width={500} height={500} alt="Oleg Shchendrigin" className={styles.team_photo} />
            </div>
            <div className={styles.team_member}>
              <h3>Maxim Fomin</h3>
              <Image src={Max} width={500} height={500} alt="Maxim Fomin" className={styles.team_photo} />
            </div>
            <div className={styles.team_member}>
              <h3>Egor Chernobrovkin</h3>
              <Image src={Egor} width={500} height={500} alt="Egor Chernobrovkin" className={styles.team_photo} />
            </div>
            <div className={styles.team_member}>
              <h3>Adilia Saifetdiarova</h3>
              <Image src={DiDi} width={500} height={500} alt="Adilia Saifetdiarova" className={styles.team_photo} />
            </div>
            <div className={styles.team_member}>
              <h3>Timur Farizunov</h3>
              <Image src={Tim} width={500} height={500} alt="Timur Farizunov" className={styles.team_photo} />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading_big}>Contact Us</h2>
            <ul className={styles.contact_list}>
              <li>
                <a className={styles.email} href="mailto:o.shchendrigin@innopolis.university">
                  o.shchendrigin@innopolis.university
                </a>
              </li>
              <li>
                <a className={styles.email} href="mailto:m.fomin@innopolis.university">
                  m.fomin@innopolis.university
                </a>
              </li>
              <li>
                <a className={styles.email} href="mailto:e.chernobrovkin@innopolis.university">
                  e.chernobrovkin@innopolis.university
                </a>
              </li>
              <li>
                <a className={styles.email} href="mailto:sayfetik2005@gmail.com">
                  sayfetik2005@gmail.com
                </a>
              </li>
              <li>
                <a className={styles.email} href="mailto:t.farizunov@innopolis.university">
                  t.farizunov@innopolis.university
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
