import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container flex-center" style={{ minHeight: 'calc(100vh - 80px)', direction: 'rtl' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={{ width: '100%', maxWidth: '450px', padding: '48px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>عودة حميدة</h2>
          <p style={{ color: 'var(--text-muted)' }}>سجل دخولك لمتابعة طلباتك في مملكة البطاطا</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>البريد الإلكتروني</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
              <input 
                type="email" 
                placeholder="email@example.com"
                className="form-input"
                style={{ paddingRight: '48px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>كلمة المرور</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="form-input"
                style={{ paddingRight: '48px' }}
              />
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', marginBottom: '24px' }}>
            تسجيل الدخول <LogIn size={20} />
          </button>

          <div style={{ position: 'relative', textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ 
              backgroundColor: '#451a03', 
              padding: '0 10px', 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)',
              position: 'relative',
              zIndex: 1
            }}>أو عبر</span>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: 0, 
              right: 0, 
              height: '1px', 
              backgroundColor: 'var(--glass-border)' 
            }} />
          </div>

          <button className="btn btn-secondary" style={{ width: '100%', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            الدخول عبر جوجل
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)' }}>
          ليس لديك حساب؟ <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>سجل الآن</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
