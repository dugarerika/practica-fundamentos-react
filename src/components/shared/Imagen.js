import React from 'react';
import styles from './Imagen.module.css';
import classNames from 'classnames';

console.log(styles);
const Imagen = ({ className, ...props }) => (
	<img className={classNames(styles.imagen, className)} alt='' {...props} />
);

export default Imagen;
