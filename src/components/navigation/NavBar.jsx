import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div style={{ marginBottom: 30, display: 'flex', gap: 10 }}>
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
          <Link to={'/contact'}>Contacto</Link>
        </button>
      </div>
    </>
  );
}
