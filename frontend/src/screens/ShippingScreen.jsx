import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.jsx';
import CheckoutSteps from '../components/CheckoutSteps.jsx';
import { saveShippingAddress } from '../actions/cartActions.jsx';

function ShippingScreen() {

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(saveShippingAddress({
      address,
      city,
      postalCode,
      country
    }));
    navigate('/payment');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group controlId="address">
          <Form.Label>Your Address</Form.Label>
          <Form.Control required type="text" placeholder="Enter Your Address" value={address ? address : ''} onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Your City</Form.Label>
          <Form.Control required type="text" placeholder="Enter Your City" value={city ? city : ''} onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control required type="text" placeholder="Enter Postal Code" value={postalCode ? postalCode : ''} onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Your Country</Form.Label>
          <Form.Control required type="text" placeholder="Enter Your Country" value={country ? country : ''} onChange={(e) => setCountry(e.target.value)}></Form.Control>
        </Form.Group>

        <Button className="my-4 w-100" type="submit" variant="primary">
          Continue
        </Button>
      </Form>

    </FormContainer>
  );
}

export default ShippingScreen;