import styles from "./Sidebar.module.css";
import Modal from './Modal';
import { useState } from 'react';

function Sidebar({ handleAddItem, data }) {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }

    function name(data, index) {
        return (
            <span key={index}>{data.name}</span>
        )
    }



    return (
        <div className={styles.sidebar} id="sidebar">
            <button className={styles.addButton} onClick={openModal}>추가</button>
            {data.map(name)}
            <Modal open={open} close={closeModal} handleAddItem={handleAddItem} />
        </div>
    )
}

export default Sidebar;