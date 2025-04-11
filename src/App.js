import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import { About } from './Components/About';

function App() {
  // Initialize state from localStorage or use empty objects
  const [basicData, setBasicData] = useState(() => JSON.parse(localStorage.getItem('data')) || {});
  const [questionData, setQuestionData] = useState(() => JSON.parse(localStorage.getItem('questiondata')) || {});

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
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
          <Route path='/' element={<BasicInfo addBasicData={addBasicData} />} />
          <Route path='/questions' element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
          <Route path='/details' element={<EnteredDetails data={basicData} questionData={questionData} />} />
          <Route path='/thanks' element={<ThankYouPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
