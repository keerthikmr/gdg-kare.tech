import styled from '@emotion/styled';
import { FaGoogle, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: var(--black);
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--medium-blue);
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  
  &:hover {
    color: var(--medium-blue);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>GDG KARE</h3>
          <p>Empowering developers and fostering innovation in our campus community.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Events</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialLinks>
            {[FaGoogle, FaTwitter, FaLinkedin, FaGithub].map((Icon, index) => (
              <SocialIcon
                key={index}
                as={motion.a}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </SocialIcon>
            ))}
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 