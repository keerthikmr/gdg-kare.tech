import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { RainbowButton } from "../../RainbowButton";
import DeepanImage from "@/assets/events/nlp-workshop/DeepanImage.png";
import JaiImage from "@/assets/events/nlp-workshop/JaiImage.png";
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  background-color: #25d366; /* WhatsApp green */
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
    background-color: #128c7e; /* Darker WhatsApp green */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #075e54; /* Even darker green */
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

const NlpWorkshopDesc = () => {
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
          Workshop on Natural Language Processing
        </EventTitle>

        <EventCaption
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore the world of AI and language understanding
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
            <p>Aug 15, 16, 17 - 2025</p>
          </DetailCard>
          <DetailCard>
            <h3>
              <Clock className="w-6 h-6 text-green-500" />
              Time
            </h3>
            <p>9:00 AM - 5:00 PM</p>
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
            Join us for a three-day, hands-on journey into the world of
            Generative AI. On Day 1, you{"'"}ll get started with the
            basics—exploring GANs, understanding transformer models, and
            experimenting with LLMs using HuggingFace. This day is perfect for
            building a solid foundation in modern AI.
          </p>
          <p className="mt-4">
            Day 2 and Day 3 focus on frameworks and agentic systems. You{"'"}ll
            dive into tools like LangChain, fine-tune models with LoRA and
            QLoRA, and explore Retrieval Augmented Generation (RAG). The final
            day introduces Agentic AI—where you{"'"}ll build smart agents using
            LangFlow, LangGraph, Agno, and CrewAI to solve real-world problems.
            Ask ChatGPT
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
              <SpeakerImage src={DeepanImage} alt="Deepan Raj" />
              <SpeakerInfo>
                <h3>Mr. Deepan Raj</h3>
                <p>Technical Lead Data Scientist</p>
                <LinkedInButton
                  href="https://in.linkedin.com/in/deepanrajm"
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
              <SpeakerImage src={JaiImage} alt="Jai Ganesh" />
              <SpeakerInfo>
                <h3>Mr. Jai Ganesh</h3>
                <p>Lead AI Architect</p>
                <LinkedInButton
                  href="https://linkedin.com/in/jaiiii"
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
          <li>Ability to follow and replicate technical instructions</li>
          <li>Basic understanding of concepts in the agenda below</li>
          <li>HuggingFace and GitHub accounts</li>
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
            <h4 className="text-lg font-semibold pb-2">Day 1</h4>
            <li>GAN Architecture with Image Generation</li>
            <li>
              Learn about Transformers Architecture & Large Language Models
            </li>
            <li>
              Hands-on: Work with Various LLMs using HuggingFace Inference Calls
            </li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 2</h4>
            <li>Steps to know LangChain frameworks and adoption tools</li>
            <li>
              RAG - Retreived Augmented Generation - Make your LLM train on
              private documents.
            </li>
            <li>
              Fine-tune the LLMs (Falcon 1B, Llama2, etc.) with the external
              dataset using Lora & QLora adaptation techniques.
            </li>
          </div>

          <div>
            <h4 className="text-lg font-semibold pb-2">Day 3</h4>
            <li>
              Build your Agentic AI Orchestration using LangFlow - No code Model
            </li>
            <li>
              Learn about the LangGraph framework and build an agentic RAG
              supervised chatbot model.
            </li>
            <li>Build the Financial Agents tool using the Agno framework</li>
            <li>Create your self-enhanced agentic RAG model using CrewAI</li>
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
          <li>Access to our exclusive NLP learning community</li>
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
                window.open("https://gdg.community.dev/e/mnr9x5/", "_blank")
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
                  "https://chat.whatsapp.com/GXKDcBPuCpxJGs8KX45VY0",
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
            navigate("/nlp-workshop/register");
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

export default NlpWorkshopDesc;
