import { useEffect, useState } from "react";
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7a28911433e045e19500d0a1d74bc941";
export default function Search({setFoodData, foodData}) {
  const [query, setQuery] = useState("pizza");
  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
