import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Package, Users, Settings, LogOut, ChevronLeft } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'إجمالي الطلبات', value: '1,280', icon: <ShoppingBag size={24} />, trend: '+12%' },
    { label: 'المبيعات اليومية', value: '2,450 ج.م', icon: <TrendingUp size={24} />, trend: '+18%' },
    { label: 'المخزون المتوفر', value: '850 كجم', icon: <Package size={24} />, trend: '-5%' },
    { label: 'العملاء النشطون', value: '420', icon: <Users size={24} />, trend: '+7%' },
  ];

  return (
    <div className="container" style={{ padding: '40px 0', direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>لوحة التحكم الملكية</h1>
          <p style={{ color: 'var(--text-muted)' }}>مرحباً بك مجدداً في إدارة مملكة البطاطا</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="glass" style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)', cursor: 'pointer' }}>
            <Settings size={20} />
          </button>
          <button className="glass" style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)', color: '#ff4444', cursor: 'pointer' }}>
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '24px',
        marginBottom: '48px'
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '24px' } }
            whileHover={{ y: -5 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--primary)' }}>
              {stat.icon}
              <span style={{ 
                fontSize: '0.8rem', 
                color: stat.trend.startsWith('+') ? '#4ade80' : '#f87171',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '4px 8px',
                borderRadius: '8px'
              }}>
                {stat.trend}
              </span>
            </div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{stat.label}</h4>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Recent Orders */}
        <section className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>آخر الطلبات</h3>
            <button style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              عرض الكل <ChevronLeft size={16} />
            </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '16px 8px' }}>رقم الطلب</th>
                <th style={{ padding: '16px 8px' }}>العميل</th>
                <th style={{ padding: '16px 8px' }}>الحالة</th>
                <th style={{ padding: '16px 8px' }}>الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#8821', customer: 'سارة أحمد', status: 'مكتمل', total: '120 ج.م' },
                { id: '#8822', customer: 'محمد علي', status: 'قيد التنفيذ', total: '250 ج.م' },
                { id: '#8823', customer: 'ليلى محمود', status: 'جاري التوصيل', total: '85 ج.م' },
              ].map((order, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '16px 8px' }}>{order.id}</td>
                  <td style={{ padding: '16px 8px' }}>{order.customer}</td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{ 
                      fontSize: '0.8rem',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(255,255,255,0.05)'
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Quick Actions */}
        <section className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>إجراءات سريعة</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            <button className="btn btn-primary" style={{ width: '100%' }}>طلب جديد</button>
            <button className="btn btn-secondary" style={{ width: '100%' }}>تقرير المبيعات</button>
            <button className="btn btn-secondary" style={{ width: '100%' }}>إدارة المخزون</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
