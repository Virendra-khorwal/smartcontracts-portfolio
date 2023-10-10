import { MediaRenderer } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

type HeroCardProps = {
  isLoading: boolean;
  title: string;
  description: string;
  image: string;
};

const HeroCard = (props: HeroCardProps) => {
  return (
    <>
      {props.isLoading ? (
        <div className={styles.loadingText}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.heroContainer}>
          <div className={styles.heroImageContainer}>
            <MediaRenderer src={props.image} width="100%" height="auto" className={styles.heroImage} />
          </div>

          <div className={styles.heroCardContent}>
            <h1 className={styles.gradientText1}>{props.title}</h1>
            {/* <p>{props.description}</p> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit excepturi ea, recusandae totam consectetur </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroCard;
