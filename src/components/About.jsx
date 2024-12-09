import { motion } from "framer-motion";
import styled from "@emotion/styled";

const List = styled(motion.ul)`
  list-style-type: disc;
  padding-left: 4rem;
`;

const ListItem = styled(motion.li)`
  margin-bottom: 8px;
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
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

// RainbowButton styled component for animated button
const RainbowButton = styled.button`
  background: linear-gradient(90deg, #ff0066, #00ccff, #ccff00);
  border: none;
  padding: 12px 24px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  background-size: 300% 300%;
  animation: rainbowEffect 3s ease infinite;

  &:hover {
    background-position: 100% 100%;
  }

  @keyframes rainbowEffect {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

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
`;

const ContentContainer = styled.div`
  z-index: 10;
  max-width: 80%;
  color: #333;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const BlockContainer = styled.div`
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <ContentContainer>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-blue dark:text-light-blue mb-6"
        >
          This is GDG on Campus KARE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-800 dark:text-gray-200 mb-8"
        >
          A Note For Applicants
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 dark:text-gray-300 mb-6"
        >
          <strong>Google Developer Groups on Campus KARE</strong> is a
          student-run chapter dedicated to fostering a vibrant tech community at
          KARE.
        </motion.p>

        <Heading initial="hidden" animate="visible" variants={headingVariants}>
          What are Google Developer Groups?
        </Heading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Google Developer Groups exists all over the world, in two forms
          <BlockContainer>
            <strong>GDGs</strong>
            <List
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              {[
                "Regional communities like GDG Chennai, Bangalore, Mumbai etc.",
                "Organized by professional developers and tech enthusiasts.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  variants={listItemVariants}
                >
                  {item}
                </ListItem>
              ))}
            </List>
            <br></br>
            <strong>GDGs on Campus</strong>
            <List
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 1.0 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              {[
                "Exclusive to a college or university.",
                "Organized by students from the respective campus.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  variants={listItemVariants}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </BlockContainer>
          There are more than 500 Google Developer Groups on Campus chapters in
          India and even more globally. Google has a GDG on Campus Program team
          that coordinates all GDG on Campus chapters. We are part of GDG on
          Campus India, which oversees all events and initiatives for chapters
          across the country.
        </motion.div>

        <Heading initial="hidden" animate="visible" variants={headingVariants}>
          What does Google do?
        </Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Google initiates campaigns like Study Jams, Solution Challenge, online
          workshops, arcade games, and other surprise events. Google also
          officially recognizes our chapter and provides support in terms of
          speakers and networking opportunities. We have 53 Google Developer
          Experts (GDEs) across India, whom we can invite to conduct workshops.
          Google covers their travel and accommodation expenses!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Currently, we’re in talks with Ashish Kumar Verma, a GDE from Delhi,
          to conduct a workshop on Web Development using Advanced AI Concepts as
          part of the Google Tech Winter Break Campaign.
        </motion.p>

        <Heading initial="hidden" animate="visible" variants={headingVariants}>
          What does GDG-KARE do?
        </Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-xl text-gray-700 dark:text-gray-300 mb-6"
        >
          Our chapter is all about building an amazing tech community on campus.
          We offer a space where people can come together, share ideas, and
          connect. We aim to bring dreamers and innovators together to create
          something great. No great software is built alone!
        </motion.p>

        <Heading initial="hidden" animate="visible" variants={headingVariants}>
          What&apos;s special about us?
        </Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          We’re a student-run chapter, meaning the core team members make most
          of the decisions and handle everything that happens in the club. From
          arranging experts to running events, we manage it all ourselves.
          You’ll even get the chance to connect with these experts personally.
          Planning, refining, and executing every detail is entirely up to us.
          So, come lend a hand!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Moreover, you’ll find a group of amazing people who will immediately
          become your closest friends. Don&apos;t beleive me? Say “we are GDG”
          in your interview for bonus points :wink:, we assure you that the time
          you spend with us will be valuable. We have folks here who can always
          teach you something and are never shy to learn things from you By
          joining, you’ll become part of one of the most active, cooperative,
          and friendly groups on campus.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          It’s not about what we achieve by the end of our tenure—it’s about
          what we set in motion for the years to come. That’s why your
          application is so valuable to us.
        </motion.p>

        <Heading initial="hidden" animate="visible" variants={headingVariants}>
          What do we expect from you?
        </Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          If you’ve read this far, you already have a good idea of what we
          expect. We value collaboration and consistency. Share your ideas,
          contribute to discussions, and don’t hold back in meetings. We’re all
          friends here.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Don’t expect to get tasks assigned to you. We thrive on our members
          taking up and working on things that they believe will help the
          chapter. While the faculty or lead may ask you to handle tasks, that’s
          only because they can’t do everything alone. We’re not hierarchical,
          and the words of every member hold the same value. You’ll be amazed at
          how often you get to vote in a poll or contribute to the smallest
          decisions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Got a project idea? Let us know. Think we’re doing something wrong?
          Speak up! Have suggestions to improve the chapter? It’s a crime to not
          say them out loud
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          There’s no penalty for being inactive or not contributing. We don’t
          take anything from you, nor do we assume you owe us anything. It’s all
          about coming together to create something new we can share and be
          proud of. Take responsibility, stick to it, and you’ll be amazed at
          what you can achieve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          If you have questions about our chapter or are unsure if you’d be the
          right fit for us, feel free to contact me, the organizer, at&nbsp;
          <a
            href="mailto:gdsckare@klu.ac.in"
            className="text-teal-600 hover:underline dark:text-teal-200"
          >
            keerthikumar.m10@gmail.com
          </a>
          . I’d love to hear from you before we potentially meet in the
          interview.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          If you’ve read all the way here, a big salute to you! Thanks for
          applying. 💙
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <RainbowButton
            onClick={() => {
              window.open(
                "https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/",
                "_blank"
              );
            }}
          >
            Procced to Application
          </RainbowButton>
        </motion.div>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;
