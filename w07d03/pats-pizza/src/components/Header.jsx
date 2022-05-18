const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>

      { props.showSubtitle && <h5>The best pizza around!</h5> }
    </div>
  );
};

export default Header;
