
import { useState } from "react";
import useLanguageStore, { type Language } from "../../hooks/useLanguageStore";

const languages: { code: Language; name: string }[] = [
  { code: "en", name: "English" },
  { code: "pl", name: "Polski" },
  { code: "no", name: "Norsk" },
];

function LanguageSelect() {
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="languageDropdown">
      <button
        className="languageSelect"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Choose language"
      >
        <img
          src={`${import.meta.env.BASE_URL}flags/${language}.png`}
          alt=""
          style={{ width: 24, height: 16, objectFit: "cover" }}
        />
        <span>{language.toUpperCase()}</span>
        <span>⌄</span>
      </button>

      {open && (
        <div className="languageDropdownMenu">
          {languages.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code);
                setOpen(false);
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}flags/${code}.png`}
                alt=""
                style={{ width: 24, height: 16, objectFit: "cover" }}
              />
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelect;
