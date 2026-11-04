
import { useState } from "react";
import useDataStore from "../hooks/useDataStore";
import type { RiskPalette } from "../assets/colors";

const palettes: { code: RiskPalette; name: string; colors: string[] }[] = [
  {
    code: "red",
    name: "Red",
    colors: ["#fff5f0", "#fb6a4a", "#67000d"]
  },
  {
    code: "traffic",
    name: "Green–yellow–red",
    colors: ["#1a9850", "#ffffbf", "#d73027"]
  },
  {
    code: "viridis",
    name: "Viridis",
    colors: ["#fde725", "#21918c", "#440154"]
  }
];

function PaletteSwitcher() {
  const { riskPalette, setRiskPalette } = useDataStore();
  const [open, setOpen] = useState(false);

  const selected = palettes.find(p => p.code === riskPalette)!;

  const preview = (colors: string[]) => (
    <span
      style={{
        display: "flex",
        width: 36,
        height: 16,
        overflow: "hidden",
        borderRadius: 3,
        flexShrink: 0
      }}
    >
      {colors.map((color, index) => (
        <span
          key={index}
          style={{ backgroundColor: color, flex: 1 }}
        />
      ))}
    </span>
  );

  return (
    <div className="languageDropdown">
      <button
        className="languageSelect"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Choose color palette"
      >
        {preview(selected.colors)}
        <span>⌄</span>
      </button>

      {open && (
        <div className="languageDropdownMenu">
          {palettes.map(({ code, name, colors }) => (
            <button
              key={code}
              onClick={() => {
                setRiskPalette(code);
                setOpen(false);
              }}
            >
              {preview(colors)}
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaletteSwitcher;
