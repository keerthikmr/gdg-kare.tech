import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GitWorkshopRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/git-workshop");
  }, [navigate]);

  return null;
};

export default GitWorkshopRegistration;
