import { motion } from 'framer-motion';
import Navbar from './Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{
          paddingTop: '120px',
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
