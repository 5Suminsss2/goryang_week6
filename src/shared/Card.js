import styles from "./Card.module.css";

function Card({ data }) {
    return (
        <div class={styles.card}>
            <img src={data.image} alt={data.name} />
            <span>{data.content}</span>
        </div>
    )
}

export default Card;