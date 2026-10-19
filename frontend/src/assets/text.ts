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
        en: "Municipality analysis",
        no: "Kommuneanalyse",
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
        en: "This map shows the selected metric for all municipalities in Poland. The selected municipality is highlighted with a black outline. You can zoom and pan the map to explore different areas, and click on municipalities to select them. The colors represent the relative values of the currently selected metric, where stronger colors indicate higher risk contribution.",
        no: "Dette kartet viser den valgte metrikken for alle kommuner i Polsk. Den valgte kommunen er markert med en svart kantlinje. Du kan zoome og flytte kartet for å utforske ulike områder, og klikke på kommuner for å velge dem. Fargene representerer de relative verdiene til den valgte metrikken, der sterkere farger indikerer høyere risikotillegg.",
        pl: "Ta mapa pokazuje wybraną metrykę dla wszystkich powiatów w Polsce. Wybrany powiat jest wyróżniony czarną obwódką. Możesz powiększać i przesuwać mapę, aby eksplorować różne obszary, oraz klikać na powiaty, aby je wybierać. Kolory reprezentują względne wartości aktualnie wybranej metryki, gdzie silniejsze kolory wskazują na wyższy wkład ryzyka.",
      },
    },
    chart: {
      en: "Municipality Distribution Chart",
      no: "Kommune-fordeling",
      pl: "Rozkład powiatów",
      tooltip: {
        en: "This chart shows the distribution of the chosen metric accross all municipalities in the nation and in the selected municipality's county. The possible metrics are the overall risk, the determinants, and the indicators. The mean and median values for the nation and county can be toggled by clicking their values below the chart. By hovering over the chart, you can see the number of municipalities that have a value within the hovered bin. Above the chart, you can change the metric that is shown in the chart.",
        no: "Dette diagrammet viser fordelingen av den valgte metrikken blant alle kommuner i landet og innenfor fylket til den valgte kommunen. Metrikkene som kan vises inkluderer samlet risiko, determinantene og indikatorene. Gjennomsnitts- og medianverdier for både landet og fylket kan vises eller skjules ved å klikke på verdiene under diagrammet. Ved å holde musepekeren over diagrammet kan du se hvor mange kommuner som ligger innenfor det aktuelle intervallet. Over diagrammet kan du velge hvilken metrikk som skal vises.",
        pl: "Ten wykres pokazuje rozkład wybranej metryki wśród wszystkich powiatów w kraju i w wybranym powiecie. Możliwe metryki to całkowite ryzyko, determinanty i wskaźniki. Średnie i mediany dla kraju i powiatu można przełączać, klikając ich wartości poniżej wykresu. Najedź kursorem na wykres, aby zobaczyć liczbę powiatów, które mają wartość w obrębie najechanego przedziału. Powyżej wykresu możesz zmienić metrykę wyświetlaną na wykresie.",
      },
    },
    table: {
      en: "Data Table",
      no: "Datatabell",
      pl: "Widok tabeli",
      tooltip: {
        en: "This table displays the selected municipality together with all municipalities in the country. Click a column header to sort and rank the municipalities by that value, and click again to reverse the sorting direction. All determinants and indicators are included in the table only in the 'Municipality analysis' analysis mode. Click a municipality row to select it throughout the dashboard. The colored square at the beginning of each row matches the municipality's color on the map for the currently selected metric.",
        no: "Denne tabellen viser den valgte kommunen sammen med alle kommuner i landet. Klikk på en kolonneoverskrift for å sortere og rangere kommunene etter den verdien, og klikk igjen for å bytte sorteringsretning. Alle determinanter og indikatorer er inkludert i tabellen kun i analysemodusen 'Kommuneanalyse'. Klikk på en kommunerad for å velge kommunen i hele dashbordet. Den fargede ruten i starten av hver rad tilsvarer kommunens farge på kartet for den valgte metrikken.",
        pl: "Ta tabela wyświetla wybrany powiat razem z wszystkimi powiatami w kraju. Kliknij na nagłówek kolumny, aby posortować i rangować powiaty według tej wartości, a następnie kliknij ponownie, aby odwrócić kierunek sortowania. Wszystkie determinanty i wskaźniki są uwzględniane w tabeli tylko w trybie analizy 'Analiza powiatu'. Kliknij na wiersz powiatu, aby ją wybrać w całym dashboardzie. Kolorowy kwadrat na początku każdego wiersza odpowiada kolorowi powiatu na mapie dla aktualnie wybranej metryki.",
      },
    },
    details: {
      en: "Municipality Rankings",
      no: "Rangering av kommunen",
      pl: "Ranking powiatu",
      tooltip: {
        en: "This panel shows the selected municipality's rankings for all determinants and indicators. The rankings are displayed both nationally and within the municipality's county. A ranking of 1 means the municipality has the highest climate risk for that metric within the selected group, so lower ranking numbers indicate higher relative risk. The colored square beside each metric matches the municipality's color on the map when that metric is selected. Clicking a determinant or indicator selects it throughout the dashboard. The determinants are sorted by their contribution to the overall risk, while the indicators within each determinant are sorted by their contribution to that determinant.",
        no: "Dette panelet viser rangeringene til den valgte kommunen for alle determinanter og indikatorer. Rangeringene vises både nasjonalt og innenfor kommunens fylke. En rangering på 1 betyr at kommunen har høyest klimarisiko for den metrikken innenfor den valgte gruppen, så lave rangeringsverdier indikerer høyere relativ risiko. Den fargede ruten ved siden av hver metrikk tilsvarer kommunens farge på kartet når den metrikken er valgt. Ved å klikke på en determinant eller indikator velges den i hele dashbordet. Determinantene er sortert etter hvor mye de bidrar til den overordnede risikoen, mens indikatorene innenfor hver determinant er sortert etter hvor mye de bidrar til determinantens verdi.",
        pl: "Ten panel pokazuje rankingi wybranego powiatu dla wszystkich determinantów i wskaźników. Rankingi są wyświetlane zarówno na poziomie krajowym, jak i w obrębie powiatu. Ranking 1 oznacza, że powiat ma najwyższe ryzyko klimatyczne dla tej metryki w wybranej grupie, więc niższe numery rankingowe wskazują na wyższe ryzyko względne. Kolorowy kwadrat obok każdej metryki odpowiada kolorowi powiatu na mapie, gdy ta metryka jest wybrana. Kliknięcie determinanty lub wskaźnika powoduje jej zaznaczenie w całym dashboardzie. Determinanty są sortowane według ich wkładu w całkowite ryzyko, podczas gdy wskaźniki w ramach każdej determinanty są sortowane według ich wkładu w tę determinantę.",
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
        no: "Polsk",
        pl: "Polska",
      },
      county: {
        en: "County",
        no: "Fylke",
        pl: "Powiat",
      },
      kommuner: {
        en: "municipalities",
        no: "kommuner",
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
          en: "This column shows the mean and median value of all municipalities in the nation.",
          no: "Denne kolonnen viser gjennomsnitt og median for alle kommunene i landet.",
          pl: "Ta kolumna pokazuje średnią i medianę wartości dla wszystkich powiatów w kraju.",
        },
        fylke: {
          en: "This column shows the mean and median value of all municipalities in the selected municipality's county.",
          no: "Denne kolonnen viser gjennomsnitt og median for alle kommunene i den valgte kommuens fylke.",
          pl: "Ta kolumna pokazuje średnią i medianę wartości dla wszystkich powiatów",
        },
      },
    },
  },
  table: {
    kommune: {
      en: "Municipality",
      no: "Kommune",
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
      en: "Select a municipality.",
      no: "Velg en kommune.",
      pl: "Wybierz powiat.",
    },
    tooltip: {
      norge: {
        en: "The number represents the selected municipality's placement among all municipalities in the nation. Ranking number 1 means the selected municipality is the worst, with no other municipalities having a worse value.",
        no: "Nummeret representerer den valgte kommunens plassering blant alle kommunene i landet. Å være rangert nummer 1 betyr at den valgte kommunen er verst, og at ingen andre kommuner har en verre verdi.",
        pl: "Numer reprezentuje pozycję wybranego powiatu wśród wszystkich powiatów w kraju. Ranking numer 1 oznacza, że wybrany powiat jest najgorszy, a żaden inny powiat nie ma gorszej wartości.",
      },
      fylke: {
        en: "The number represents the selected municipality's placement among all municipalities in its own county. Ranking number 1 means the selected municipality is the worst in its county, with no other municipalities in the county having a worse value.",
        no: "Nummeret representerer den valgte kommunens plassering blant alle kommunene i fylket sitt. Å være rangert nummer 1 betyr at den valgte kommunen er verst i fylket, og at ingen andre kommuner i fylket har en verre verdi.",
        pl: "Numer reprezentuje pozycję wybranego powiatu wśród wszystkich powiatów w jego powiecie. Ranking numer 1 oznacza, że wybrany powiat jest najgorszy w swoim powiecie, a żaden inny powiat w powiecie nie ma gorszej wartości.",
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
      en: "Municipality climate risk report",
      no: "Kommunal klimarisikorapport",
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
    selectMunicipality: {
      en: "Select municipality",
      no: "Velg kommune",
      pl: "Wybierz powiat",
    },
    selectMunicipalityDescription: {
      en: "Select the municipality you want to generate a report for.",
      no: "Velg kommunen du ønsker å generere en rapport for.",
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
        en: "municipality-climate-risk-report.pdf",
        no: "kommunal-klimarisikorapport.pdf",
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
          en: "municipalities in",
          no: "kommuner i",
          pl: "powiatów w",
        },
        norge: {
          en: "Poland",
          no: "Polsk",
          pl: "Polsce",
        },
        fylke: {
          en: "its county",
          no: "fylket",
          pl: "powiat",
        },
        p4: {
          en: "(1 = highest climate risk)",
          no: "(1 = høyest klimarisiko)",
          pl: "(1 = najwyższe ryzyko klimatyczne)",
        },
      },
      titlePage: {
        chosenKommune: {
          en: "Selected municipality:",
          no: "Valgt kommune:",
          pl: "Wybrany powiat:",
        },
        chosenYear: {
          en: "Selected time period:",
          no: "Valgt tidsperiode:",
          pl: "Wybrany okres:",
        },
      },
      undefinedIndicator: {
        en: "The municipality has not received a score for this indicator.",
        no: "Kommunen har ikke fått en skår for denne indikatoren.",
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