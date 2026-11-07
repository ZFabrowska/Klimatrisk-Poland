import './Dashboard.css'
import useDataStore from '../hooks/useDataStore'
import Map from '../components/map/Map'
import DistributionChart from '../components/chart/DistributionChart';
import RiskTree from '../components/RiskTree';
import RiskTable from '../components/RiskTable';
import DetailedStats from '../components/details/DetailedStats';
import useLanguageStore, { t } from '../hooks/useLanguageStore';
import Header from '../components/header/Header';
import Panel from '../components/Panel';
import { useEffect, useState } from 'react';
import ParallelCoordinatesChart from '../components/chart/ParallelCoordinatesChart';

function Dashboard() {

  const {
    selectedDistribuion, 
    layout,
  } = useDataStore();
  const { l } = useLanguageStore();
  const [chartView, setChartView] = useState(false);
  useEffect(() => {
    if (layout === "first") {
      setChartView(false);
    }
  }, [layout]);

  return (
  <>
    <Header />

    <div
      className={`dashboard ${layout === "first" ? "gridLayout1" : "gridLayout2"} ${chartView ? "chartViewLayout" : ""}`}
    >
      <Panel
        title={l(t.panels.tree)}
        tooltip={l(t.panels.tree.tooltip)}
        className="tree"
      >
        <RiskTree />
      </Panel>

      <Panel
        title={l(t.panels.map)}
        tooltip={l(t.panels.map.tooltip)}
        className="map"
      >
        <Map />
      </Panel>

      {!chartView ? (
        <>
          <Panel
            title={l(t.panels.chart)}
            tooltip={l(t.panels.chart.tooltip)}
            className="chart"
          >
            <DistributionChart distributionKey={selectedDistribuion} />
          </Panel>

          <Panel
            title={l(t.panels.table)}
            tooltip={l(t.panels.table.tooltip)}
            className="table"
          >
            <RiskTable />
          </Panel>

          <Panel
            title={l(t.panels.details)}
            tooltip={l(t.panels.details.tooltip)}
            className="details"
          >
            <button
              type="button"
              onClick={() => setChartView(true)}
              style={{ marginBottom: "12px" }}
            >
              {l(t.panels.chartView)}
            </button>

            <DetailedStats />
          </Panel>
        </>
      ) : (
        <Panel
          title={l(t.panels.chartView)}
          tooltip={l(t.panels.chartViewTooltip)}
          className="chartView"
        >
          <button
            type="button"
            onClick={() => setChartView(false)}
            style={{ marginBottom: "12px" }}
          >
            {l(t.panels.backToRankings)}
          </button>

          <ParallelCoordinatesChart />
        </Panel>
      )}
    </div>
  </>
);
}

export default Dashboard
