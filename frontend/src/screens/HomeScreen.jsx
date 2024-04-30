import Product from '../components/Product.jsx';
import products from '../products.js';
import { Row, Col } from 'react-bootstrap';

function HomeScreen() {

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => {
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            {console.log(product)}
          </Col>;
        })}
      </Row>
    </div>
  );
}

export default HomeScreen;