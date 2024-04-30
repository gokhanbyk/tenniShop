/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';


export default function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
    </Card>
  );
}
