import { useEffect, useState } from "react";
import useDataStore, { type KommuneNr } from "../../hooks/useDataStore";
import { getDataFileJSON } from "../../hooks/getPublicUrl";
import type { KommuneGeoJSON } from "./KommuneLayer";
import "./PowiatSearch.css";
import useLanguageStore from "../../hooks/useLanguageStore";


type Powiat = {
  kod: KommuneNr;
  nazwa: string;
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}

function PowiatSearch() {
  const language = useLanguageStore((state) => state.language);

  const translations = {
    pl: {
      placeholder: "Szukaj powiatu...",
      empty: "Nie znaleziono powiatu",
    },
    en: {
      placeholder: "Search for a county...",
      empty: "No counties found",
    },
    no: {
      placeholder: "Søk etter fylke...",
      empty: "Ingen fylker funnet",
    },
  };

  const t = translations[language];

  const [powiaty, setPowiaty] = useState<Powiat[]>([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setSelectedKommune = useDataStore(
    (state) => state.setSelectedKommune
  );

  useEffect(() => {
    getDataFileJSON("powiaty.geojson").then(
      (geojson: KommuneGeoJSON) => {
        const lista = geojson.features.map((feature) => ({
          kod: feature.properties.JPT_KOD_JE,
          nazwa: feature.properties.JPT_NAZWA_,
        }));

        lista.sort((a, b) =>
          a.nazwa.localeCompare(b.nazwa, "pl")
        );

        setPowiaty(lista);
      }
    );
  }, []);

  const wyniki = query.trim()
    ? powiaty
        .filter((powiat) =>
          normalizeText(powiat.nazwa).includes(
            normalizeText(query.trim())
          )
        )
        .slice(0, 10)
    : [];

  function wybierzPowiat(powiat: Powiat) {
    setSelectedKommune(powiat.kod);
    setQuery("");
    setIsOpen(false);
  }

  return (
    <div
      className="powiatSearch"
      onClick={(event) => event.stopPropagation()}
    >
      <input
        type="text"
        value={query}
        placeholder={t.placeholder}
        aria-label={t.placeholder}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setIsOpen(false);
          }

          if (event.key === "Enter" && wyniki.length > 0) {
            wybierzPowiat(wyniki[0]);
          }
        }}
      />

      {isOpen && query.trim() && (
        <div className="powiatSearchResults">
          {wyniki.length > 0 ? (
            wyniki.map((powiat) => (
              <button
                key={powiat.kod}
                type="button"
                onClick={() => wybierzPowiat(powiat)}
              >
                {powiat.nazwa}
              </button>
            ))
          ) : (
            <div className="powiatSearchEmpty">
              {t.empty}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export default PowiatSearch;
