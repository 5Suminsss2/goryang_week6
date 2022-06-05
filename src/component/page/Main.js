import Card from '../../shared/Card';
import styles from "./Main.module.css";
import data from "../../data/data.json";
import Sidebar from '../../shared/Sidebar';

function Main() {
    function cardFunc(data, index) {
        return (
            <Card data={data} key={index} />
        )
    }

    return (
        <div>
            <header>
                <span className={styles.title}>고량주</span>
            </header>
            <main>
                <Sidebar />
                <section class={styles.container} id="container">
                    {data['data'].map(cardFunc)}
                </section>
            </main>
        </div>
    )
}

export default Main;