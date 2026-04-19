import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{ 
      position: 'sticky', 
      top: '10px', 
      zIndex: 1000, 
      margin: '10px 20px',
      padding: '10px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Link to="/" style={{ 
          fontSize: '1.8rem', 
          fontWeight: '900', 
          textDecoration: 'none',
          color: 'var(--white)'
        }}>
          <span className="text-gradient">مملكة</span> البطاطا
        </Link>
        
        <div style={{ display: 'flex', gap: '20px' }} className="nav-links">
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>الرئيسية</Link>
          <Link to="/home" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>المتجر</Link>
          <Link to="#" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>عن المملكة</Link>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button className="glass" style={{ padding: '8px', borderRadius: '12px', border: '1px solid var(--glass-border)', cursor: 'pointer' }}>
          <ShoppingCart size={20} />
        </button>
        <Link to="/login" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '1rem' }}>
          دخول <User size={18} />
        </Link>
        <button className="glass mobile-menu" style={{ padding: '8px', borderRadius: '12px', display: 'none' }}>
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
