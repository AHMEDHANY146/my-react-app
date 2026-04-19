import { motion } from 'framer-motion';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container flex-center" style={{ minHeight: 'calc(100vh - 80px)', direction: 'rtl' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={{ width: '100%', maxWidth: '450px', padding: '48px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>انضم للمملكة</h2>
          <p style={{ color: 'var(--text-muted)' }}>كن جزءاً من عالم التميز والمذاق الرفيع</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>الاسم الكامل</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
              <input 
                type="text" 
                placeholder="أحمد محمد"
                className="form-input"
                style={{ paddingRight: '48px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
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
            إنشاء حساب <UserPlus size={20} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)' }}>
          لديك حساب بالفعل؟ <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>سجل دخولك</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
