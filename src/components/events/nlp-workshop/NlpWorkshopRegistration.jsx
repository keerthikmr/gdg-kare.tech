import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NlpWorkshopRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/nlp-workshop");
  }, [navigate]);

  return null;
};

export default NlpWorkshopRegistration;
