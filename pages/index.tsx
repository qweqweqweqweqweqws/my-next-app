import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useExperiment from "../hooks/useExperiment";
import styles from "../styles/Home.module.css";
import First from "./first";
import Second from "./second";

const Home: NextPage = () => {
  const variant = useExperiment("i2Ri3Ga8SoKm_p1maUngGA");
  console.log(variant);

  return <div className={styles.container}>{variant === 1 ? <First /> : <Second />}</div>;
};

export default Home;
