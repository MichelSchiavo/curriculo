/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import MOCKED_HEAD from '@/data/head';
import MOCKED_CONTACTS from '@/data/contacts';
import MOCKED_SKILLS from '@/data/skills';
import MOCKED_EDUCATION from '@/data/education';
import MOCKED_EXPERIENCE from '@/data/experience';
import MOCKED_HOBBIES from '@/data/hobbies';
import { FlagSelector } from '@/components/FlagSelector';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const config = ['br', 'en'] as const;

export type Tlang = (typeof config)[number];

export default function Home() {
  const [lang, setLang] = useState<Tlang>('br');
  const { theme } = useTheme();

  function handleChangeLang(lang: Tlang) {
    setLang(lang);
    localStorage.setItem('my-lang', lang);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('my-lang');

    if (storedData) {
      handleChangeLang(storedData as Tlang);
    }
  }, []);

  function handleContactClick(type?: string, url?: string) {
    if (type === 'email') {
      window.open(
        `mailto:${url}
        ?subject=Olá%20Michel%20Schiavo%2C%20tudo%20bem%3F
        &body=Olá%20Michel%20Schiavo%2C%20tudo%20bem%3F%20Vi%20seu%20curriculo%20e%20gostaria%20de%20conversar%20com%20você%20sobre%20uma%20oportunidade%20de%20trabalho.`,
        '_blank',
      );
    } else {
      window.open(url, '_blank');
    }
  }

  return (
    <>
      <Head>
        <title>Michel Schiavo - CV</title>
        <meta
          name="description"
          content="Curriculum de Michel Schiavo - Desenvolvedor Front-end"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlagSelector handleClick={handleChangeLang} lang={lang} />
      <ThemeToggle />

      <main className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <h2 className={styles.topTitle}>Michel Schiavo</h2>
            <span className={styles.topJob}>Front-end developer</span>
          </div>

          <div className={styles.group}>
            <div className={styles.upper_left}>
              <img
                className={styles.img}
                src="./perfilImage.webp"
                alt="Profile image"
              />
            </div>

            <div className={styles.upper_right}>
              <p>{MOCKED_HEAD[lang].title}</p>

              <p>{MOCKED_HEAD[lang].description}</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottom_left}>
            <h4>{MOCKED_CONTACTS.title[lang]}</h4>

            <ul className={styles.contact_info}>
              {MOCKED_CONTACTS.content.map((contact, i) => (
                <li key={contact.text + i}>
                  <span className={styles.icon}>
                    <i className={`${contact.icon}`} />
                  </span>

                  <span
                    className={styles.icon_text}
                    onClick={() =>
                      handleContactClick(contact.type, contact.url)
                    }
                  >
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>

            <h4>{MOCKED_SKILLS.title[lang]}</h4>

            <div className={styles.skills}>
              {MOCKED_SKILLS.content.map((skill, i) => (
                <div
                  key={skill.name + i}
                  className={styles.skills_box}
                  // @ts-ignore
                  style={{ '--i': skill.value }}
                >
                  <p>{skill.name}</p>

                  <div className={styles.skills_value} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom_right}>
            <h4 className={styles.adjst_margin}>
              {MOCKED_EDUCATION.title[lang]}
            </h4>

            <div className={styles.edu_group}>
              {MOCKED_EDUCATION.content.map((education, i) => (
                <div key={education.title + i} className={styles.edu_group_bx}>
                  <p>{education.time}</p>

                  <div>
                    <b>{education.title}</b>

                    <p>{education.description[lang]}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className={styles.adjst_margin}>
              {MOCKED_EXPERIENCE.title[lang]}
            </h4>

            {MOCKED_EXPERIENCE.content.map((experience, i) => (
              <div
                key={experience.title[lang] + i}
                className={styles.edu_group}
              >
                <div className={styles.edu_group_bx}>
                  <p>{experience.time}</p>

                  <div>
                    <b>
                      {experience.title[lang]} <span>{experience.company}</span>
                    </b>

                    <p>{experience.description[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.hobbies}>
          <h4 className={styles.adjst_margin}>Hobbies</h4>

          <ul>
            {MOCKED_HOBBIES.map((hobbie, i) => (
              <li
                key={hobbie.text[lang] + i}
                onClick={() => window.open(hobbie.url, '_blank')}
              >
                <i className={hobbie.icon} />
                <p>{hobbie.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
