import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { RainbowButton } from "../../RainbowButton";
import KeerthiImage from "@/assets/events/git-workshop/keerthi_profile.png";
import BharathImage from "@/assets/events/git-workshop/bharath_profile.png";
import { useNavigate } from "react-router-dom";

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
  padding: 8rem 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    max-width: 95%;
    gap: 3rem;
  }

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const EventHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const EventTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EventCaption = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  body.dark & {
    color: var(--text-secondary-dark);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InfoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Description = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary-dark);
  }
`;

const SpeakerSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SpeakerImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SpeakerInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
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

const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #0077b5;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #005885;
    transform: translateY(-2px);
  }
`;

const PrerequisitesList = styled(motion.ul)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: "•";
      color: var(--blue);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    li {
      color: var(--text-secondary-dark);
    }
  }
`;

const AgendaList = styled(motion.ol)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  counter-reset: list-counter;

  li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
    list-style: none;
    counter-increment: list-counter;

    &:before {
      content: counter(list-counter) ".";
      color: var(--blue);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    li {
      color: var(--text-secondary-dark);
    }
  }
`;

const MaterialsSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    h3 {
      color: var(--text-primary-dark);
    }
  }
`;

const WidgetsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
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

const GitWorkshopDesc = () => {
  const navigate = useNavigate();

  return (
    <EventSection>
      <DotPattern className="opacity-30 dark:opacity-20" />

      <ContentContainer>
        <EventHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <EventTitle>Introduction to Git and GitHub</EventTitle>
          <EventCaption>
            Learn version control - A must have skill for developers
          </EventCaption>
        </EventHeader>

        <InfoGrid>
          <InfoCard>
            <Calendar className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Date</h3>
            <p>29, 30, 31st July - 2025</p>
          </InfoCard>
          <InfoCard>
            <Clock className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Time</h3>
            <p>5:00 PM - 6:00 PM</p>
          </InfoCard>
          <InfoCard>
            <MapPin className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Venue</h3>
            <p>8301 Lab</p>
          </InfoCard>
        </InfoGrid>

        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            Learn the fundamentals of version control with Git, master essential
            Git commands, explore branching and merging, handle conflicts, and
            understand standard Git workflows. Gain hands-on experience with
            GitHub, including deploying projects through GitHub Pages and
            collaborating effectively on repositories.
          </p>
          <p className="mt-4">
            Version control is something that every job asks for. It is an
            indispensible and unavoidable skill that every developer must know.
            Let us learn it together.
          </p>
        </Description>

        <SpeakerSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SpeakerImage>
            <img src={KeerthiImage} alt="Keerthi Kumar" />
          </SpeakerImage>
          <SpeakerInfo>
            <h3>Keerthi Kumar</h3>
            <p>Organizer, GDG - KARE</p>
            <LinkedInButton
              href="https://in.linkedin.com/in/keerthikumar10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </LinkedInButton>
          </SpeakerInfo>
        </SpeakerSection>

        <SpeakerSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SpeakerImage>
            <img src={BharathImage} alt="Bharath Kumar" />
          </SpeakerImage>
          <SpeakerInfo>
            <h3>Bharath Kumar</h3>
            <p>Open Source Contributor, GDG - KARE</p>
            <LinkedInButton
              href="https://in.linkedin.com/in/bharath-inukurthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </LinkedInButton>
          </SpeakerInfo>
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
          <li>GitHub Account</li>
          <li>
            That{"'"}s pretty much it :{")"} We{"'"}re here to walk you through
            the entire way!
          </li>
        </PrerequisitesList>

        <AgendaList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <List className="w-6 h-6 text-blue-500" />
            Agenda
          </h3>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 1</h4>
            <li>Introduction to version control systems</li>
            <li>Git and GitHub setup</li>
            <li>Basic git operations (commit and push)</li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 2</h4>
            <li>Basic Git commands</li>
            <li>Deploying to GitHub Pages</li>
            <li>Git Branches</li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 3</h4>
            <li>Collaborating with Git</li>
            <li>Merging and handling conflicts</li>
            <li>Standard Git workflows</li>
          </div>
        </AgendaList>

        <MaterialsSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold">
            <BookOpen className="w-6 h-6 text-blue-500" />
            Learning Materials
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Materials will be provided in the WhatsApp Group. Stay tuned!
          </p>
        </MaterialsSection>

        <WidgetsContainer>
          <RSVPWidget
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              RSVP in our event page
              {" (also register below)"}
            </p>
            <PulseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://gdg.community.dev/e/mj4m48/", "_blank")
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
                  "https://chat.whatsapp.com/LSTyx32XRYC7zWb0TD8eDZ",
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
            navigate("/git-workshop/register");
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

export default GitWorkshopDesc;
