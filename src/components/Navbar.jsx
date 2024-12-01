import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

// Styled Components
const Nav = styled.nav`
  background: white;
  padding: 0.75rem 2rem;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(66, 133, 244, 0.2) 15%, /* medium-blue */
      rgba(251, 188, 4, 0.2) 35%,  /* yellow */
      rgba(234, 67, 53, 0.2) 50%,  /* medium-red */
      rgba(52, 168, 83, 0.2) 65%,  /* medium-green */
      rgba(66, 133, 244, 0.2) 85%, /* medium-blue */
      transparent 100%
    );
    background-size: 200% auto;
    animation: shimmer 4s linear infinite;
  }

  .dark & {
    background: var(--black);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &::after {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(229, 231, 235, 0.05) 20%,
        rgba(229, 231, 235, 0.1) 50%,
        rgba(229, 231, 235, 0.05) 80%,
        transparent 100%
      );
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.isScrolled ? '0.25rem' : '0.75rem'};
  transition: all 0.4s ease;
  
  &:hover {
    .logo-text {
      max-width: 200px;
      opacity: 1;
      transform: translateX(0);
      transition-delay: 0.1s;
      
      .text-char {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .logo-right {
      transform: translateX(0);
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dark & {
    color: var(--text-primary-dark);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-primary);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all 0.3s ease;
    
    .dark & {
      background: var(--bg-primary-dark);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 2;
  
  &.active {
    color: var(--medium-blue);
  }
  
  .dark & {
    color: white;
    
    &.active {
      color: var(--light-blue);
    }
  }
`;

const NavBackground = styled(motion.div)`
  position: absolute;
  top: 4px;
  left: 0;
  background: var(--light-blue);
  border-radius: 8px;
  height: calc(100% - 8px);
  z-index: 1;
  opacity: 0.2;
  
  .dark & {
    background: var(--blue);
    opacity: 0.1;
  }

  &.active {
    opacity: 0.3;
    .dark & {
      opacity: 0.2;
    }
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
`;

const LogoText = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--black);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0 0.35rem;
  overflow: hidden;
  max-width: ${props => props.isScrolled ? '0' : '200px'};
  opacity: ${props => props.isScrolled ? 0 : 1};
  transform: translateX(${props => props.isScrolled ? '-20px' : '0'});
  transition: all 0.4s ease;
  white-space: nowrap;
  
  .text-char {
    display: inline-block;
    transform: ${props => props.isScrolled ? 'translateY(100%)' : 'translateY(0)'};
    opacity: ${props => props.isScrolled ? 0 : 1};
    transition: transform 0.4s ease, opacity 0.3s ease;
    
    ${Array.from({ length: 8 }).map((_, i) => `
      &:nth-child(${i + 1}) {
        transition-delay: ${0.1 + i * 0.03}s;
      }
    `)}
  }
  
  &:hover .text-char {
    transform: translateY(0);
    opacity: 1;
  }
  
  .dark & {
    color: white;
  }
`;

const RightLogoWrapper = styled(motion.div)`
  transition: all 0.4s ease;
  transform: translateX(${props => props.isScrolled ? '-20px' : '0'});
  opacity: ${props => props.isScrolled ? 0 : 1};
  transition-delay: 0s;
  
  ${props => props.isScrolled && `
    transform: translateX(-20px);
    opacity: 0;
  `}
`;

const Bracket = styled(motion.span)`
  color: var(--medium-blue);
  font-size: 2.75rem;
  font-weight: 400;
  margin: 0 0.35rem;
  line-height: 1;
  
  .dark & {
    color: var(--light-blue);
  }
`;

const GDGLogoLeft = () => (
  <svg width="45" height="45" viewBox="30 30 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z" fill="#EA4335"/>
    <path d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z" fill="#4285F4"/>
  </svg>
);

const GDGLogoRight = () => (
  <svg width="45" height="45" viewBox="200 30 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M240.9 178.4c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8c-7.1-11.1-21.1-15.2-32.8-8.6c-25.2 14.2-50.4 28.4-75.7 42.6c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8C215.2 180.9 229.2 185 240.9 178.4z" fill="#FBBC04"/>
    <path d="M217.1 81.5c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6c6-11.3 3.1-26.3-8.6-32.8c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6C202.5 60 205.5 74.9 217.1 81.5z" fill="#0F9D58"/>
  </svg>
);

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--grey);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background: var(--light-grey);
  }

  .dark & {
    color: var(--light-grey);
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const TextReveal = ({ text, isScrolled }) => {
  return (
    <motion.span
      initial={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 10 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="text-char"
          style={{ 
            display: 'inline-block',
            whiteSpace: 'pre',
            transform: isScrolled ? 'translateY(100%)' : 'translateY(0)',
            opacity: isScrolled ? 0 : 1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);
  const itemRefs = useRef(new Map());
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const navLinksRef = useRef(null);
  const controls = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const handleNavItemHover = (path) => {
    setHoveredItem(path);
    const element = itemRefs.current.get(path);
    if (element) {
      const { offsetLeft: left, offsetWidth: width } = element;
      controls.start({
        x: left,
        width,
        transition: { type: "spring", stiffness: 350, damping: 30 }
      });
    }
  };

  const handleNavMouseLeave = () => {
    setHoveredItem(null);
    const activeElement = itemRefs.current.get(location.pathname);
    if (activeElement) {
      const { offsetLeft: left, offsetWidth: width } = activeElement;
      controls.start({
        x: left,
        width,
        transition: { type: "spring", stiffness: 350, damping: 30 }
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Set initial background position to active item
    const activeElement = itemRefs.current.get(location.pathname);
    if (activeElement) {
      const { offsetLeft: left, offsetWidth: width } = activeElement;
      controls.set({ x: left, width });
    }
  }, [location.pathname, controls]);

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      <NavContainer>
        <LogoLink to="/" onClick={closeMenu}>
          <LogoWrapper isScrolled={isScrolled}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GDGLogoLeft />
            </motion.div>
            
            <LogoText
              className="logo-text"
              isScrolled={isScrolled}
              initial={{ opacity: 1, x: 0 }}
              animate={{ 
                opacity: isScrolled ? 0 : 1,
                x: isScrolled ? '-20px' : '0'
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Bracket
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                [
              </Bracket>
              <TextReveal text="GDG KARE" isScrolled={isScrolled} />
              <Bracket
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ]
              </Bracket>
            </LogoText>
            
            <RightLogoWrapper
              className="logo-right"
              isScrolled={isScrolled}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GDGLogoRight />
            </RightLogoWrapper>
          </LogoWrapper>
        </LogoLink>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavLinks 
          isOpen={isOpen}
          onMouseLeave={handleNavMouseLeave}
        >
          <NavBackground
            initial={false}
            animate={controls}
            className={hoveredItem ? 'active' : ''}
          />
          {[
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
            { name: 'Team', path: '/team' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={closeMenu}
              onMouseEnter={() => handleNavItemHover(item.path)}
              ref={el => itemRefs.current.set(item.path, el)}
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle 
            onClick={() => {
              setIsDark(!isDark);
              closeMenu();
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.div>
          </ThemeToggle>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
