import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { RetroGrid } from './RetroGrid';

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.25rem;
  margin-bottom: 5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  padding: 0.5rem;
`;

const features = [
  {
    icon: FaCode,
    title: "Technical Workshops",
    description: "Master cutting-edge technologies through immersive, hands-on workshops led by industry experts",
    color: "var(--light-blue)",
    iconColor: "var(--medium-blue)",
    darkBg: "rgba(66, 133, 244, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-blue), var(--medium-blue))"
  },
  {
    icon: FaUsers,
    title: "Community Events",
    description: "Join a vibrant community of developers and tech enthusiasts to share knowledge and grow together",
    color: "var(--light-red)",
    iconColor: "var(--medium-red)",
    darkBg: "rgba(234, 67, 53, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-red), var(--medium-red))"
  },
  {
    icon: FaLightbulb,
    title: "Innovation Hub",
    description: "Transform your innovative ideas into reality with mentorship from experienced professionals",
    color: "var(--light-yellow)",
    iconColor: "var(--yellow)",
    darkBg: "rgba(251, 188, 4, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-yellow), var(--yellow))"
  },
  {
    icon: FaRocket,
    title: "Career Growth",
    description: "Accelerate your career with industry insights, networking opportunities, and professional development",
    color: "var(--light-green)",
    iconColor: "var(--medium-green)",
    darkBg: "rgba(52, 168, 83, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-green), var(--medium-green))"
  }
];

const FeatureCard = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: ${props => props.bgColor};
  text-align: center;
  transition: all 0.2s ease;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  body.dark & {
    background: ${props => props.darkBg};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    body.dark & {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  }

  h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.25rem 0;
    background: ${props => props.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    body.dark & {
      opacity: 0.9;
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.1rem;
    
    body.dark & {
      color: var(--text-secondary-dark);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.color};
  margin-bottom: 1.25rem;
  transition: transform 0.2s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      {/* <RetroGrid className="opacity-30 dark:opacity-20" angle={75} /> */}
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Offer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover a world of opportunities to learn, grow, and connect with the tech community
        </Subtitle>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              bgColor={feature.color}
              darkBg={feature.darkBg}
              iconColor={feature.iconColor}
              gradient={feature.gradient}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon color={feature.iconColor}>
                <feature.icon />
              </FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 