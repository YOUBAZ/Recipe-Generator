import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function handleClick(e) {}
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
