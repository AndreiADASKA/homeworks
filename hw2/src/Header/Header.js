import '../Header/header.css';

function Header(props) {
  return (
    <header>
      <h1>{props.headerTitle}</h1>
      <div>{props.kol}</div>
    </header>
  );
}

export default Header;
