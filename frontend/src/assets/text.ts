const text = {
  common: {
    loading: {
      en: "Loading...",
      no: "Laster...",
      pl: "Ładowanie...",
    },
  },
  header: {
    layout: {
      l1: {
        en: "Nationwide overview",
        no: "Landsdekkende oversikt",
        pl: "Widok kraju",
      },
      l2: {
        en: "County analysis",
        no: "Fylkesanalyse",
        pl: "Analiza powiatu",
      },
      label: {
        en: "Analysis mode",
        no: "Analysemodus",
        pl: "Typ analizy",
      }
    },
    year: {
      label: {
        en: "Selected time",
        no: "Valgt tidspunkt",
        pl: "Wybrany okres",
      },
    },
  },
  panels: {
    chartView: {
      en: "Chart view",
      no: "Diagramvisning",
      pl: "Widok wykresu",
    },
    backToRankings: {
      en: "Back to rankings",
      no: "Tilbake til rangeringer",
      pl: "Powrót do rankingu",
    },
    chartViewTooltip: {
      en: "This chart compares the selected county with the average of counties in its voivodeship and the average of all counties in Poland. The five axes show Hazard, Vulnerability, Exposure, Response, and Total Risk. The first four components range from 0 to 100, while Total Risk ranges from 0 to 400. Higher Hazard, Vulnerability, and Exposure increase risk, while higher Response reduces it. Total Risk is calculated as H + V + E + (100 - R). The values update when the selected county, year, or active indicators change.",
      pl: "Wykres porównuje wybrany powiat ze średnią powiatów w jego województwie oraz średnią wszystkich powiatów w Polsce. Pięć osi przedstawia Zagrożenie, Wrażliwość, Ekspozycję, Reagowanie i Całkowite ryzyko. Pierwsze cztery komponenty mają skalę od 0 do 100, a całkowite ryzyko od 0 do 400. Wyższe Zagrożenie, Wrażliwość i Ekspozycja zwiększają ryzyko, natomiast wyższe Reagowanie je zmniejsza. Całkowite ryzyko obliczane jest jako H + V + E + (100 - R). Wartości aktualizują się po zmianie powiatu, roku lub aktywnych wskaźników.",
      no: "Diagrammet sammenligner det valgte fylket med gjennomsnittet for fylkene i samme voivodskap og gjennomsnittet for alle fylker i Polen. De fem aksene viser Fare, Sårbarhet, Eksponering, Respons og Samlet risiko. De fire første komponentene går fra 0 til 100, mens samlet risiko går fra 0 til 400. Høyere Fare, Sårbarhet og Eksponering øker risikoen, mens høyere Respons reduserer den. Samlet risiko beregnes som H + V + E + (100 - R). Verdiene oppdateres når valgt fylke, år eller aktive indikatorer endres.",
    },
    tree: {
      en: "Risk Customization Tree",
      no: "Risikoens oppbygning",
      pl: "Czynniki ryzyka",
      tooltip: {
        en: "This tree shows how the overall risk is built up from the different determinants and their indicators. By default all indicators are included in the overall risk, but you can exclude specific indicators by clicking on them in the tree. The determinants and overall risk are calculated with only the included indicators. Each determinant is calculated as a sum of its indicators, normalized from 0 to 100. The overall risk is the sum of the determinants, with no normalization. Note that some determinants and indicators might be inverted, to make sure that a higher value always means a higher risk.",
        no: "Dette treet viser hvordan den overordnede risikoen er bygget opp av de forskjellige determinantene og deres indikatorer. Som standard er alle indikatorer inkludert i den overordnede risikoen, men du kan ekskludere spesifikke indikatorer ved å klikke på dem i treet. Determinantene og den overordnede risikoen beregnes med kun de inkluderte indikatorene. Hver determinant beregnes som en sum av sine indikatorer, normalisert fra 0 til 100. Den overordnede risikoen er summen av determinantene, uten normalisering. Merk at noen determinanter og indikatorer kan være invertert, for å sikre at en høyere verdi alltid betyr en høyere risiko.",
        pl: "To drzewo pokazuje, w jaki sposób całkowite ryzyko jest zbudowane z różnych determinantów i ich wskaźników. Domyślnie wszystkie wskaźniki są uwzględnione w całkowitym ryzyku, ale możesz wykluczyć określone wskaźniki, klikając je w drzewie. Determinanty i całkowite ryzyko są obliczane tylko na podstawie uwzględnionych wskaźników. Każdy determinant jest obliczany jako suma jego wskaźników, znormalizowana od 0 do 100. Całkowite ryzyko jest sumą determinantów, bez normalizacji. Należy pamiętać, że niektóre determinanty i wskaźniki mogą być odwrócone, aby upewnić się, że wyższa wartość zawsze oznacza wyższe ryzyko.",
      },
    },
    map: {
      en: "Map View",
      no: "Kartvindu",
      pl: "Mapa",
      tooltip: {
        en: "This map shows the selected metric for all Counties in Poland. The selected County is highlighted with a black outline. You can zoom and pan the map to explore different areas, and click on Counties to select them. The colors represent the relative values of the currently selected metric, where stronger colors indicate higher risk contribution.",
        no: "Dette kartet viser den valgte metrikken for alle fylker i Polen. Det valgte fylket er markert med en svart kantlinje. Du kan zoome og flytte kartet for å utforske ulike områder, og klikke på fylker for å velge dem. Fargene representerer de relative verdiene til den valgte metrikken, der sterkere farger indikerer høyere risikotillegg.",
        pl: "Ta mapa pokazuje wybraną metrykę dla wszystkich powiatów w Polsce. Wybrany powiat jest wyróżniony czarną obwódką. Możesz powiększać i przesuwać mapę, aby eksplorować różne obszary, oraz klikać na powiaty, aby je wybierać. Kolory reprezentują względne wartości aktualnie wybranej metryki, gdzie silniejsze kolory wskazują na wyższy wkład ryzyka.",
      },
    },
    chart: {
      en: "Distribution of climate risk",
      no: "Fordeling av klimarisiko",
      pl: "Rozkład ryzyka klimatycznego",
      tooltip: {
        en: "This chart compares the distribution of the selected value across all counties in Poland and across counties in the voivodeship of the selected county. You can display overall climate risk, risk components, or individual indicators. Hover over the chart to see how many counties fall within a given value range. Click the mean or median values below the chart to show or hide their lines.",
        no: "Dette diagrammet sammenligner fordelingen av den valgte verdien blant alle fylker i Polen og blant fylkene i voivodskapet som det valgte fylket tilhører. Du kan vise samlet klimarisiko, risikokomponenter eller enkeltindikatorer. Hold musepekeren over diagrammet for å se hvor mange fylker som ligger innenfor et bestemt verdiintervall. Klikk på gjennomsnitts- eller medianverdiene under diagrammet for å vise eller skjule de tilhørende linjene.",
        pl: "Wykres porównuje rozkład wybranej wartości wśród wszystkich powiatów w Polsce oraz powiatów należących do województwa wybranego powiatu. Możesz wyświetlić łączne ryzyko klimatyczne, jego składowe lub poszczególne wskaźniki. Najedź kursorem na wykres, aby zobaczyć, ile powiatów mieści się w danym przedziale wartości. Kliknij średnią lub medianę pod wykresem, aby pokazać albo ukryć odpowiadające im linie.",
      },
    },
    table: {
      en: "Data Table",
      no: "Datatabell",
      pl: "Widok tabeli",
      tooltip: {
        en: "This table displays the selected County together with all Counties in the country. Click a column header to sort and rank the Counties by that value, and click again to reverse the sorting direction. All determinants and indicators are included in the table only in the 'County analysis' analysis mode. Click a County row to select it throughout the dashboard. The colored square at the beginning of each row matches the County's color on the map for the currently selected metric.",
        no: "Denne tabellen viser det valgte fylket sammen med alle fylker i landet. Klikk på en kolonneoverskrift for å sortere og rangere fylkene etter den verdien, og klikk igjen for å bytte sorteringsretning. Alle determinanter og indikatorer er inkludert i tabellen kun i analysemodusen 'Fylkesanalyse'. Klikk på en fylkerad for å velge fylket i hele dashbordet. Den fargede ruten i starten av hver rad tilsvarer fylkets farge på kartet for den valgte metrikken.",
        pl: "Ta tabela wyświetla wybrany powiat razem z wszystkimi powiatami w kraju. Kliknij na nagłówek kolumny, aby posortować i rangować powiaty według tej wartości, a następnie kliknij ponownie, aby odwrócić kierunek sortowania. Wszystkie determinanty i wskaźniki są uwzględniane w tabeli tylko w trybie analizy 'Analiza powiatu'. Kliknij na wiersz powiatu, aby go wybrać w całym dashboardzie. Kolorowy kwadrat na początku każdego wiersza odpowiada kolorowi powiatu na mapie dla aktualnie wybranej metryki.",
      },
    },
    details: {
      en: "County Rankings",
      no: "Rangering av fylket",
      pl: "Ranking powiatu",
      tooltip: {
        en: "This panel shows the selected county's rankings for all risk components and indicators. Rankings are displayed both nationally and within the county's voivodeship. A ranking of 1 indicates the highest risk value for that metric within the comparison group. The colored square beside each metric matches the county's color on the map when that metric is selected. Clicking a component or indicator selects it throughout the dashboard. Components are sorted by their contribution to overall risk, while indicators within each component are sorted by their contribution to that component.",
        no: "Dette panelet viser rangeringen til det valgte fylket for alle risikokomponenter og indikatorer. Rangeringene vises både nasjonalt og innenfor voivodskapet som fylket tilhører. En rangering som nummer 1 betyr at fylket har den høyeste risikoverdien for den aktuelle variabelen i sammenligningsgruppen. Den fargede ruten ved siden av hver variabel tilsvarer fylkets farge på kartet når variabelen er valgt. Ved å klikke på en risikokomponent eller indikator velges den i hele dashbordet. Risikokomponentene er sortert etter hvor mye de bidrar til den samlede risikoen, mens indikatorene innenfor hver komponent er sortert etter hvor mye de bidrar til komponenten.",
        pl: "Ten panel przedstawia pozycję wybranego powiatu w rankingach poszczególnych składowych ryzyka i wskaźników. Rankingi są prezentowane zarówno na poziomie całej Polski, jak i województwa, do którego należy powiat. Pozycja 1 oznacza najwyższą wartość ryzyka dla danej zmiennej w porównywanej grupie. Kolorowy kwadrat obok każdej zmiennej odpowiada kolorowi powiatu na mapie po jej wybraniu. Kliknięcie składowej lub wskaźnika powoduje wybranie jej w całym panelu. Składowe są uporządkowane według ich wkładu w całkowite ryzyko, a wskaźniki według wkładu w daną składową.",
      },
    },
  },
  chart: {
    tooltip: {
      value: {
        en: "Value",
        no: "Verdi",
        pl: "Wartość",
      },
      norway: {
        en: "Poland",
        no: "Polen",
        pl: "Polska",
      },
      county: {
        en: "Voivodeship",
        no: "Voivodskap",
        pl: "Województwo",
      },
      kommuner: {
        en: "Counties",
        no: "fylker",
        pl: "powiaty",
      },
      interval: {
        en: "Interval",
        no: "Intervall",
        pl: "Przedział",
      },
    },
    stats: {
      mean: {
        en: "Mean",
        no: "Gjennomsnitt",
        pl: "Średnia",
      },
      median: {
        en: "Median",
        no: "Median",
        pl: "Mediana",
      },
      tooltip: {
        norge: {
          en: "This column shows the mean and median values for all counties in Poland.",
          no: "Denne kolonnen viser gjennomsnittet og medianen for alle fylkene i Polen.",
          pl: "Ta kolumna pokazuje średnią i medianę wartości dla wszystkich powiatów w Polsce.",
        },
        fylke: {
          en: "This column shows the mean and median values for all counties in the selected county's voivodeship.",
          no: "Denne kolonnen viser gjennomsnittet og medianen for alle fylkene i voivodskapet som det valgte fylket tilhører.",
          pl: "Ta kolumna pokazuje średnią i medianę wartości dla wszystkich powiatów w województwie wybranego powiatu.",
        },
      },
    },
  },
  table: {
    kommune: {
      en: "County",
      no: "Fylke",
      pl: "Powiat",
    },
    risk: {
      en: "Risk",
      no: "Risk",
      pl: "Ryzyko",
    },
  },
  details: {
    selectSomething: {
      en: "Select a County.",
      no: "Velg et fylke.",
      pl: "Wybierz powiat.",
    },
    tooltip: {
      norge: {
        en: "The number represents the selected County's placement among all Counties in the nation. Ranking number 1 means the selected County is the worst, with no other Counties having a worse value.",
        no: "Nummeret representerer det valgte fylkets plassering blant alle fylkene i landet. Å være rangert nummer 1 betyr at det valgte fylket er verst, og at ingen andre fylker har en verre verdi.",
        pl: "Numer reprezentuje pozycję wybranego powiatu wśród wszystkich powiatów w kraju. Ranking numer 1 oznacza, że wybrany powiat jest najgorszy, a żaden inny powiat nie ma gorszej wartości.",
      },
      fylke: {
        en: "This number shows the selected county's ranking among all counties in its voivodeship. A ranking of 1 means that the county has the highest risk value in its voivodeship.",
        no: "Tallet viser plasseringen til det valgte fylket blant alle fylkene i voivodskapet det tilhører. En rangering som nummer 1 betyr at fylket har den høyeste risikoverdien i sitt voivodskap.",
        pl: "Liczba pokazuje pozycję wybranego powiatu w rankingu wszystkich powiatów w jego województwie. Pozycja 1 oznacza, że powiat ma najwyższą wartość ryzyka w swoim województwie.",
      },
    },
    generateReport: {
      en: "Generate Report",
      no: "Generer rapport",
      pl: "Generuj raport",
    },
  },
  report: {
    title: {
      en: "County climate risk report",
      no: "Klimarisikorapport for fylket",
      pl: "Raport o ryzyku klimatycznym powiatu",
    },
    viewer: {
      generating: {
        en: "Generating report...",
        no: "Genererer rapport...",
        pl: "Generowanie raportu...",
      },
      error: {
        en: "Could not generate report.",
        no: "Kunne ikke generere rapport.",
        pl: "Nie można wygenerować raportu.",
      },
    },
    selectCounty: {
      en: "Select County",
      no: "Velg fylke",
      pl: "Wybierz powiat",
    },
    selectCountyDescription: {
      en: "Select the County you want to generate a report for.",
      no: "Velg fylket du ønsker å generere en rapport for.",
      pl: "Wybierz powiat, dla którego chcesz wygenerować raport.",
    },
    selectYear: {
      en: "Select time period",
      no: "Velg tidsperiode",
      pl: "Wybierz okres",
    },
    selectYearDescription: {
      en: "Select the time period you want to generate a report for.",
      no: "Velg tidsperioden du ønsker å generere en rapport for.",
      pl: "Wybierz okres, dla którego chcesz wygenerować raport.",
    },
    download: {
      download: {
        en: "Download report",
        no: "Last ned rapport",
        pl: "Pobierz raport",
      },
      generating: {
        en: "Generating report",
        no: "Genererer rapport",
        pl: "Generowanie raportu",
      },
      fileName: {
        en: "County-climate-risk-report.pdf",
        no: "fylke-klimarisikorapport.pdf",
        pl: "raport-ryzyko-klimatyczne.pdf",
      },
    },
    document: {
      urlLabel: {
        en: "Detailed description:",
        no: "Detaljert forklaring:",
        pl: "Szczegółowy opis:",
      },
      score: {
        en: "Score:",
        no: "Skår:",
        pl: "Wynik:",
      },
      ranked: {
        p1: {
          en: "Ranked",
          no: "Rangert som nr.",
          pl: "Sklasyfikowany jako nr",
        },
        p2: {
          en: "out of",
          no: "av",
          pl: "spośród",
        },
        p3: {
          en: "Counties in",
          no: "fylker i",
          pl: "powiatów w",
        },
        norge: {
          en: "Poland",
          no: "Polen",
          pl: "Polsce",
        },
        fylke: {
          en: "its voivodeship",
          no: "voivodskapet",
          pl: "województwie",
        },
        p4: {
          en: "(1 = highest climate risk)",
          no: "(1 = høyest klimarisiko)",
          pl: "(1 = najwyższe ryzyko klimatyczne)",
        },
      },
      titlePage: {
        chosenKommune: {
          en: "Selected County:",
          no: "Valgt fylke:",
          pl: "Wybrany powiat:",
        },
        chosenYear: {
          en: "Selected time period:",
          no: "Valgt tidsperiode:",
          pl: "Wybrany okres:",
        },
      },
      undefinedIndicator: {
        en: "The County has not received a score for this indicator.",
        no: "Fylket har ikke fått en skår for denne indikatoren.",
        pl: "Powiat nie otrzymał wyniku dla tego wskaźnika.",
      },
      documentationPage: {
        title: {
          en: "Documentation",
          no: "Dokumentasjon",
          pl: "Dokumentacja",
        },
      },
    },
  },
} as const;

export default text;