import Card from '../../shared/Card';
import styles from "./Main.module.css";
import data from "../../data/data.json";
import Sidebar from '../../shared/Sidebar';
import { useState } from 'react';

function Main() {
    const initData = [
        {
            name: "소주",
            content: "저는 소주를 안 좋아해요!",
            image:
                "https://cdn.pixabay.com/photo/2017/10/22/08/02/bottle-2877005__340.jpg",
        },
        {
            name: "맥주",
            content: "요즘 흑맥주가 좋아요.",
            image:
                "https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg",
        },
        {
            name: "샴페인",
            content: "샴페인 좋아요~ 샴페인 좋아요~",
            image:
                "https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775__340.jpg",
        },
    ];

    const [data, setData] = useState(initData);

    let handleAddItem = (item) => {
        setData([...data, item]);
    };

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
                <Sidebar handleAddItem={handleAddItem} data={data} />
                <section class={styles.container} id="container">
                    {data.map(cardFunc)}
                </section>
            </main>
        </div>
    )
}

export default Main;