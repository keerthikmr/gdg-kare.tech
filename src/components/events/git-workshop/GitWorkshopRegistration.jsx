import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { useState } from "react";
import { RainbowButton } from "../../RainbowButton";
import { GlowButton } from "../../GradientGlow";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const RegistrationSection = styled.section`
  padding: 4rem 2rem;
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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    max-width: 95%;
    gap: 3rem;
  }

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 100%;
  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary-dark);

    &:focus {
      border-color: var(--medium-blue);
    }
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary-dark);

    &:focus {
      border-color: var(--medium-blue);
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: var(--medium-blue);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    padding-bottom: 1rem;
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: var(--medium-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
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
  margin-top: 2rem;

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
  width: 100%;

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

const GitWorkshopRegistration = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const closeRegistration = false;

  if (closeRegistration) {
    return (
      <SuccessMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3>🚪 Registrations Closed!</h3>
        <p>
          Thank you for your interest but unfortunately, registrations for the
          workshop are closed! Please try approaching the venue (8505) directly.
          We can&apos;t assure you a spot but we&apos;ll try our best to
          accommodate you.
        </p>
        <p>You can still register for Solution Challenge here.</p>
        <RainbowButton
          onClick={() => {
            window.open(
              "https://vision.hack2skill.com/event/solutionschallenge2025/",
              "_blank"
            );
          }}
        >
          Register for Solution Challenge
        </RainbowButton>
      </SuccessMessage>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const formData = {
        name: e.target.full_name.value,
        registration_number: e.target.register_number.value,
        email: e.target.email.value,
        year_of_study: e.target.year.value,
        department: e.target.department.value,
        class: e.target.class.value,
        mobile_number: e.target.mobile_number.value,
      };
      const response = await fetch("/api/workshop-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(data?.error || "Unknown error occurred");
      }

      setSubmitSuccess(true);

      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      e.target.reset();
    } catch (err) {
      setError(
        "Failed to submit registration. Please try again." + err.message || ""
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RegistrationSection>
      <DotPattern className="opacity-30 dark:opacity-20" />

      <ContentContainer>
        <div className="flex flex-col items-center justify-center">
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Introduction to Git and GitHub
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-800"
          >
            Register for &quot;Introduction to Git and GitHub&quot;
          </Subtitle>

          <GlowButton
            onClick={() => {
              navigate("/git-workshop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Click to Learn More
          </GlowButton>
        </div>

        <Form onSubmit={handleSubmit}>
          <FormGrid>
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                name="full_name"
                type="text"
                required
                placeholder="Enter your full name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Register Number</Label>
              <Input
                name="register_number"
                type="text"
                required
                placeholder="Enter your register number"
              />
            </FormGroup>

            <FormGroup>
              <Label>Mobile Number</Label>
              <Input
                name="mobile_number"
                type="tel"
                required
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
              />
            </FormGroup>

            <FormGroup>
              <Label>Year</Label>
              <Select name="year" required>
                <option value="">Select your year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Department</Label>
              <Select name="department" required>
                <option value="">Select your department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Class/Slot</Label>
              <Input
                name="class"
                type="text"
                required
                placeholder="Enter your class/slot"
              />
            </FormGroup>
          </FormGrid>

          <RainbowButton
            type="submit"
            disabled={isSubmitting}
            style={{ width: "100%", marginTop: "1rem" }}
          >
            {isSubmitting ? "Registering..." : "Register Now"}
          </RainbowButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>

        {submitSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>🎉 Registration Successful!</h3>
            <p>
              Thank you for registering. We&apos;ll send you a confirmation
              email with further details.
            </p>
            <p>Make sure to also RSVP here</p>
            <RainbowButton
              onClick={() => {
                window.open("https://gdg.community.dev/e/mj4m48/", "_blank");
              }}
            >
              RSVP
            </RainbowButton>
          </SuccessMessage>
        )}

        <WhatsAppWidget
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Join our WhatsApp group for workshop updates and discussions</p>
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
            Join WhatsApp Group
          </WhatsAppButton>
        </WhatsAppWidget>
      </ContentContainer>
    </RegistrationSection>
  );
};

export default GitWorkshopRegistration;
