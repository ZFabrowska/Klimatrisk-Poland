
import useLanguageStore from "../../hooks/useLanguageStore";
import { Globe } from "lucide-react";

function LanguageSelect() {
  const { language, setLanguage } = useLanguageStore();

  const nextLanguage = {
    en: "pl",
    pl: "no",
    no: "en",
  } as const;

  return (
    <button
      onClick={() => setLanguage(nextLanguage[language])}
      className="languageSelect"
    >
      <div className="languageIcon">
        <Globe />
      </div>
      <div className="languageCode">
        {language.toUpperCase()}
      </div>
    </button>
  );
}

export default LanguageSelect;
