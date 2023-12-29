import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scaffold from '../components/Scaffold';
const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
      
    },
    out: {
      opacity: 0
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5
}; 

export const PageLayout = ({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => children;

export default function Layout () {
  const { pathname } = useLocation();
  return (
    <PageLayout>
        <Scaffold>
          <motion.div className='flex-col' key={pathname} initial="initial" animate="in" variants={pageVariants} transition={pageTransition} >
              <Outlet />
          </motion.div>
        </Scaffold>
    </PageLayout>
  );
}