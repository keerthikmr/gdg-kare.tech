import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { RainbowButton } from "./RainbowButton";
import illustration from "../assets/computer.svg";
import { useTheme } from "../context/ThemeContext";
import { DotPattern } from "./DotPattern";
import team from "../assets/team.svg";
import expect from "../assets/expect.svg";
import special from "../assets/special.svg";
import presentation from "../assets/presentation.svg";
import teamidea from "../assets/team-idea.svg";
const List = styled(motion.ul)`
  list-style-type: disc;
  padding-left: 2rem;
  margin: 1.5rem 0;
  color: var(--text-secondary);

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const ListItem = styled(motion.li)`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const listItemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const headingVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Heading = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;

  body.dark & {
    background: linear-gradient(135deg, var(--light-blue), var(--medium-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// RainbowButton styled component for animated button
// const RainbowButton = styled.button`
//   background: linear-gradient(90deg, #ff0066, #00ccff, #ccff00);
//   border: none;
//   padding: 12px 24px;
//   color: white;
//   font-weight: bold;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   background-size: 300% 300%;
//   animation: rainbowEffect 3s ease infinite;

//   &:hover {
//     background-position: 100% 100%;
//   }

//   @keyframes rainbowEffect {
//     0% {
//       background-position: 0% 0%;
//     }
//     50% {
//       background-position: 100% 100%;
//     }
//     100% {
//       background-position: 0% 0%;
//     }
//   }
// `;

const AboutSection = styled.section`
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

  scroll-behavior: smooth;
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

const SplitSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;

  &:nth-of-type(even) {
    direction: rtl;
    > * {
      direction: ltr;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem 0;
    &:nth-of-type(even) {
      direction: ltr;
    }
  }
`;

const ContentSide = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const IllustrationWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    filter: ${props => props.isDark ? 'invert(1)' : 'none'};
    transition: filter 0.3s ease;
  }
`;

const BlockContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledParagraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);

  body.dark & {
    color: var(--text-secondary-dark);
  }

  strong {
    color: var(--text-primary);
    body.dark & {
      color: var(--text-primary-dark);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const GlassmorphicCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 600px;
  margin: 2rem auto;
  position: relative;
  z-index: 5;
`;

const TopicCard = styled(GlassmorphicCard)`
  margin: 0;
  position: sticky;
  top: 20vh;
  height: fit-content;
  transition: opacity 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    top: 10vh;
  }
`;

const About = () => {
  const { isDark } = useTheme();

  return (
    <AboutSection>
      <DotPattern className="opacity-30 dark:opacity-20" />
      
      <ContentContainer>
        {/* Introduction */}
        <SplitSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <IllustrationWrapper isDark={isDark}>
            <img src={illustration} alt="Welcome Illustration" />
          </IllustrationWrapper>
          <ContentSide>
            <motion.h1 className="text-6xl font-bold text-blue dark:text-light-blue mb-6">
              This is GDG on Campus KARE
            </motion.h1>
            <StyledParagraph>
              <strong>A Note For Applicants</strong>
            </StyledParagraph>
            <StyledParagraph>
              <strong>Google Developer Groups on Campus KARE</strong> is a
              student-run chapter dedicated to fostering a vibrant tech community at
              KARE.
            </StyledParagraph>
          </ContentSide>
        </SplitSection>

        {/* What are GDGs */}
        <SplitSection>
          <ContentSide>
            <Heading variants={headingVariants}>
              What are Google Developer Groups?
            </Heading>
            <StyledParagraph>
              Google Developer Groups exists all over the world, in two forms:
            </StyledParagraph>
            <BlockContainer>
              <strong>GDGs</strong>
              <List variants={{
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}>
                {[
                  "Regional communities like GDG Chennai, Bangalore, Mumbai etc.",
                  "Organized by professional developers and tech enthusiasts.",
                ].map((item, index) => (
                  <ListItem key={index} variants={listItemVariants}>
                    {item}
                  </ListItem>
                ))}
              </List>
              <strong>GDGs on Campus</strong>
              <List variants={{
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}>
                {[
                  "Exclusive to a college or university.",
                  "Organized by students from the respective campus.",
                ].map((item, index) => (
                  <ListItem key={index} variants={listItemVariants}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </BlockContainer>
            <StyledParagraph>
              There are more than 500 Google Developer Groups on Campus chapters in
              India and even more globally. Google has a GDG on Campus Program team
              that coordinates all GDG on Campus chapters. We are part of GDG on
              Campus India, which oversees all events and initiatives for chapters
              across the country.
            </StyledParagraph>
          </ContentSide>
          <IllustrationWrapper isDark={isDark}>
            <img src={presentation} alt="GDG Groups Illustration" />
          </IllustrationWrapper>
        </SplitSection>

        {/* Google's Role - Updated Content */}
        <SplitSection>
          <IllustrationWrapper isDark={isDark}>
            <img src={teamidea} alt="Google's Role Illustration" />
          </IllustrationWrapper>
          <ContentSide>
            <Heading variants={headingVariants}>
              What does Google do?
            </Heading>
            <StyledParagraph>
              Google initiates campaigns like Study Jams, Solution Challenge, online
              workshops, arcade games, and other surprise events. Google also
              officially recognizes our chapter and provides support in terms of
              speakers and networking opportunities. We have 53 Google Developer
              Experts (GDEs) across India, whom we can invite to conduct workshops.
              Google covers their travel and accommodation expenses!
            </StyledParagraph>
            <StyledParagraph>
              Currently, we're in talks with Ashish Kumar Verma, a GDE from Delhi,
              to conduct a workshop on Web Development using Advanced AI Concepts as
              part of the Google Tech Winter Break Campaign.
            </StyledParagraph>
          </ContentSide>
        </SplitSection>

        {/* What's Special About Us - New Section */}
        <SplitSection>
          <ContentSide>
            <Heading variants={headingVariants}>
              What's special about us?
            </Heading>
            <StyledParagraph>
            Our chapter is all about building an amazing tech community on campus.
            We offer a space where people can come together, share ideas, and
            connect. We aim to bring dreamers and innovators together to create
            something great. No great software is built alone!

            </StyledParagraph>
            <StyledParagraph>
            We have folks here who can always
            teach you something and are never shy to learn things from you By
            joining, you&apos;ll become part of one of the most active, cooperative,
            and friendly groups on campus.

            </StyledParagraph>
            <StyledParagraph>
            It&apos;s not about what we achieve by the end of our tenure—it&apos;s about
            what we set in motion for the years to come. That&apos;s why your
            application is so valuable to us.
            </StyledParagraph>
            
          </ContentSide>
          <IllustrationWrapper isDark={isDark}>
            <img src={special} alt="Special Features Illustration" />
          </IllustrationWrapper>
        </SplitSection>

        {/* What We Expect - New Section */}
        <SplitSection>
          <IllustrationWrapper isDark={isDark}>
            <img src={expect} alt="Expectations Illustration" />
          </IllustrationWrapper>
          <ContentSide>
            <Heading variants={headingVariants}>
              What do we expect from you?
            </Heading>
            <StyledParagraph>
            Don&apos;t expect to get tasks assigned to you. We thrive on our members
            taking up and working on things that they believe will help the
            chapter. 

            </StyledParagraph>
            <StyledParagraph>
            The words of every member hold the same value. You&apos;ll be amazed at
            how often you get to vote in a poll or contribute to the smallest
            decisions.

            </StyledParagraph>
            <StyledParagraph>
              Got a project idea? Let us know. Think we're doing something wrong?
              Speak up! Have suggestions to improve the chapter? It's a crime to not
              say them out loud.
            </StyledParagraph>
            <StyledParagraph>
            There&apos;s no penalty for being inactive or not contributing. We don&apos;t
            take anything from you, nor do we assume you owe us anything. It&apos;s all
            about coming together to create something new we can share and be
            proud of. Take responsibility, stick to it, and you&apos;ll be amazed at
            what you can achieve.
            </StyledParagraph>
          </ContentSide>
        </SplitSection>

        {/* Contact and Application - Updated */}
        <SplitSection>
          <ContentSide>
            <Heading variants={headingVariants}>
              Join Our Community
            </Heading>
            <StyledParagraph>
              If you have questions about our chapter or are unsure if you'd be the
              right fit for us, feel free to reach out to us, at{" "}
              <a
            href="mailto:gdsckare@klu.ac.in"
              className="text-teal-600 hover:underline dark:text-teal-200"
            >
              gdsckare@klu.ac.in
            </a>
            {" "}we'd love to hear from you before we potentially meet in
              the interview.
            </StyledParagraph>
            <StyledParagraph>
              If you've read all the way here, a big salute to you! Thanks for
              applying. 💙
            </StyledParagraph>
            <RainbowButton
              onClick={() => {
                window.open(
                  "https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/",
                  "_blank"
                );
              }}
            >
              Proceed to Application
            </RainbowButton>
          </ContentSide>
          <IllustrationWrapper isDark={isDark}>
            <img src={team} alt="Join Us Illustration" />
          </IllustrationWrapper>
        </SplitSection>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;
