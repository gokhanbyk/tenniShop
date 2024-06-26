import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.jsx';
import CheckoutSteps from '../components/CheckoutSteps.jsx';
import { savePaymentMethod } from '../actions/cartActions.jsx';


function PaymentScreen() {

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const navigate = useNavigate();
  if (!shippingAddress.address) {
    navigate('/shipping');
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check type="radio" label='Paypal or Credit Card' id="paypal" name="paymentMethod" checked onChange={(e) => setPaymentMethod(e.target.value)}>

            </Form.Check>
          </Col>
        </Form.Group>



        <Button className="my-4 w-100" type="submit" variant="primary">Continue</Button>
      </Form>

    </FormContainer>
  );
}

export default PaymentScreen;