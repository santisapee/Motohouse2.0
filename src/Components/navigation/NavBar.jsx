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
          <Link to={'/contact'}>Contact</Link>
        </button>
      </div>
    </>
  );
}
