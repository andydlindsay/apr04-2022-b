import {Link, Routes, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>This is the Products component</h2>

      <div>
        <Link to="1">Product #1 </Link>
        <Link to="2">Product #2 </Link>
        <Link to="3">Product #3 </Link>
        <Link to="4">Product #4</Link>
      </div>

      <Routes>
        <Route path=":id" element={<Product />} /> 
        <Route path="" element={<h2>Please choose an item from the list above</h2>} />
      </Routes>
    </div>
  );
};

export default Products;
