import type { NextPage } from "next";
import useExperiment from "../hooks/useExperiment";
import First from "./first";
import Second from "./second";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const variant = useExperiment("i2Ri3Ga8SoKm_p1maUngGA");
  console.log(variant);
  console.log(typeof variant);

  if (variant === "1") {
    return <First />;
  }

  if (variant === "2") {
    return <Second />;
  }

  return (
    <div>
      <div className={styles["container"]}>
        QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqq
      </div>
    </div>
  );
};

export default Home;
