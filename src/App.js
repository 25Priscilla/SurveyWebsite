import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import { About } from './Components/About';
import Contact from './Components/Contact';  // Import Contact component

function App() {
  // Initialize state from localStorage or use empty objects
  const [basicData, setBasicData] = useState(() => JSON.parse(localStorage.getItem('data')) || {});
  const [questionData, setQuestionData] = useState(() => JSON.parse(localStorage.getItem('questiondata')) || {});

  // Update localStorage when state changes
  useEffect(() => {
    if (basicData) {
      localStorage.setItem('data', JSON.stringify(basicData));
    }
  }, [basicData]);

  useEffect(() => {
    if (questionData) {
      localStorage.setItem('questiondata', JSON.stringify(questionData));
    }
  }, [questionData]);

  // Function to update basicData
  const addBasicData = (name, email, phone) => {
    setBasicData({ name, email, phone });
  };

  // Function to update questionData
  const addQuestionData = (profession, interest, reference) => {
    setQuestionData({ profession, interest, reference });
  };

  return (
    <BrowserRouter basename="/SurveyWebsite">
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<BasicInfo addBasicData={addBasicData} />} />
          <Route path="/questions" element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
          <Route path="/details" element={<EnteredDetails data={basicData} questionData={questionData} />} />
          <Route path="/thanks" element={<ThankYouPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
