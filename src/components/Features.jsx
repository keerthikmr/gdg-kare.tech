import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RetroGrid } from './RetroGrid';
import { useState, useEffect } from 'react';
import NotFoundImage from '../assets/not-found.svg';

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
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: 600;

  body.dark & {
    background: linear-gradient(135deg, var(--light-blue), var(--medium-blue));
    -webkit-background-clip: text;
    background-clip: text;
  }
  body:not(.dark) & {
    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    background-clip: text;
  }
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

const FeatureGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
  transition: all 0.5s ease;

  ${props => props.isExpanded ? `
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, auto);
  ` : `
    grid-template-columns: 2fr 1.5fr;
    grid-template-rows: auto auto;
    
    & > div:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
      width: 95%;
    }
    & > div:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
      width: auto;
      margin-left: -10%;
    }
    & > div:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
      width: 69.5%;
    }
    & > div:nth-child(4) {
      grid-column: 1 / span 2;
      grid-row: 2;
      margin-left: auto;
      width: 60%;
    }
  `}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    
    & > div {
      width: 100% !important;
      margin: 0 !important;
    }
  }
`;

const FeatureImage = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    if (!isError) {
      setImgSrc(NotFoundImage);
      setIsError(true);
    }
  };

  return (
    <motion.img 
      src={imgSrc}
      onError={handleError}
      {...props}
      style={{
        opacity: isError ? 0.7 : 1,
        ...props.style
      }}
    />
  );
};

const Carousel = styled(motion.div)`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    height: 200px; // Reduced height for mobile
    margin-top: 1rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arrows {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    
    button {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

const TruncatedText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.25rem;
  margin: 1.5rem 0;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0;
    padding: 0;
    text-align: center;
  }
`;

const ShortDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.8;
  text-align: left;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    display: none; // Hide subtitle in mobile view
  }
  
  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const ClickIndicator = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  svg {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  body.dark & {
    background: rgba(255, 255, 255, 0.3);
    color: var(--text-primary-dark);
  }

  @media (max-width: 768px) {
    display: none; // Hide click indicator in mobile view
  }
`;

const features = [
  {
    icon: FaCode,
    title: "Technical Workshops",
    shortDesc: "Learn by doing",
    description: "Master cutting-edge technologies through immersive, hands-on workshops led by industry experts",
    images: ['/images/technical-workshops-1.jpg', '/images/technical-workshops-2.jpg', '/images/technical-workshops-3.jpg'],
    color: "var(--light-blue)",
    iconColor: "var(--medium-blue)",
    darkBg: "rgba(66, 133, 244, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-blue), var(--medium-blue))",
    lbgradient: "linear-gradient(135deg, var(--blue), var(--medium-blue))"
  },
  {
    icon: FaUsers,
    title: "Community Events",
    shortDesc: "Connect and grow",
    description: "Join a vibrant community of developers and tech enthusiasts to share knowledge and grow together",
    images: ['/images/community-events-1.jpg', '/images/community-events-2.jpg', '/images/community-events-3.jpg'],
    color: "var(--light-red)",
    iconColor: "var(--medium-red)",
    darkBg: "rgba(234, 67, 53, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-red), var(--medium-red))",
    lbgradient: "linear-gradient(135deg, var(--red), var(--medium-red))"
  },
  {
    icon: FaLightbulb,
    title: "Innovation Hub",
    shortDesc: "Ideas into reality",
    description: "Transform your innovative ideas into reality with mentorship from experienced professionals",
    images: ['/images/innovation-hub-1.jpg', '/images/innovation-hub-2.jpg', '/images/innovation-hub-3.jpg'],
    color: "var(--light-yellow)",
    iconColor: "var(--yellow)",
    darkBg: "rgba(251, 188, 4, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-yellow), var(--yellow))",
    lbgradient: "linear-gradient(135deg, var(--yellow), var(--yellow))"
  },
  {
    icon: FaRocket,
    title: "Career Growth",
    shortDesc: "Accelerate your future",
    description: "Accelerate your career with industry insights, networking opportunities, and professional development",
    images: ['/images/career-growth-1.jpg', '/images/career-growth-2.jpg', '/images/career-growth-3.jpg'],
    color: "var(--light-green)",
    iconColor: "var(--medium-green)",
    darkBg: "rgba(52, 168, 83, 0.1)",
    gradient: "linear-gradient(135deg, var(--light-green), var(--medium-green))",
    lbgradient: "linear-gradient(135deg, var(--green), var(--medium-green))"
  }
];

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 1.5rem;
  background: ${props => props.bgColor};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${props => props.isExpanded ? 'center' : 'flex-start'};
  flex-direction: ${props => props.isExpanded ? 'column' : 'row'};
  
  ${props => props.isExpanded ? `
    grid-column: 1;
    grid-row: 1 / span 3;
    height: auto;
  ` : `
    height: ${props.hasExpandedCard ? '180px' : '150px'};
  `}

  @media (max-width: 768px) {
    ${props => props.isExpanded ? `
      padding: 2rem;
      height: auto !important;
      flex-direction: column;
      align-items: flex-start;
      
      ${FeatureIcon} {
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }
      
      ${CardTitle} {
        margin-bottom: 1rem;
        font-size: 1.75rem;
      }
    ` : `
      height: 60px !important;
      padding: 0.75rem 1rem;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    `}
  }
  
  body.dark & {
    background: ${props => props.darkBg};
  }
`;

const FeatureIcon = styled.div`
  font-size: ${props => props.isExpanded ? '3rem' : '2.5rem'};
  color: ${props => props.color};
  margin-bottom: ${props => props.isExpanded ? '1.25rem' : '0'};
  margin-right: ${props => props.isExpanded ? '0' : '1rem'};
  transition: transform 0.2s ease;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    ${props => props.isExpanded ? `
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
    ` : `
      font-size: 1.5rem;
      margin: 0;
    `}
  }
