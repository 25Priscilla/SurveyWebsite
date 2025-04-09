import React from "react";
import { useNavigate } from "react-router-dom";

export default function Details({ userResponses }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Entered Details</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Profession:</b> {userResponses.finalProfession}
            </li>
            <li className="list-group-item">
              <b>Interest:</b> {userResponses.finalInterest}
            </li>
            <li className="list-group-item">
              <b>Reference:</b> {userResponses.finalReference}
            </li>
          </ul>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
