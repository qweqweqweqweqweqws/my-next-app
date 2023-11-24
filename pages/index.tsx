import type { GetServerSidePropsContext, NextPage } from "next";
import useExperiment from "../hooks/useExperiment";
import First from "./first";
import Second from "./second";
import styles from "./index.module.css";
import Link from "next/link";

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
      <Link href={process.env.NEXT_PUBLIC_URL as string}>asdas</Link>

      <div className={styles["container"]}>
        QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqq
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {


  return { props: {
    asd: 'asd'
  } }
}