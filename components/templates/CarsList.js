import Router, { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarsList({ cars }) {
  const roter = useRouter();

  const backHandler = () => {
    Router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {cars.map((car) => (
          <Card key={car.id} {...car}/>
        ))}
      </div>
    </div>
  );
}

export default CarsList;
