import React, { FC } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";

const App:FC = ():JSX.Element =>  {
  return (
    <div className={styles.App}>
      <Login/>
    </div>
  );
}

export default App;

{/* <header>
        <Header />
      </header>
      <main>
        
      </main>
      <footer>
        <Footer />
      </footer> */}