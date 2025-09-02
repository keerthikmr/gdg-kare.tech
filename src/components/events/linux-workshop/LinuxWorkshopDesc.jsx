import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { RainbowButton } from "../../RainbowButton";
import { useNavigate } from "react-router-dom";
import NikhilImage from "@/assets/events/linux-workshop/NikhilImage.png";
import KarthikImage from "@/assets/events/linux-workshop/KarthikImage.png";

import {
  Calendar,
  Clock,
  MapPin,
  Linkedin,
  BookOpen,
  List,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const EventSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  position: relative;
  overflow: hidden;

  body.dark & {
    background: linear-gradient(
      135deg,
      var(--bg-primary-dark) 0%,
      var(--bg-secondary-dark) 100%
    );
  }
`;

const ContentContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const EventTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--medium-blue), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  body.dark & {
    background: linear-gradient(135deg, var(--light-blue), var(--medium-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const EventCaption = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const EventDetails = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DetailCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h3 {
      color: var(--text-primary-dark);
    }

    p {
      color: var(--text-secondary-dark);
    }
  }
`;

const EventDescription = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h2 {
      color: var(--text-primary-dark);
    }

    p {
      color: var(--text-secondary-dark);
    }
  }
`;

const SpeakerSection = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--text-primary);
    text-align: center;
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h2 {
      color: var(--text-primary-dark);
    }
  }
`;

const SpeakerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SpeakerCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  body.dark & {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SpeakerImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid var(--medium-blue);
`;

const SpeakerInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  body.dark & {
    h3 {
      color: var(--text-primary-dark);
    }

    p {
      color: var(--text-secondary-dark);
    }
  }
`;

const LinkedInButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #0077b5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #005885;
    transform: translateY(-1px);
  }
`;

const WidgetsContainer = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // gap: 2rem;
  margin-top: 2rem;

  // @media (max-width: 768px) {
  //   grid-template-columns: 1fr;
  //   gap: 1rem;
  // }
`;

const WhatsAppWidget = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    p {
      color: var(--text-primary-dark);
    }
  }
`;

const WhatsAppButton = styled(motion.button)`
  background-color: #25d366;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #128c7e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #075e54;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }

  /* Dark mode styles */
  body.dark & {
    background-color: #25d366;
    color: white;

    &:hover {
      background-color: #128c7e;
      box-shadow: 0 4px 8px rgba(37, 211, 102, 0.3);
    }

    &:active {
      background-color: #075e54;
    }
  }
`;

const RSVPWidget = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;

  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    p {
      color: var(--text-primary-dark);
    }
  }
`;

// const WhatsAppWidget = styled(motion.div)`
//   background: linear-gradient(
//     135deg,
//     rgba(255, 255, 255, 0.1),
//     rgba(255, 255, 255, 0.05)
//   );
//   backdrop-filter: blur(10px);
//   border-radius: 12px;
//   padding: 1.5rem;
//   text-align: center;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

//   p {
//     font-size: 1.1rem;
//     margin-bottom: 1rem;
//     color: var(--text-primary);
//   }

//   body.dark & {
//     background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
//     border-color: rgba(255, 255, 255, 0.1);

//     p {
//       color: var(--text-primary-dark);
//     }
//   }
// `;

const PulseButton = styled(motion.button)`
  background-color: #1a73e8; /* Google's primary blue */
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #174ea6; /* Slightly darker blue */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #0c47a1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }

  /* Dark mode styles */
  body.dark & {
    background-color: #8ab4f8; /* Lighter blue for dark mode */
    color: #202124;

    &:hover {
      background-color: #669df6;
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
    }

    &:active {
      background-color: #4285f4;
    }
  }
`;

// const WhatsAppButton = styled(motion.button)`
//   background-color: #25d366; /* WhatsApp green */
//   color: white;
//   border: none;
//   padding: 0.75rem 2rem;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 1.1rem;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;

//   &:hover {
//     background-color: #128c7e; /* Darker WhatsApp green */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//     transform: translateY(-1px);
//   }

//   &:active {
//     background-color: #075e54; /* Even darker green */
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//     transform: translateY(0);
//   }

//   /* Dark mode styles */
//   body.dark & {
//     background-color: #25d366;
//     color: white;

//     &:hover {
//       background-color: #128c7e;
//       box-shadow: 0 4px 8px rgba(37, 211, 102, 0.3);
//     }

//     &:active {
//       background-color: #075e54;
//     }
//   }
// `;

