import Head from "next/head";
import styles from "@/styles/Home.module.css";

const MOCKED_CONTACTS = [
  {
    icon: "fa-solid fa-phone",
    text: "+55 (19) 98840 6420",
    url: "https://api.whatsapp.com/send?phone=5519988406420&text=Olá%20Michel%20Schiavo%2C%20tudo%20bem%3F",
  },
  {
    icon: "fa-solid fa-envelope",
    text: "michel_dmc@hotmail.com",
    type: "email",
    url: "michel_dmc@hotmail.com",
  },
  {
    icon: "fa-solid fa-globe",
    text: "www.google.com",
    url: "https://www.google.com",
  },
  {
    icon: "fa-brands fa-linkedin-in fa-bounce",
    text: "Linkedin",
    url: "https://www.linkedin.com/in/michel-schiavo-a2b3861a0/",
  },
  {
    icon: "fa-solid fa-location-dot",
    text: "Camaragibe, Pernambuco, Brasil",
    url: "https://www.google.com.br/maps/place/Camaragibe,+PE/@-7.9813054,-35.0399379,13z/data=!3m1!4b1!4m6!3m5!1s0x7ab107cc8ec5c4d:0x14cbb8134030c97b!8m2!3d-8.0232973!4d-34.9944969!16zL20vMDFwN2Y2",
  },
];

const MOCKED_SKILLS = [
  { name: "HTML", value: "75%" },
  { name: "CSS", value: "75%" },
  { name: "JS", value: "82%" },
  { name: "TS", value: "65%" },
  { name: "React", value: "70%" },
];

const MOCKED_EDUCATION = [
  {
    time: "2022-2023",
    title: "Ignite",
    description:
      "Cursando o Ignite da Rocketseat, bootcamp focado em ReactJs e React Native.",
  },
  {
    time: "2023",
    title: "Engenharia de software",
    description:
      "Cursando engenharia de software na Universidade Estácio de Sá.",
  },
];

const MOCKED_EXPERIENCE = [
  {
    time: "2021-2023",
    title: "Desenvolvedor Front-end",
    company: "Workfy/Adbat",
    description:
      "Cursando o Ignite da Rocketseat, bootcamp focado em ReactJs e React Native.",
  },
];

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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
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
