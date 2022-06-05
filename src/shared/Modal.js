import styles from "./Modal.module.css";
import axios from 'axios';
import { useRef } from 'react';

function Modal({ open, close }) {
    function onSubmit(e) {
        e.preventDefault();

        axios.post(`http://localhost:3001/data`,
            {
                name: nameRef.current.value,
                title: titleRef.current.value,
                image: imageRef.current.value
            },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(res => {
                console.log("전송 성공");
                close(false);
            })
            .catch(res => { console.log('Error!') });
    };


    const nameRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    return (
        <>
            {open ? (
                <div class={styles.modalBackground}>
                    <form class={styles.modal} onSubmit={onSubmit}>
                        <span class={styles.modalClose} onClick={close}>X</span>
                        <label for="name" class={styles.label}>이름</label>
                        <input ref={nameRef} type="text" class={styles.modalInput} placeholder="오레오 와인" />

                        <label for="image" class={styles.label}>이미지</label>
                        <input ref={imageRef} type="text" class={styles.modalInput} placeholder="URL" />

                        <label for="content" class={styles.label}>내용</label>
                        <input ref={titleRef} type="text" class={styles.modalInput} placeholder="오레오를 잘게 썰어 만들어요" />

                        <button class={styles.saveButton}>저장하기</button>
                    </form>
                </div>
            ) : null}
        </>

    )
}

export default Modal;