import Product from '../components/Product.jsx';
import { Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions.jsx';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());

  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <Loader />
        : error ? <Message variant='warning'>{error}</Message>
          : <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>}

      {/* <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row> */}
    </div>
  );
}

export default HomeScreen;