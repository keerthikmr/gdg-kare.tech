import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { useState } from "react";
import { RainbowButton } from "../../RainbowButton";
import { GlowButton } from "../../GradientGlow";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

const RegistrationSection = styled.section`
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--medium-blue), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  body.dark & {
    background: linear-gradient(135deg, var(--light-blue), var(--medium-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const Form = styled(motion.form)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  margin-top: 2rem;

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(233, 233, 233, 0.7);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary-dark);

    &:focus {
      border-color: var(--medium-blue);
    }

    &::placeholder {
      color: var(--text-secondary-dark);
    }
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(233, 233, 233, 0.7);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: pointer;

  option {
    background: white;
    color: #333;
    padding: 0.5rem;
  }

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary-dark);

    option {
      background: #2a2a2a;
      color: #e0e0e0;
    }

    &:focus {
      border-color: var(--medium-blue);
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.1),
    rgba(34, 197, 94, 0.05)
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(34, 197, 94, 0.3);
  box-shadow: 0 8px 32px 0 rgba(34, 197, 94, 0.2);
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  body.dark & {
    background: linear-gradient(
      135deg,
      rgba(34, 197, 94, 0.15),
      rgba(34, 197, 94, 0.08)
    );
    border-color: rgba(34, 197, 94, 0.2);

    h3 {
      color: var(--text-primary-dark);
    }

    p {
      color: var(--text-secondary-dark);
    }
  }
`;

const ErrorMessage = styled.div`
  color: var(--medium-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const InfoWidget = styled(motion.div)`
  background: #d0ebf7;
  background: linear-gradient(
    90deg,
    rgba(208, 235, 247, 0.15) 0%,
    rgba(122, 240, 240, 0.15) 50%,
    rgba(148, 247, 148, 0.15) 100%
  );

  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  body.dark & {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    border-color: rgba(255, 255, 255, 0.1);

    h3 {
      color: var(--text-primary-dark);
    }

    p {
      margin-bottom: 1rem;
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
//   margin-top: 2rem;

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
//   width: 100%;

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

const NlpWorkshopRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        cgpa: e.target.cgpa.value,
        mobile_number: e.target.mobile_number.value,
      };
      const response = await fetch("/api/nlp-workshop-register", {
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

      window.scrollTo({ top: SuccessMessage.offsetTop, behavior: "smooth" });
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
            NLP Workshop
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-800"
          >
            Register for &quot;Prompt! Plan! Perform!&quot;
          </Subtitle>

          <GlowButton
            onClick={() => {
              navigate("/nlp-workshop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Learn More
          </GlowButton>
        </div>

        <InfoWidget
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Note</h3>
          <p>
            Registration does not guarantee a spot in the workshop. Keep an eye
            on your inbox, we{"'"}ll send you a confirmation mail if you get
            shortlisted. You can then proceed to pay Rs.300/- and confirm your
            spot.
          </p>

          <p>
            3rd year students will also have to attend a preparatory sessions on
            <b> 11, 12 and 13th August</b> from 5 PM - 6PM.
          </p>
        </InfoWidget>

        {!submitSuccess && (
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

              <FormGroup>
                <Label>CGPA</Label>
                <Input
                  name="cgpa"
                  type="text"
                  required
                  placeholder="Enter your CGPA"
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
        )}

        {submitSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>🎉 Registration Successful!</h3>
            <p>
              Thank you for registering for the NLP Workshop. We{"'"}ll send you
              a confirmation email with further details.
            </p>
            <p>Make sure to also RSVP here</p>
            <RainbowButton
              onClick={() => {
                window.open("https://gdg.community.dev/e/mnr9x5/", "_blank");
              }}
            >
              RSVP
            </RainbowButton>
          </SuccessMessage>
        )}
      </ContentContainer>
    </RegistrationSection>
  );
};

export default NlpWorkshopRegistration;
