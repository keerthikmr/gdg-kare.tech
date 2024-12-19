import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const FooterContainer = styled.footer`
  background: ${(props) => (props.isDark ? "#1a1a1a" : "var(--black)")};
  color: ${(props) => (props.isDark ? "#f5f5f5" : "white")};
  padding: 3rem 2rem;
  border-top: 1px solid
    ${(props) => (props.isDark ? "rgba(255, 255, 255, 0.1)" : "transparent")};
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
    0 -2px 4px -1px rgba(0, 0, 0, 0.06);
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
    color: ${(props) =>
      props.isDark ? "var(--light-blue)" : "var(--medium-blue)"};
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: ${(props) => (props.isDark ? "#a3a3a3" : "inherit")};
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${(props) => (props.isDark ? "#a3a3a3" : "white")};
  font-size: 1.5rem;

  &:hover {
    color: ${(props) =>
      props.isDark ? "var(--light-blue)" : "var(--medium-blue)"};
  }
`;

const QuickLink = styled(Link)`
  color: ${(props) => (props.isDark ? "#a3a3a3" : "white")};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) =>
      props.isDark ? "var(--light-blue)" : "var(--medium-blue)"};
  }
`;

const QuickLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Footer = () => {
  const { isDark } = useTheme();

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Team",
      path: "/team",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: "https://chat.whatsapp.com/EhaEKb9Hi2nLjtiyCGTQSM",
      label: "WhatsApp Community",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/gdsc-kare",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/gdg_oncampus_kare",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/gdsckare",
      label: "Twitter",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@GDG_Oncampus_KARE",
      label: "YouTube",
    },
  ];
  

  return (
    <FooterContainer isDark={isDark}>
      <FooterContent>
        <FooterSection isDark={isDark}>
          <h3>GDG On Campus KARE</h3>
          <p>
            Empowering developers and fostering innovation in our campus
            community.
          </p>
        </FooterSection>
        <FooterSection isDark={isDark}>
          <h3>Quick Links</h3>
          <QuickLinksList>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <QuickLink
                  to={link.path}
                  as={motion.a}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  isDark={isDark}
                >
                  {link.name}
                </QuickLink>
              </li>
            ))}
          </QuickLinksList>
        </FooterSection>
        <FooterSection isDark={isDark}>
          <h3>Connect With Us</h3>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                as={motion.a}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
                isDark={isDark}
              >
                <social.icon />
              </SocialIcon>
            ))}
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
