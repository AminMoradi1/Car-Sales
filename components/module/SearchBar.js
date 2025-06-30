import { useState } from "react";
import styles from "./SearchBar.module.css";
import { CloseButton, toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const sarchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`)
    } else {
      toast.error("please Enter min and max price ❌ ", { icon: false });
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        position="top-center"
        closeButton={false}
        toastStyle={{
          width: "30%",
          fontSize: "1rem",
          textAlign: "center",
        }}
      />
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={sarchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
