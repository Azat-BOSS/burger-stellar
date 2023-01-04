import React from "react";
import appStyles from "./app.module.css"
import AppHeader from '../AppHeader/AppHeader';
import Home from "../../pages/Home/Home";

function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader/>
      <main className={appStyles.main}>
        <Home/>
      </main>
    </div>
  );
}

export default App;
