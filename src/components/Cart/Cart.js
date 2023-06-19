import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);
  const itemList = cartItems.map(item => {
    return  <CartItem
    item={{ title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price, id: item.id }}
    key={item.id}
  />
  })

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {itemList}
      </ul>
    </Card>
  );
};

export default Cart;
