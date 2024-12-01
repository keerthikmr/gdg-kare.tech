import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { RetroGrid } from './RetroGrid';

const EventsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--light-blue);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  
  body.dark & {
    background: var(--blue);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--blue);
  font-weight: 600;
  
  body.dark & {
    color: white;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StyledEventCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--border-color);
  transition: all 0.2s ease;
  
  body.dark & {
    background: var(--card-bg-dark);
    box-shadow: 0 4px 6px var(--border-color-dark);
    color: var(--text-primary-dark);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px var(--border-color);
    
    body.dark & {
      box-shadow: 0 8px 12px var(--border-color-dark);
    }
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }
`;

const GradientImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 1rem;
  background: ${props => props.gradient};
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventDate = styled.div`
  color: var(--medium-blue);
  font-weight: 500;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  body.dark & {
    color: var(--light-blue);
  }
`;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const EventDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
  
  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const events = [
  {
    title: "Study Jams Session - 2",
    date: "November 6, 2024",
    description: "Workshop / Study Group session focusing on hands-on learning and collaboration",
    image: "/images/study-jams.jpg"
  },
  {
    title: "Study Jams Session - 1",
    date: "November 5, 2024",
    description: "Workshop / Study Group kickoff session for interactive learning",
    image: "/images/study-jams.jpg"
  },
  {
    title: "Build with AI",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence",
    image: "/images/ai-workshop.jpg"
  },
  {
    title: "GenAI Workshop",
    date: "September 20, 2024",
    description: "Workshop on Generative AI and its applications",
    image: "/images/genai-workshop.jpg"
  }
];
//
const Events = () => {
  // Function to generate gradient based on event title
  const getGradient = (title) => {
    const gradients = {
      'Study': 'linear-gradient(135deg, var(--medium-blue), var(--light-blue))',
      'AI': 'linear-gradient(135deg, var(--medium-green), var(--light-green))',
      'Gen': 'linear-gradient(135deg, var(--medium-red), var(--light-red))',
      'default': 'linear-gradient(135deg, var(--yellow), var(--light-yellow))'
    };

    const key = Object.keys(gradients).find(k => title.includes(k)) || 'default';
    return gradients[key];
  };

  // Function to handle image load error
  const handleImageError = (e, title) => {
    const parent = e.target.parentElement;
    const gradient = document.createElement('div');
    gradient.className = 'gradient-fallback';
    gradient.style.background = getGradient(title);
    gradient.style.width = '100%';
    gradient.style.height = '100%';
    gradient.style.display = 'flex';
    gradient.style.alignItems = 'center';
    gradient.style.justifyContent = 'center';
    gradient.innerHTML = `<span style="color: white; font-size: 1.5rem; font-weight: 500; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${title}</span>`;
    parent.replaceChild(gradient, e.target);
  };

  return (
    <EventsSection>
      <RetroGrid className="opacity-30 dark:opacity-20" />
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Upcoming Events
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Join us for exciting workshops, study sessions, and tech talks. Stay updated with our latest events.
        </Subtitle>
        <EventGrid>
          {events.map((event, index) => (
            <StyledEventCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              whileTap={{ y: -2 }}
            >
              <EventImage>
                {event.image ? (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => handleImageError(e, event.title)}
                  />
                ) : (
                  <GradientImage gradient={getGradient(event.title)}>
                    {event.title}
                  </GradientImage>
                )}
              </EventImage>
              <EventContent>
                <EventDate>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.5 1V2.5H11.5V1H13V2.5H14C14.8284 2.5 15.5 3.17157 15.5 4V14C15.5 14.8284 14.8284 15.5 14 15.5H2C1.17157 15.5 0.5 14.8284 0.5 14V4C0.5 3.17157 1.17157 2.5 2 2.5H3V1H4.5ZM14 4H2V14H14V4Z"/>
                  </svg>
                  {event.date}
                </EventDate>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </EventContent>
            </StyledEventCard>
          ))}
        </EventGrid>
      </Container>
    </EventsSection>
  );
};

export default Events; 