const PrerequisitesList = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  li {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    padding-left: 1rem;
    position: relative;
    list-style: none;

    &:before {
      content: "•";
      color: var(--medium-blue);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h3 {
      color: var(--text-primary-dark);
    }

    li {
      color: var(--text-secondary-dark);
    }
  }
`;

const AgendaList = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  div {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--medium-blue);
      margin-bottom: 1rem;
    }

    li {
      font-size: 1rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;
      list-style: none;

      &:before {
        content: "•";
        color: var(--medium-blue);
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h3 {
      color: var(--text-primary-dark);
    }

    div {
      h4 {
        color: var(--light-blue);
      }

      li {
        color: var(--text-secondary-dark);
      }
    }
  }
`;

const LinuxWorkshopDesc = () => {
  const navigate = useNavigate();

  return (
    <EventSection>
      <DotPattern className="opacity-30 dark:opacity-20" />
      <ContentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <EventTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Workshop on Linux
        </EventTitle>

        <EventCaption
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Command your World
        </EventCaption>

        <EventDetails
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DetailCard>
            <h3>
              <Calendar className="w-6 h-6 text-blue-500" />
              Dates
            </h3>
            <p>Aug 8, 9, 10, 11 - 2025</p>
          </DetailCard>
          <DetailCard>
            <h3>
              <Clock className="w-6 h-6 text-green-500" />
              Time
            </h3>
            <p>5:00 PM - 6:30 PM</p>
          </DetailCard>
          <DetailCard>
            <h3>
              <MapPin className="w-6 h-6 text-red-500" />
              Venue
            </h3>
            <p>8301A & 8301B</p>
          </DetailCard>
        </EventDetails>

        <EventDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>
            <BookOpen className="w-8 h-8 text-blue-500" />
            About the Workshop
          </h2>
          <p>
            Join us for a four-day beginner-friendly Linux workshop designed to
            take you from first steps to practical skills. Day 1 kicks off with
            the basics—what Linux is, why it powers everything from servers to
            smartphones, and how to try it out safely with VirtualBox or WSL. On
            Day 2, we move into hands-on learning, covering essential commands
            for navigation, file management, processes, and system info,
            wrapping up with a fun mini activity to test your new skills.
          </p>
          <p className="mt-4">
            Day 3 introduces networking commands, Git & GitHub for version
            control, and a first look at Vim—the editor every developer
            encounters at some point. Finally, Day 4 brings it all together with
            shell scripting: writing your first script, automating simple tasks,
            cloning scripts from GitHub, and exploring real-world Linux
            applications in cloud, development, cybersecurity, and AI. By the
            end, you will have not just theory but also the confidence to write,
            run, and share your own scripts.
          </p>
        </EventDescription>

        <SpeakerSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Meet Your Instructors</h2>
          <SpeakerGrid>
            <SpeakerCard>
              <SpeakerImage src={NikhilImage} alt="Deepan Raj" />
              <SpeakerInfo>
                <h3>Nikhil</h3>
                <p>III year CSE</p>
                <LinkedInButton
                  href="https://www.linkedin.com/in/nikhil-h-834592315/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </LinkedInButton>
              </SpeakerInfo>
            </SpeakerCard>
            <SpeakerCard>
              <SpeakerImage src={KarthikImage} alt="Jai Ganesh" />
              <SpeakerInfo>
                <h3>Karthik</h3>
                <p>III year CSE</p>
                <LinkedInButton
                  href="https://www.linkedin.com/in/karthik-raju-arajyula-55285b28a/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </LinkedInButton>
              </SpeakerInfo>
            </SpeakerCard>
          </SpeakerGrid>
        </SpeakerSection>

        <PrerequisitesList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <List className="w-6 h-6 text-blue-500" />
            Prerequisites
          </h3>
          <li>An interest to learn Linux</li>
          <li>Commitment for all 4 days - stick with us!</li>
          <li>Laptop</li>
        </PrerequisitesList>

        <AgendaList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <List className="w-6 h-6 text-blue-500" />
            Agenda
          </h3>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 1 - Introduction</h4>
            <li>What is Linux?</li>
            <li>Why Linux?</li>
            <li>Linux distributions</li>
            <li>Installing linux on VM</li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">
              Day 2 - Basic commands
            </h4>
            <li>Linux navigation</li>
            <li>File managements</li>
            <li>Processes</li>
            <li>System info</li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">
              Day 3 - Networking and Tools
            </h4>
            <li>Networking</li>
            <li>Git and GitHub</li>
            <li>Vim Basics</li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">
              Day 4 - Shell Scripting
            </h4>
            <li>Writing a script</li>
            <li>Variables and commands in scripts</li>
            <li>Linux applications</li>
          </div>
        </AgendaList>

        <PrerequisitesList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            What You{"'"}ll Get
          </h3>
          <li>
            All workshop materials, code samples, datasets, and resources will
            be provided
          </li>
          <li>Certificates of participation</li>
          <li>Be part of our Linux learning community</li>
          <li>Continued support and networking opportunities</li>
        </PrerequisitesList>

        <WidgetsContainer>
          <RSVPWidget
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              RSVP in our event page
              {'(also register by clicking "Register Now" below)'}
            </p>
            <PulseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://gdg.community.dev/e//", "_blank")
              }
            >
              RSVP
            </PulseButton>
          </RSVPWidget>

          <WhatsAppWidget
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>Join our WhatsApp group for updates and discussions</p>
            <WhatsAppButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/DFwWUQMi8NvCQF43lNjjZS",
                  "_blank"
                )
              }
            >
              <FaWhatsapp size={20} />
              Join WhatsApp
            </WhatsAppButton>
          </WhatsAppWidget>
        </WidgetsContainer>

        <RainbowButton
          onClick={() => {
            navigate("/linux-workshop/register");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ width: "100%", marginTop: "2rem" }}
        >
          Register Now
        </RainbowButton>
      </ContentContainer>
    </EventSection>
  );
};

export default LinuxWorkshopDesc;
