import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div
        style={{
          marginBottom: 30,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          color: "white",
        }}
      >
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/products"}>
          <button>Products</button>
        </Link>
        <Link to={"/categories/deportiva"}>
          <button>Deportiva</button>
        </Link>
        <Link to={"/categories/trial"}>
          <button>Trial</button>
        </Link>
        <Link to={"/categories/naked"}>
          <button>Naked</button>
        </Link>
        <Link to={"/cart"}>
          <button>🛒 Carrito</button>
        </Link>
        <Link to={"/contact"}>
          <button>Contacto</button>
        </Link>
      </div>
    </>
  );
}
