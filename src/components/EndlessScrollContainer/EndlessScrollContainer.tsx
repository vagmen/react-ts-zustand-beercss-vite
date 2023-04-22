import { ReactElement, useEffect } from "react";
import { useStore } from "../../store";
import { IBeer } from "../../interfaces";
import styles from "./EndlessScrollContainer.module.css";
// import "./../../App.css";

interface IEndlessScrollContainer {
  children: ReactElement;
}

export const EndlessScrollContainer = ({
  children,
}: IEndlessScrollContainer) => {
  return <div className={styles.scrollable}>{children}</div>;
};
