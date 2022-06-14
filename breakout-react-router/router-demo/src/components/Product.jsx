import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  // props.getProductById(params.id);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.id}`)
  //     .then(res => setProduct(res.data));
  // }, [params.id]);

  return (
    <div>
      <h2>This is the Product component for #{params.id}</h2>
    </div>
  );
};

export default Product;
