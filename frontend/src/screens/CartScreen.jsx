import { useEffect } from "react";
import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

function CartScreen() {
  const location = useLocation();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const { productId } = useParams();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));

    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      Cart
    </div>
  );
}

export default CartScreen;