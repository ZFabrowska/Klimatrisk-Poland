import './Header.css';
import YearSelect from './YearSelect';
import LayoutSelect from './LayoutSelect';
import LanguageSelect from './LanguageSelect';
import ReportButton from './ReportButton';
import PaletteSwitcher from '../PaletteSwitcher';


interface Props {
  noControls?: boolean;
}


function Header({ noControls }: Props) {

  return (
    <header>
      <h1>
        <a href="https://github.com/ZFabrowska/Klimatrisk-Poland" target="_blank" rel="noopener noreferrer">
          Climate Risk Poland
        </a>
      </h1>
      {!noControls && (
        <div className="headerControls">
          <LayoutSelect />
          <YearSelect />
          <ReportButton />
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <PaletteSwitcher />
        <LanguageSelect />
      </div>
    </header>
  )
}

export default Header;