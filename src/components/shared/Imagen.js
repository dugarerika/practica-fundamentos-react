import React from 'react';
import styles from './Imagen.module.css';
import classNames from 'classnames';
// const Imagen = (src, alt) => <img className='photo' alt={alt} src={src} />;
console.log(styles);
const Imagen = ({ className, ...props }) => (
	<img className={classNames(styles.imagen, className)} alt='' {...props} />
);

export default Imagen;
