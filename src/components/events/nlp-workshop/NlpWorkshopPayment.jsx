import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { DotPattern } from "../../DotPattern";
import { useState } from "react";
import { RainbowButton } from "../../RainbowButton";
import { GlowButton } from "../../GradientGlow";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaUpload, FaSpinner } from "react-icons/fa";

const PaymentSection = styled.section`
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

const StepContainer = styled(motion.div)`
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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
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

const FileUploadArea = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);

  &:hover {
    border-color: var(--medium-blue);
    background: rgba(66, 133, 244, 0.05);
  }

  &.dragover {
    border-color: var(--medium-blue);
    background: rgba(66, 133, 244, 0.1);
  }

  body.dark & {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.1);

    &:hover {
      border-color: var(--medium-blue);
      background: rgba(66, 133, 244, 0.05);
    }
  }
`;

const FileUploadText = styled.p`
  color: var(--text-secondary);
  margin: 0.5rem 0;

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const PreviewImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);

  body.dark & {
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: var(--medium-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
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

const InstructionsList = styled.ul`
  text-align: left;
  margin: 1rem 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    list-style: none;
    position: relative;

    &:before {
      content: "•";
      color: var(--medium-blue);
      font-weight: bold;
      position: absolute;
      left: -1rem;
    }
  }

  body.dark & {
    li {
      color: var(--text-secondary-dark);
    }
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StepDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "var(--medium-blue)" : "rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s ease;

  body.dark & {
    background: ${(props) =>
      props.active ? "var(--light-blue)" : "rgba(255, 255, 255, 0.2)"};
  }
`;

const StepLine = styled.div`
  width: 40px;
  height: 2px;
  background: ${(props) =>
    props.completed ? "var(--medium-blue)" : "rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s ease;

  body.dark & {
    background: ${(props) =>
      props.completed ? "var(--light-blue)" : "rgba(255, 255, 255, 0.2)"};
  }
`;

export const NlpWorkshopPayment = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: verify, 2: payment, 3: success
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [registrationData, setRegistrationData] = useState(null);
  const [paymentData, setPaymentData] = useState({
    upiId: "",
    transactionId: "",
    paymentProof: null,
  });
  const navigate = useNavigate();

  const handleVerifyRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const registerNumber = formData.get("registerNumber");

    try {
      const response = await fetch("/api/verify-nlp-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registerNumber }),
      });

      if (!response.ok) {
        throw new Error("Registration not found");
      }

      const data = await response.json();
      setRegistrationData(data);
      setCurrentStep(2);
    } catch {
      setError("Registration number not found. Please check and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("File size must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }
      setPaymentData((prev) => ({ ...prev, paymentProof: file }));
      setError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file) {
      const event = { target: { files: [file] } };
      handleFileUpload(event);
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("paymentProof", paymentData.paymentProof);
      formData.append("upiId", paymentData.upiId);
      formData.append("transactionId", paymentData.transactionId);
      formData.append("registrationId", registrationData.id);

      const response = await fetch("/api/submit-nlp-payment", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit payment");
      }

      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Failed to submit payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <PaymentSection>
      <DotPattern className="opacity-30 dark:opacity-20" />

      <ContentContainer>
        <div className="flex flex-col items-center justify-center">
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NLP Workshop Payment
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Complete your payment verification
          </Subtitle>

          <StepIndicator>
            <StepDot active={currentStep >= 1} />
            <StepLine completed={currentStep > 1} />
            <StepDot active={currentStep >= 2} />
            <StepLine completed={currentStep > 2} />
            <StepDot active={currentStep >= 3} />
          </StepIndicator>

          <GlowButton
            onClick={() => {
              navigate("/nlp-workshop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to Workshop Details
          </GlowButton>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <StepContainer
              key="verify"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h3
                style={{ marginBottom: "1rem", color: "var(--text-primary)" }}
              >
                Step 1: Verify Registration
              </h3>
              <form onSubmit={handleVerifyRegistration}>
                <FormGroup>
                  <Label>Registration Number</Label>
                  <Input
                    name="registerNumber"
                    type="text"
                    required
                    placeholder="Enter your registration number"
                  />
                </FormGroup>

                <RainbowButton
                  type="submit"
                  disabled={isLoading}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    "Verify Registration"
                  )}
                </RainbowButton>

                {error && <ErrorMessage>{error}</ErrorMessage>}
              </form>
            </StepContainer>
          )}

          {currentStep === 2 && (
            <StepContainer
              key="payment"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h3
                style={{ marginBottom: "1rem", color: "var(--text-primary)" }}
              >
                Step 2: Payment Details
              </h3>
              <p
                style={{
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                Welcome, {registrationData?.name}! Please upload your payment
                proof and details.
              </p>

              <form onSubmit={handlePaymentSubmit}>
                <FormGroup>
                  <Label>UPI ID</Label>
                  <Input
                    type="text"
                    required
                    placeholder="Enter UPI ID used for payment"
                    value={paymentData.upiId}
                    onChange={(e) =>
                      setPaymentData((prev) => ({
                        ...prev,
                        upiId: e.target.value,
                      }))
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Transaction ID</Label>
                  <Input
                    type="text"
                    required
                    placeholder="Enter transaction ID"
                    value={paymentData.transactionId}
                    onChange={(e) =>
                      setPaymentData((prev) => ({
                        ...prev,
                        transactionId: e.target.value,
                      }))
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Payment Proof (Screenshot)</Label>
                  <FileUploadArea
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("paymentProof").click()
                    }
                  >
                    <FaUpload
                      size={24}
                      style={{
                        color: "var(--medium-blue)",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <FileUploadText>
                      {paymentData.paymentProof
                        ? paymentData.paymentProof.name
                        : "Click to upload or drag and drop"}
                    </FileUploadText>
                    <FileUploadText style={{ fontSize: "0.875rem" }}>
                      PNG, JPG up to 5MB
                    </FileUploadText>
                    {paymentData.paymentProof && (
                      <PreviewImage
                        src={URL.createObjectURL(paymentData.paymentProof)}
                        alt="Payment proof preview"
                      />
                    )}
                  </FileUploadArea>
                  <input
                    id="paymentProof"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                    required
                  />
                </FormGroup>

                <RainbowButton
                  type="submit"
                  disabled={isLoading || !paymentData.paymentProof}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Payment"
                  )}
                </RainbowButton>

                {error && <ErrorMessage>{error}</ErrorMessage>}
              </form>
            </StepContainer>
          )}

          {currentStep === 3 && (
            <SuccessMessage
              key="success"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle
                size={48}
                style={{ color: "var(--medium-green)", marginBottom: "1rem" }}
              />
              <h3>🎉 Payment Submitted Successfully!</h3>
              <p>
                Your payment has been submitted for verification. You will
                receive a confirmation email once verified.
              </p>

              <InstructionsList>
                <li>Your payment will be verified within 24-48 hours</li>
                <li>You will receive an email confirmation once verified</li>
                <li>Keep your transaction ID safe for future reference</li>
                <li>Join our WhatsApp group for updates and announcements</li>
                <li>Contact us if you receive confirmation within 48 hours</li>
              </InstructionsList>

              <RainbowButton
                onClick={() => {
                  navigate("/nlp-workshop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{ marginTop: "1rem" }}
              >
                Back to Workshop
              </RainbowButton>
            </SuccessMessage>
          )}
        </AnimatePresence>
      </ContentContainer>
    </PaymentSection>
  );
};