`;

const CardTitle = styled.h3`
  font-size: ${props => props.isExpanded ? '2rem' : '1.5rem'};
  margin: 0.5rem 0;
  background: linear-gradient(135deg, var(--medium-blue), var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  font-weight: 600;
  
  body.dark & {
    background: ${props => props.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }

  body:not(.dark) & {
    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Features = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
    setCurrentImage(0);
  };

  return (
    <FeaturesSection>
      <Container>
        <Title>What We Offer</Title>
        <Subtitle>Discover a world of opportunities to learn, grow, and connect with the tech community</Subtitle>
        <FeatureGrid isExpanded={expandedCard !== null}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              bgColor={feature.color}
              darkBg={feature.darkBg}
              iconColor={feature.iconColor}
              gradient={feature.gradient}
              onClick={() => handleCardClick(index)}
              isExpanded={expandedCard === index}
              hasExpandedCard={expandedCard !== null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon color={feature.iconColor} isExpanded={expandedCard === index}>
                <feature.icon />
              </FeatureIcon>
              <div style={{ textAlign: 'left' }}>
                <CardTitle 
                  gradient={feature.gradient}
                  isExpanded={expandedCard === index}
                >
                  {feature.title}
                </CardTitle>
                {expandedCard !== index && (
                  <ShortDescription>
                    {feature.shortDesc}
                  </ShortDescription>
                )}
              </div>
              
              {expandedCard === null && (
                <ClickIndicator
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1, 0.95],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon style={{ transform: 'rotate(-15deg)' }} />
                  </motion.div>
                  Click to explore
                </ClickIndicator>
              )}
              
              {expandedCard === index && (
                <AnimatePresence>
                  <TruncatedText isExpanded>
                    {feature.description}
                  </TruncatedText>
                  <Carousel>
                    <FeatureImage 
                      src={`/images/${feature.title.toLowerCase().replace(/\s+/g, '-')}-${currentImage + 1}.jpg`}
                      initial={{ x: 300 }}
                      animate={{ x: 0 }}
                      exit={{ x: -300 }}
                    />
                    <div className="arrows">
                      <button onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage((prev) => (prev - 1 + 3) % 3);
                      }}>
                        <FaArrowLeft />
                      </button>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage((prev) => (prev + 1) % 3);
                      }}>
                        <FaArrowRight />
                      </button>
                    </div>
                  </Carousel>
                </AnimatePresence>
              )}
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 