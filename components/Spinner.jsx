import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center" >
            <div className={styles.ldshourglass}></div>
        </div>
    );
};

export default Spinner;