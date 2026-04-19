import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import potatoHero from '../assets/potato_hero.png';

const Landing = () => {
  return (
    <div className="container" style={{ direction: 'rtl' }}>
      {/* Hero Section */}
      <section style={{ 
        textAlign: 'center', 
        padding: '60px 0 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ 
            padding: '6px 20px', 
            fontSize: '0.9rem', 
            marginBottom: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--secondary)'
          }}
        >
          <Sparkles size={16} />
          خصم خاص 20% على طلبك الأول من المملكة!
        </motion.div>

        <div className="hero-wrapper">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-title"
            >
              أهلاً بكم في <br />
              <span className="text-gradient">مملكة البطاطا</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-desc"
            >
              نقدم لكم ألذ وأشهى أنواع البطاطا المشوية والمجهزة بخلطاتنا السرية الملكية. طعم الأصالة في كل قضمة!
            </motion.p>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="hero-buttons"
            >
              <Link to="/register" className="btn btn-primary">
                اطلب الآن <ArrowLeft size={20} />
              </Link>
              <button className="btn btn-secondary">
                استكشف المنيو
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ flex: '1', minWidth: '300px' }}
          >
            <img 
              src={potatoHero} 
              alt="مملكة البطاطا" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                borderRadius: '32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '4px solid var(--glass-border)'
              }}
              className="animate-float"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '80px 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {[
            { 
              icon: <Star className="text-gradient" size={32} />, 
              title: 'جودة ملكية', 
              desc: 'نختار أفضل حبات البطاطا العضوية لضمان مذاق لا يقاوم.' 
            },
            { 
              icon: <Clock className="text-gradient" size={32} />, 
              title: 'توصيل سريع', 
              desc: 'طلبك يوصلك ساخن ومقرمش كأنك في قلب المملكة.' 
            },
            { 
              icon: <MapPin className="text-gradient" size={32} />, 
              title: 'فروعنا قريبة', 
              desc: 'نغطي جميع أنحاء المدينة لخدمتكم أينما كنتم.' 
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.06)' }}
              className="glass-card"
              style={{ padding: '40px', borderRadius: '32px', textAlign: 'center' }}
            >
              <div className="flex-center" style={{ marginBottom: '24px' }}>{feature.icon}</div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
