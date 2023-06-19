import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);

  const showCartHandler = () =>{
    dispatch(cartActions.toggleCounter());
  };
  


  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{+totalItems}</span>
    </button>
  );
};

export default CartButton;
