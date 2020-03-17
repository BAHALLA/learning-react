import React from "react";
import styles from './styledComponent.module.css';

function StyledComponent() {

    return (
        <div>
            <h1 className={styles.header}>Styled header</h1>
        </div>
    );

}

export default StyledComponent;