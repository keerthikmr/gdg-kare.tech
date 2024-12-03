import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { RetroGrid } from './RetroGrid';
import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import SuccessDarkIllustration from '../assets/success-dark.svg';
import SuccessLightIllustration from '../assets/success-light.svg';
const JoinSection = styled.section`
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
  max-width: 800px;
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

const Form = styled.form`
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  body.dark & {
    background: var(--bg-secondary-dark);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.75rem;
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
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--text-secondary-dark);
    color: var(--text-primary-dark);
    
    &:focus {
      border-color: var(--medium-blue);
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }
  
  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &:hover {
    border-color: var(--text-secondary);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: pointer;
  
  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--text-secondary-dark);
    color: var(--text-primary-dark);
    
    &:focus {
      border-color: var(--medium-blue);
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }
  
  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &:hover {
    border-color: var(--text-secondary);
  }
`;

const AutosizeTextArea = styled(TextareaAutosize)`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text-primary);
  min-height: 120px;
  transition: all 0.3s ease;
  resize: none;
  max-height: 400px;
  
  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--text-secondary-dark);
    color: var(--text-primary-dark);
    
    &:focus {
      border-color: var(--medium-blue);
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }
  
  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &:hover {
    border-color: var(--text-secondary);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ProjectBadge = styled.div`
  background: ${props => {
    // Google-colored gradients array with adjusted yellow for better visibility
    const gradients = [
      'linear-gradient(135deg, var(--blue), var(--medium-blue))',     // Blue gradient
      'linear-gradient(135deg, var(--red), var(--medium-red))',       // Red gradient
      'linear-gradient(135deg, var(--yellow), var(--orange))',        // Yellow-orange gradient
      'linear-gradient(135deg, var(--green), var(--medium-green))',   // Green gradient
    ];
    // For the "Add Project" button
    if (props.className === 'add-project') {
      return 'transparent';
    }
    // Use index to cycle through gradients
    return gradients[props.index % gradients.length];
  }};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  body.dark & {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .remove-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    margin-left: 0.25rem;
    opacity: 0.8;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }

  // Style for the Add Project button
  &.add-project {
    background: var(--blue-alpha);
    color: var(--blue);
    border: 2px dashed var(--blue);
    transition: all 0.3s ease;
    box-shadow: none;
    
    &:hover {
      background: var(--blue-alpha-hover);
    }
    
    body.dark & {
      background: var(--blue-alpha-dark);
      border-color: var(--light-blue);
      color: var(--light-blue);
      
      &:hover {
        background: var(--blue-alpha-dark-hover);
      }
    }
  }
`;

const ProjectInput = styled(Input)`
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.div`
  color: var(--medium-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: var(--medium-red);
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const RequiredIndicator = styled.span`
  color: var(--medium-red);
  margin-left: 4px;
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  
  body.dark & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .illustration {
    width: 300px;
    height: 300px;
    margin: 0 auto 2rem;
    object-fit: contain;
    
  }
  
  h2 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--blue), var(--medium-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .home-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, var(--blue), var(--medium-blue));
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

const VerifyButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  min-width: 100px;
  transition: all 0.3s ease;
  
  &:disabled {
    background: var(--grey);
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &:not(:disabled):hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:not(:disabled):active {
    transform: translateY(0);
  }
  
  body.dark & {
    &:disabled {
      background: var(--bg-secondary-dark);
    }
  }
`;

const JoinUs = () => {
  const roles = [
    'Event Management',
    'Web Development',
    'Mobile App Development',
    'Machine Learning',
    'Design',
    'Video Editing',
    'Media & Photography',
    'Content Writing',
    'Social Media & PR',
    'Cloud Computing'
  ];

  const [currentProject, setCurrentProject] = useState('');
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  const [isDarkTheme, setIsDarkTheme] = useState(() => 
    document.body.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkTheme(document.body.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.body, {
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  };

  const addProject = () => {
    if (!currentProject) {
      setError('Please enter a project URL');
      return;
    }
    
    if (!isValidUrl(currentProject)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }
    
    if (projects.length >= 5) {
      setError('Maximum 5 projects allowed');
      return;
    }
    
    setProjects([...projects, currentProject]);
    setCurrentProject('');
    setError('');
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const validateEmailFormat = (email) => {
    // Check if email is empty
    if (!email) {
      setEmailError('Email is required');
      return false;
    }

    // Split email into local part and domain
    const [localPart, domain] = email.split('@');

    // Check if email has correct domain
    if (!email.endsWith('@klu.ac.in')) {
      setEmailError('Please use your KLU email address (@klu.ac.in)');
      return false;
    }

    // Check if local part contains only numbers
    if (!/^\d+$/.test(localPart)) {
      setEmailError('Email should only contain numbers before @klu.ac.in');
      return false;
    }

    // Check if local part is exactly 12 digits (adjust this number if needed)

    setEmailError('');
    return true;
  };

  const verifyApplication = async () => {
    if (!validateEmailFormat(email)) {
      return;
    }

    setIsVerifying(true);
    setVerificationError('');

    try {
      const response = await fetch('http://localhost:3001/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      if (data.exists) {
        setVerificationError('An application with this email already exists');
        setIsVerified(false);
      } else {
        setIsVerified(true);
        setVerificationError('');
      }
    } catch (error) {
      console.error('Error:', error);
      setVerificationError('Failed to verify email. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmailFormat(email)) {
      return;
    }

    if (!isVerified) {
      setVerificationError('Please verify your email first');
      return;
    }

    if (projects.length === 0) {
      setError('Please add at least one project');
      document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const formData = {
        name: e.target.name.value,
        registration_number: e.target.registration_number.value,
        email: email,
        resume_link: e.target.resume_link.value,
        year_of_study: e.target.year_of_study.value,
        department: e.target.department.value,
        preferred_role: e.target.preferred_role.value,
        role_interest: e.target.role_interest.value,
        recruitment_reason: e.target.recruitment_reason.value,
        projects: projects,
        additional_info: e.target.additional_info.value || null
      };

      const response = await fetch('http://localhost:3001/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      setSubmitSuccess(true);
      e.target.reset();
      setEmail('');
      setProjects([]);
      setCurrentProject('');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      setSubmitError('Failed to submit application. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <JoinSection>
        <RetroGrid className="opacity-30 dark:opacity-20" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessMessage>
              <img 
                src={isDarkTheme ? SuccessDarkIllustration : SuccessLightIllustration}
                alt="Success"
                className="illustration"
              />
              <h2>Application Submitted! 🎉</h2>
              <p>
                Thank you for applying to GDG KARE. We've received your application 
                and will review it carefully. You'll hear back from us soon about 
                the next steps.
              </p>
              <Link to="/" className="home-button">
                <svg 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Return Home
              </Link>
            </SuccessMessage>
          </motion.div>
        </Container>
      </JoinSection>
    );
  }

  return (
    <JoinSection>
      <RetroGrid className="opacity-30 dark:opacity-20" />
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join GDG KARE 2025
        </Title>
        
        <Form onSubmit={handleSubmit}>
          {submitSuccess && (
            <SubmitMessage className="success">
              Application submitted successfully! We'll review it and get back to you soon.
            </SubmitMessage>
          )}
          
          {submitError && (
            <SubmitMessage className="error">
              {submitError}
            </SubmitMessage>
          )}
          
          <FormGroup>
            <Label>Name <RequiredIndicator>*</RequiredIndicator></Label>
            <Input name="name" type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Registration Number <RequiredIndicator>*</RequiredIndicator></Label>
            <Input name="registration_number" type="text" required />
          </FormGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup>
              <Label>Email <RequiredIndicator>*</RequiredIndicator></Label>
              <div className="flex gap-2">
                <Input 
                  name="email"
                  type="email" 
                  required 
                  placeholder="991020304050@klu.ac.in"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                    if (verificationError) setVerificationError('');
                    setIsVerified(false);
                  }}
                  onBlur={() => validateEmailFormat(email)}
                  style={{ 
                    borderColor: emailError || verificationError 
                      ? 'var(--medium-red)' 
                      : isVerified 
                        ? 'var(--medium-green)' 
                        : undefined 
                  }}
                />
                <VerifyButton
                  type="button"
                  onClick={verifyApplication}
                  disabled={isVerifying || !email || emailError}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isVerifying ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                          fill="none"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Checking
                    </span>
                  ) : (
                    'Verify'
                  )}
                </VerifyButton>
              </div>
              {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
              {verificationError && <ErrorMessage>{verificationError}</ErrorMessage>}
              {isVerified && (
                <div className="text-green-600 text-sm mt-1 flex items-center gap-2">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-4 h-4"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Email verified
                </div>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Resume Link <RequiredIndicator>*</RequiredIndicator></Label>
              <Input 
                name="resume_link"
                type="url" 
                required 
                placeholder="Google Drive/Dropbox link to your resume"
              />
            </FormGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup>
              <Label>Year of Study <RequiredIndicator>*</RequiredIndicator></Label>
              <Select name="year_of_study" required>
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Department <RequiredIndicator>*</RequiredIndicator></Label>
              <Input name="department" type="text" required />
            </FormGroup>
          </div>

          <FormGroup>
            <Label>Preferred Role <RequiredIndicator>*</RequiredIndicator></Label>
            <Select name="preferred_role" required>
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Why are you interested in this role? <RequiredIndicator>*</RequiredIndicator></Label>
            <AutosizeTextArea 
              name="role_interest"
              required
              minRows={3}
              placeholder="Tell us what interests you about this role..."
              cacheMeasurements
            />
          </FormGroup>

          <FormGroup>
            <Label>Why should we recruit you? <RequiredIndicator>*</RequiredIndicator></Label>
            <AutosizeTextArea 
              name="recruitment_reason"
              required
              minRows={3}
              placeholder="Tell us about your skills and experience..."
              cacheMeasurements
            />
          </FormGroup>

          <FormGroup id="projects-section">
            <Label>Past Projects (Add up to 5 links) <RequiredIndicator>*</RequiredIndicator></Label>
            <div style={{ marginBottom: '1rem' }}>
              {projects.length < 5 && (
                <>
                  <ProjectInput
                    type="url"
                    placeholder="Project URL"
                    value={currentProject}
                    onChange={(e) => {
                      setCurrentProject(e.target.value);
                      setError(''); // Clear error when user starts typing
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addProject();
                      }
                    }}
                    style={{ borderColor: error ? 'var(--medium-red)' : undefined }}
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  <ProjectBadge 
                    as="button"
                    type="button"
                    onClick={addProject}
                    className="add-project"
                    style={{ cursor: 'pointer', border: 'none', marginTop: '0.5rem' }}
                  >
                    + Add Project
                  </ProjectBadge>
                </>
              )}
            </div>
            
            <ProjectLinks>
              {projects.map((project, index) => (
                <ProjectBadge key={index} index={index}>
                  {new URL(project).hostname}
                  <button 
                    className="remove-btn" 
                    onClick={() => {
                      removeProject(index);
                      setError(''); // Clear any existing errors when removing a project
                    }}
                    title="Remove project"
                  >
                    ×
                  </button>
                </ProjectBadge>
              ))}
            </ProjectLinks>
            
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--text-secondary)',
              marginTop: '0.5rem' 
            }}>
              {projects.length === 0 
                ? 'Add at least one project link'
                : `${projects.length} of 5 projects added`
              }
            </div>
          </FormGroup>

          <FormGroup>
            <Label>Additional Information</Label>
            <AutosizeTextArea 
              name="additional_info"
              minRows={3}
              placeholder="Any other achievements, skills, or information you'd like to share?"
              cacheMeasurements
            />
          </FormGroup>

          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </SubmitButton>
        </Form>
      </Container>
    </JoinSection>
  );
};

export default JoinUs; 