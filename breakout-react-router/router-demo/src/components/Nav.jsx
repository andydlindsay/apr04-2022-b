import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>This is the Nav component</h2>
      <nav>
        <Link to="/about">About</Link><br/>
        <Link to="/">Home</Link><br/>
        <Link to="/products">Products</Link><br/>
      </nav>
    </div>
  );
};

export default Nav;
