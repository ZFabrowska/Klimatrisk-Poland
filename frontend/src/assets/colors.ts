
import { viewMode } from '../hooks/getUrlParams.ts';

//red palette
export const thesisScale = [
  '#fff5f0',
  '#fcbba1',
  '#fb6a4a',
  '#cb181d',
  '#67000d'
];

//orange palette
export const orangeScale = [
  '#f7ded0',
  '#f5b490',
  '#ec844c',
  '#e35205',
  '#a63d05'
];

//green - yellow - red
export const trafficScale = [
  '#1a9850',
  '#91cf60',
  '#ffffbf',
  '#fc8d59',
  '#d73027'
];

//colorblind friendly palette
export const viridisScale = [
  '#fde725',
  '#5ec962',   
  '#21918c',
  '#3b528b',
  '#440154'
  
  
];

export const riskPalettes = {
  red: thesisScale,
  traffic: trafficScale,
  viridis: viridisScale
};

export type RiskPalette = keyof typeof riskPalettes;

export const defaultRiskColors =
  viewMode === 'embedded' ? orangeScale : thesisScale;
