import ProductItem from './ProductItem';
import classes from './Products.module.css';
import DummyProducts from '../../storeDummies';

const Products = (props) => {

  const productList = DummyProducts.map((item) =>{
   return <ProductItem
    title={item.title}
    price={item.price}
    description={item.description}
    id={item.id}
    key={item.id}
  />
  })
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;
