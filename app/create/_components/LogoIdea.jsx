import React, { useState, useEffect } from 'react';
import HeadingDescription from './HeadingDescription';

const LogoIdea = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Options for design ideas
  const options = [
    { id: 1, label: 'Chat bubble icon, glossy' },
    { id: 2, label: 'Play button, vibrant colors' },
    { id: 3, label: 'Shopping cart, 3D effect' },
    { id: 4, label: 'Music note, playful style' },
    { id: 5, label: 'Location pin, bright text' },
    { id: 6, label: 'Let AI Select the best idea' },
  ];

  // Load the initial formData from localStorage when the component mounts
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData && savedFormData.design && savedFormData.design.idea) {
      setSelectedOption(savedFormData.design.idea);
    }
  }, []);

  // Handle option click and save to localStorage
  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Construct the formData object
    const formData = {
      title: 'App Logo',
      desc: 'sdv',
      palette: 'Ocean Blues',
      design: {
        title: 'App Logo',
        image: '/design_2.png', // Example image path
        idea: option, // Save the selected idea
      },
    };

    // Save the formData object to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Saved to localStorage:', formData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      {/* Heading and description */}
      <HeadingDescription
        title="Select Your Design Idea"
        description="Choose a design style that aligns with your vision, or skip to receive a random suggestion."
      />

      {/* Options buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.label)}
            style={{
              padding: '10px 20px',
              border: `2px solid ${selectedOption === option.label ? '#e6007e' : '#ccc'}`,
              borderRadius: '20px',
              backgroundColor: selectedOption === option.label ? '#e6007e' : '#fff',
              color: selectedOption === option.label ? '#fff' : '#000',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedOption !== option.label) e.target.style.borderColor = '#e6007e';
            }}
            onMouseLeave={(e) => {
              if (selectedOption !== option.label) e.target.style.borderColor = '#ccc';
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Display the selected option */}
      {selectedOption && (
        <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default LogoIdea;
