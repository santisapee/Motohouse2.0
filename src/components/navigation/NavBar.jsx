import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div style={{ marginBottom: 30, display: 'flex', flexWrap:'wrap', justifyContent:'center', gap: 10, color: 'white' }}>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to={'/products'}>Products</Link>
        </button>
        <button>
          <Link to={'/categories'}>Marcas</Link>
        </button>
        <button>
          <Link to={'/categories/deportiva'}>Deportiva</Link>
        </button>
        <button>
          <Link to={'/categories/trial'}>Trial</Link>
        </button>
        <button>
          <Link to={'/categories/naked'}>Naked</Link>
        </button>
        <button>
          <Link to={'/cart'}>🛒 Carrito</Link>
        </button>
        <button>
          <Link to={'/contact'}>Contacto</Link>
        </button>
      </div>
    </>
  );
}
