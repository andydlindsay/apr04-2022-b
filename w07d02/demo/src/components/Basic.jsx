// import { Fragment } from 'react';

const Basic = (props) => {
  console.log('props', props);

  // const myArr = [
  //   <div>Hello there</div>,
  //   <p>Even more fascinating stuff</p>,
  //   <button>Click me!!!</button>
  // ];

  return (
    <>
      <h2>Greeting is: {props.greeting}</h2>

      {/* { myArr } */}
    </>
  );
};

export default Basic;
