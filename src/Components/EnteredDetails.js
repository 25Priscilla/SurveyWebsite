import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnteredDetails = ({ data, questionData }) => {
  const navigate = useNavigate();

  // Redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/thanks");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [navigate]);

  if (!data || !questionData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Entered Details</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.contact}</p>
      <h3>Survey Questions</h3>
      <p><strong>Profession:</strong> {questionData.profession}</p>
      <p><strong>Interest:</strong> {questionData.interest}</p>
      <p><strong>Reference:</strong> {questionData.reference}</p>

      <p>Redirecting to Thank You page...</p>
    </div>
  );
};

export default EnteredDetails;
