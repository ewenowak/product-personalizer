import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = ({title, colors, sizes, name, basePrice}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = () => {
    const foundSize = sizes.find(element => element.name === currentSize.name)
     
   return basePrice + foundSize.additionalPrice 
  } 

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', name);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductForm 
          handleSubmit={handleSubmit} 
          colors={colors} sizes={sizes} 
          currentColor={currentColor} 
          currentSize={currentSize} 
          setCurrentColor={setCurrentColor} 
          setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes={
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;