import Head from "next/head";
import styles from "@/styles/Home.module.css";
import MOCKED_CONTACTS from "@/data/contacts";
import MOCKED_SKILLS from "@/data/skills";
import MOCKED_EDUCATION from "@/data/education";
import MOCKED_EXPERIENCE from "@/data/experience";

export default function Home() {
  function handleContactClick(type?: string, url?: string) {
    if (type === "email") {
      window.open(
        `mailto:${url}
        ?subject=Olá%20Michel%20Schiavo%2C%20tudo%20bem%3F
        &body=Olá%20Michel%20Schiavo%2C%20tudo%20bem%3F%20Vi%20seu%20curriculo%20e%20gostaria%20de%20conversar%20com%20você%20sobre%20uma%20oportunidade%20de%20trabalho.`,
        "_blank"
      );
    } else {
      window.open(url, "_blank");
    }
  }

  return (
    <>
      <Head>
        <title>Meu curriculo</title>
        <meta name="description" content="Curriculum de Michel Schiavo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <p>
                Olá, meu nome é Michel Schiavo, sou desenvolvedor front-end e
                atualmente tenho 31 anos.
              </p>

              <p>
                Amo computação desde sempre, ainda na adolescência criei a
                curiosidade para saber como as coisas funcionavam, depois de um
                tempo comecei a estudar programação e me apaixonei, e cá estou
                eu, fazendo o que amo, programar.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottom_left}>
            <h4>Contact</h4>

            <ul className={styles.contact_info}>
              {MOCKED_CONTACTS.map((contact, i) => (
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

            <h4>skills</h4>

            <div className={styles.skills}>
              {MOCKED_SKILLS.map((skill, i) => (
                <div
                  key={skill.name + i}
                  className={styles.skills_box}
                  //@ts-ignore-block
                  style={{ "--i": skill.value }}
                >
                  <p>{skill.name}</p>

                  <div className={styles.skills_value} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom_right}>
            <h4 className={styles.adjst_margin}>Education</h4>

            <div className={styles.edu_group}>
              {MOCKED_EDUCATION.map((education, i) => (
                <div key={education.title + i} className={styles.edu_group_bx}>
                  <p>{education.time}</p>

                  <div>
                    <b>{education.title}</b>

                    <p>{education.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className={styles.adjst_margin}>Experiência</h4>

            {MOCKED_EXPERIENCE.map((experience, i) => (
              <div key={experience.title + i} className={styles.edu_group}>
                <div className={styles.edu_group_bx}>
                  <p>{experience.time}</p>

                  <div>
                    <b>
                      {experience.title} <span>{experience.company}</span>
                    </b>

                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.hobbies}>
          <h4 className={styles.adjst_margin}>Hobbies</h4>

          <ul>
            <li>
              <i className="fa-solid fa-music" />

              <p>Music</p>
            </li>

            <li>
              <i className="fa-solid fa-film" />

              <p>Cinema</p>
            </li>

            <li>
              <i className="fa-solid fa-gamepad" />

              <p>Gaming</p>
            </li>

            <li>
              <i className="fa-solid fa-dumbbell" />

              <p>Gym</p>
            </li>

            <li>
              <i className="fa-solid fa-book" />

              <p>Reading</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
