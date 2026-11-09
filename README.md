# Klimatrisk Poland

Klimatrisk Poland is an interactive web-based dashboard for exploring and comparing **climate risk across 380 counties (powiats) in Poland**.

The application combines climate-related hazards with socioeconomic vulnerability, exposure, and response capacity to provide a comprehensive view of climate risk at the county level. It allows users to explore spatial differences, compare counties, and examine the indicators contributing to the overall climate risk score.

The project is a **Polish adaptation and extension of the original [Klimarisk dashboard](https://github.com/tiltobias/klimarisk)** developed by **Tobias Andresen** as part of his master's thesis in Geomatics at the Norwegian University of Science and Technology (NTNU).

## Online application

The Klimatrisk Poland dashboard is hosted by GitHub Pages and is available online at:

**[Climate Risk Poland Dashboard](https://zfabrowska.github.io/Klimatrisk-Poland/)**

The online deployment reflects the latest successfully deployed version of the application.

## Data

The climate risk indicators are derived from data provided by **KLIMADA** and **Statistics Poland (GUS)**.

For the indicators: heatwaves, heavy rainfall, strong winds, flooding, drought, population density, children, and elderly population, officially available projections were used to obtain values for 2050 and 2100.

For the remaining indicators, available data for 2025 were used as the baseline, and future values for 2050 and 2100 were estimated using damped linear trend extrapolation with a damping factor of 0.9, based on historical data.

The data were processed and normalized to support comparisons between counties, indicators, and selected years. The resulting datasets cover 380 Polish counties and are stored in JSON and GeoJSON formats.

## Climate risk methodology

The overall climate risk assessment is based on four components:

- **Hazard (H):** Represents the occurrence and intensity of climate-related threats. It includes five indicators: **heatwaves, heavy rainfall, drought, strong winds, and flooding**.

- **Vulnerability (V):** Describes the socioeconomic and demographic characteristics that influence how severely communities may be affected by climate-related hazards. It includes five indicators: **wealth, primary sector employment, unemployment, children, and elderly population**.

- **Exposure (E):** Represents the presence and concentration of people and environmental assets that may be affected by climate-related hazards. It includes two indicators: **population density and biodiversity**. Population density is classified as exposure because it describes the concentration of people potentially affected by hazardous events, rather than their socioeconomic susceptibility to harm. Biodiversity is included as exposure because it represents environmental assets and ecosystems potentially subject to climate-related impacts, rather than the vulnerability of the human population.

- **Response (R):** Represents the capacity of local authorities to prepare for, adapt to, and respond to climate-related challenges. It includes two indicators: **spatial planning coverage (MPZP) and capital expenditure**.

The overall risk score is calculated as:

**Total Risk = H + V + E + (100 − R)**

Each component is expressed on a scale from 0 to 100, resulting in a total risk score ranging from 0 to 400.

Higher Hazard, Vulnerability, and Exposure values increase the overall risk score, while higher Response values reduce it.

The dashboard allows users to select individual indicators and explore how their inclusion affects the resulting risk assessment.

## Dashboard features

The application includes:

- **Interactive map of Poland** displaying climate risk across 380 counties.
- **County rankings** based on the overall climate risk score.
- **Indicator selection** allowing users to customize the climate risk assessment.
- **Climate risk components** covering Hazard, Vulnerability, Exposure, and Response.
- **Comparative visualizations**, including distribution charts and a parallel coordinates chart comparing a selected county with its voivodeship average and the national average.
- **Data tables and detailed indicator information** for exploring the underlying results.
- **Year selection** for 2025, 2050, and 2100.
- **Multiple color palettes** for visualizing spatial differences in climate risk.
- **Multilingual interface** available in Polish, English, and Norwegian.

## Repository structure

```text
Klimatrisk-Poland/
├── frontend/    # React, TypeScript, and Vite dashboard application
├── scripts/     # Data processing and preparation scripts
└── README.md    # Project documentation
```

## Running locally

Running the project locally is useful for development and testing.

You need to have [Node.js](https://nodejs.org/) installed. Node.js also installs `npm`, which is used to install the frontend dependencies and start the development server.

Open a terminal in the repository folder and run:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will usually start at:

```text
http://localhost:5173/klimarisk/
```

Open this address in a web browser to view the dashboard.

## Technologies

The dashboard is built using:

- **React** and **TypeScript** for the user interface.
- **Vite** for frontend development and building.
- **Leaflet** and **React-Leaflet** for interactive mapping.
- **SVG-based visualizations** for comparing climate risk components.
- **JSON and GeoJSON** for climate risk data and administrative boundaries.
- **R and other data processing scripts** for preparing and transforming the underlying datasets.

## Original project and attribution

Climate Risk Poland is based on the open-source **Klimarisk** project developed by **Tobias Andresen**.

Original repository: [github.com/tiltobias/klimarisk](https://github.com/tiltobias/klimarisk)

Original online application: [tiltobias.github.io/klimarisk](https://tiltobias.github.io/klimarisk/)

The original project was developed in the context of a master's thesis in Geomatics at NTNU and focused on climate risk in Norwegian municipalities.

**Climate Risk Poland** builds upon the original dashboard and adapts it to the Polish context, including Polish administrative boundaries, climate risk indicators, datasets, translations, and additional comparative visualizations.

Credit for the original application and its foundational implementation belongs to Tobias Andresen.
