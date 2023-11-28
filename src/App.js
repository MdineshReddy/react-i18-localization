import "./App.css";

import "./i18";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  console.log(navigator.language);

  return (
    <div className="App">
      <p>{t("Welcome to React")}</p>
    </div>
  );
}

export default App;
