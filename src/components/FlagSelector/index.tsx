/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { Tlang } from "@/pages";

const flags = {
  br: {
    id: 1,
    name: "Brasil",
    code: "br",
    image: "/icons/br-flag.svg",
  },
  en: {
    id: 2,
    name: "USA",
    code: "en",
    image: "/icons/us-flag.svg",
  },
};

type FlagType = typeof flags.br;

interface IFlagSelector {
  lang: Tlang;
  handleClick: (lang: Tlang) => void;
}

export function FlagSelector({ lang, handleClick }: IFlagSelector) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectFlag = (flag: FlagType) => {
    setIsOpen(false);
    handleClick(flag.code as Tlang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <img
        src={flags[lang].image}
        className={styles.flag}
        onClick={() => setIsOpen(!isOpen)}
        alt={flags[lang].name}
      />

      {isOpen && (
        <div className={styles.dropdown}>
          {Object.values(flags).map(
            (flag: FlagType) =>
              flag !== flags[lang] && (
                <img
                  key={flag.id}
                  src={flag.image}
                  className={styles.flag}
                  onClick={() => selectFlag(flag)}
                  alt={flag.name}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
