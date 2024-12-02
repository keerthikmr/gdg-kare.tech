import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from '@emotion/styled';
import { useState } from 'react';

const TeamSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const Container = styled.div`
  max-width: 1400px;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProfileImage = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const [randomSeed] = useState(Math.random()); // Random seed for this session
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const gradients = [
    'linear-gradient(135deg, #4285F4, #34A853)',
    'linear-gradient(135deg, #EA4335, #FBBC04)',
    'linear-gradient(135deg, #34A853, #4285F4)',
    'linear-gradient(135deg, #FBBC04, #EA4335)',
    'linear-gradient(135deg, #4285F4, #EA4335)',
    'linear-gradient(135deg, #34A853, #FBBC04)',
    'linear-gradient(135deg, #EA4335, #34A853)',
    'linear-gradient(135deg, #FBBC04, #4285F4)',
    'linear-gradient(135deg, #4285F4, #83B9FF)',
    'linear-gradient(135deg, #EA4335, #FF8A80)',
    'linear-gradient(135deg, #34A853, #81C995)',
    'linear-gradient(135deg, #FBBC04, #FFE082)',
    'radial-gradient(circle at top left, #4285F4, #34A853)',
    'radial-gradient(circle at top right, #EA4335, #FBBC04)',
    'radial-gradient(circle at bottom left, #34A853, #4285F4)',
    'radial-gradient(circle at bottom right, #FBBC04, #EA4335)',
  ];

  const getGradient = (name) => {
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[index % gradients.length];
  };

  if (imageError) {
    return (
      <div
        className="w-full h-full rounded-full flex items-center justify-center text-2xl font-semibold text-white
                   shadow-lg transition-transform duration-300 ease-in-out
                   group-hover:scale-105 relative overflow-hidden"
        style={{
          background: getGradient(member.name),
        }}
      >
        <div className="relative z-10">
          {getInitials(member.name)}
        </div>
        <div className="absolute inset-0 bg-black opacity-10 
                       dark:opacity-20" 
        />
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      onError={() => setImageError(true)}
      className="w-full h-full rounded-full object-cover 
                ring-2 ring-gray-200/50 dark:ring-gray-700/50
                group-hover:ring-blue-500/50 dark:group-hover:ring-blue-400/50
                transition-all duration-300"
    />
  );
};

const MemberCard = ({ member }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [colorIndex, setColorIndex] = useState(0);

  // Google colors with reduced opacity
  const googleColors = [
    "rgba(66, 133, 244, 0.08)",  // Blue
    "rgba(234, 67, 53, 0.08)",   // Red
    "rgba(251, 188, 4, 0.08)",   // Yellow
    "rgba(52, 168, 83, 0.08)"    // Green
  ];

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function onMouseEnter() {
    setColorIndex((prev) => (prev + 1) % googleColors.length);
  }

  return (
    <motion.div
      className="relative w-full rounded-xl bg-white dark:bg-gray-800/50 
                 overflow-hidden group transition-all duration-300
                 hover:shadow-[0_8px_16px_-1px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.05)]
                 dark:hover:shadow-[0_8px_16px_-1px_rgba(0,0,0,0.3),0_4px_8px_-2px_rgba(0,0,0,0.2)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
    >
      <div className="p-6">
        <div className="relative z-10">
          <motion.div 
            className="w-32 h-32 mx-auto mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <ProfileImage member={member} />
            <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-b from-transparent via-transparent to-black/10 
                          dark:to-black/20" 
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl font-semibold text-center mb-2 
                     bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300
                     bg-clip-text text-transparent"
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className="text-blue-600 dark:text-blue-400 text-center mb-3 
                     font-medium text-sm tracking-wide"
          >
            {member.role}
          </motion.p>
          
          {member.location && (
            <p className="text-gray-500 dark:text-gray-400 text-xs text-center mb-4 
                       font-medium tracking-wide uppercase">
              {member.location}
            </p>
          )}
          
          <div className="flex justify-center gap-4 mt-4">
            {member.socials.linkedin && (
              <motion.a
                href={member.socials.linkedin}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-600 hover:text-[#0077b5] dark:text-gray-400 
                         dark:hover:text-[#0077b5] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </motion.a>
            )}
            {member.socials.github && (
              <motion.a
                href={member.socials.github}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 
                         dark:hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </motion.a>
            )}
          </div>
        </div>
        
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${googleColors[colorIndex]},
                transparent 60%
              )
            `,
          }}
        />
      </div>
    </motion.div>
  );
};

const team = [
  {
    name: "Keerthi Kumar M",
    role: "Organizer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/keerthi_kumar_m_ZPXzogM.png",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Thanuja Thulasi",
    role: "Co-organizer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/thanuja_thulasi.jpeg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Nikhil Enjirapu",
    role: "UI/UX Lead",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/nikhil_enjirapu_HDs9lw2.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "G. Lakshmi Narasimha Yadav",
    role: "Graphic Designer",
    // location: "INDIA",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/g._lakshmi_narasimha_yadav_NWoGNc1.png",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Arunkumar S",
    role: "Web Developer",
    image: "/images/team/arun.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Suresh Kumar G",
    role: "Web Developer",
    image: "/images/team/suresh.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Manoj Hariharan R",
    role: "Android Development Lead",
    image: "/images/team/manoj.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "DHATSHINAMOORTHY R",
    role: "Android Developer",
    // location: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
    image: "/images/team/dhatshinamoorthy.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "SRAVANTHI U",
    role: "Content Writer",
    image: "/images/team/sravanthi.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "NAVEEN S",
    role: "Machine Learning Lead",
    image: "/images/team/naveen.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Hitesh Kumar Kothapalli",
    role: "DevOps Lead",
    image: "/images/team/hitesh.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Barnes Samuel",
    role: "Media Team",
    image: "/images/team/barnes.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Bharathi Ankamreddy",
    role: "Social Media Lead",
    image: "/images/team/bharathi.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Divya Sri Digamarthi",
    role: "Cloud Computing Lead",
    image: "/images/team/divya.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Krishna Vineeth Gubba",
    role: "Coordinator",
    image: "/images/team/krishna.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Poojith reddy Menthem",
    role: "Coordinator",
    image: "/images/team/poojith.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "BALAJI N",
    role: "Coordinator",
    image: "/images/team/balaji.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    }
  }
];

const Team = () => {
  return (
    <TeamSection>
      {/* <RetroGrid className="opacity-30 dark:opacity-20" angle={75} /> */}
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The talented individuals who make GDG KARE possible
        </Subtitle>
        <TeamGrid>
          {team.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team; 