import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.h2}>Front End Developer</h2>
      <h1 className={styles.h1}> VOLODYMYR DYKUNSKYI</h1>
    </div>
  );
};
export { Home };
