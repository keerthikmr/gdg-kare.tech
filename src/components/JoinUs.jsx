import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { RetroGrid } from './RetroGrid';

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
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  body.dark & {
    background: var(--bg-secondary-dark);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text);
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 2px var(--blue-alpha);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text);
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 2px var(--blue-alpha);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text);
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 2px var(--blue-alpha);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ProjectBadge = styled.div`
  background: var(--blue-alpha);
  color: var(--blue);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  
  body.dark & {
    background: var(--blue-alpha-dark);
  }
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

const JoinUs = () => {
  const roles = [
    'Event management',
    'Web development',
    'Mobile app development',
    'Machine Learning',
    'Designing',
    'Video editing',
    'Media – Photography',
    'Content writing',
    'Social media/PR',
    'Cloud computing'
  ];

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
        
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Registration Number</Label>
            <Input type="text" required />
          </FormGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup>
              <Label>Year of Study</Label>
              <Select required>
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Department</Label>
              <Input type="text" required />
            </FormGroup>
          </div>

          <FormGroup>
            <Label>Preferred Role</Label>
            <Select required>
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Why are you interested in this role?</Label>
            <TextArea required />
          </FormGroup>

          <FormGroup>
            <Label>Why should we recruit you?</Label>
            <TextArea required />
          </FormGroup>

          <FormGroup>
            <Label>Past Projects (Add up to 5 links)</Label>
            <ProjectLinks>
              <ProjectBadge>Project 1</ProjectBadge>
              <ProjectBadge>+ Add Project</ProjectBadge>
            </ProjectLinks>
          </FormGroup>

          <FormGroup>
            <Label>Additional Information</Label>
            <TextArea placeholder="Any other achievements, skills, or information you'd like to share?" />
          </FormGroup>

          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Submit Application
          </SubmitButton>
        </Form>
      </Container>
    </JoinSection>
  );
};

export default JoinUs; 