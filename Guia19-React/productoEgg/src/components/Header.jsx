
import { Link } from "react-router-dom";
// import LogoImg from "../img/corazon.jpeg";

export default function Header() {
  return (
    <header>
      <link to={"/"}>
        <img src="../img/ecosistema.png" alt="" />
      </link>
      <nav>
        <Link to={"/"}>Productos</Link>
        <Link to={"/"}>Favoritos</Link>
      </nav>
    </header>
  );
}
