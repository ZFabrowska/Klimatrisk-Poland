import { useEffect, useState } from "react";
import useDataStore from "../../hooks/useDataStore";
import { getDataFileJSON } from "../../hooks/getPublicUrl";
import type { KommuneGeoJSON } from "./KommuneLayer";
import "./Map.css";

interface Props {
  mouseOnMap: boolean;
}

function KommuneLabel({ mouseOnMap }: Props) {
  const { highlightedKommune } = useDataStore();
  const [geojson, setGeojson] = useState<KommuneGeoJSON | null>(null);

  useEffect(() => {
    getDataFileJSON("powiaty.geojson").then(setGeojson);
  }, []);

  const powiat = geojson?.features.find(
    (feature) =>
      feature.properties.JPT_KOD_JE === highlightedKommune
  );

  const nazwaPowiatu = powiat?.properties.JPT_NAZWA_;

  return (
    <>
      {mouseOnMap && highlightedKommune && nazwaPowiatu && (
        <div className="kommuneLabel">
          {nazwaPowiatu}
        </div>
      )}
    </>
  );
}

export default KommuneLabel;