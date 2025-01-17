import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';

const LogoIdea = ({ onHandleInputChange, formData }) => {
  // Initialize selected option from formData
  const [selectedOption, setSelectedOption] = useState(formData?.design?.idea || '');

  // Design options
  const options = [
    { id: 1, label: 'Chat bubble icon, glossy' },
    { id: 2, label: 'Play button, vibrant colors' },
    { id: 3, label: 'Shopping cart, 3D effect' },
    { id: 4, label: 'Music note, playful style' },
    { id: 5, label: 'Location pin, bright text' },
    { id: 6, label: 'Let AI Select the best idea' },
  ];

  // Handle option click
  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Update formData with the selected idea
    const updatedFormData = {
      ...formData,
      design: {
        ...formData?.design,
        idea: option,
      },
    };

    // Pass the updated formData to the parent component
    onHandleInputChange(updatedFormData);
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
