import styles from "./Modal.module.css";
import axios from 'axios';
import { useState } from 'react';

function Modal({ open, close, handleAddItem }) {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, content, image);
        handleAddItem({ name, content, image });
        close();
    };

    return (
        <>
            {open ? (
                <div class={styles.modalBackground}>
                    <form class={styles.modal} onSubmit={onSubmit}>
                        <span class={styles.modalClose} onClick={close}>X</span>
                        <label for="name" class={styles.label}>이름</label>
                        <input id="name" type="text" class={styles.modalInput} placeholder="오레오 와인" value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <label for="image" class={styles.label}>이미지</label>
                        <input id="image" type="text" class={styles.modalInput} placeholder="URL" value={image}
                            onChange={(e) => setImage(e.target.value)} />

                        <label for="content" class={styles.label}>내용</label>
                        <input id="content" type="text" class={styles.modalInput} placeholder="오레오를 잘게 썰어 만들어요" value={content}
                            onChange={(e) => setContent(e.target.value)} />

                        <button class={styles.saveButton}>저장하기</button>
                    </form>
                </div>
            ) : null}
        </>

    )
}

export default Modal;