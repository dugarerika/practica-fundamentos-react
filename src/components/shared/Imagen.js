import React from 'react';
import styles from './Imagen.module.css';

// const Imagen = (src, alt) => <img className='photo' alt={alt} src={src} />;
console.log(styles);
const Imagen = (props) => <img className={styles.imagen} alt='' {...props} />;

export default Imagen;
