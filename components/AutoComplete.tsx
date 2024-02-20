import React, { useState } from 'react';

const Autocomplete = ({ options }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSelectOption = (option: any) => {
    console.log(option)
    setInputValue(option);
    setIsInputActive(false)
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="autocomplete-input"
        // onBlur={() => setIsInputActive(false)}
        onFocus={() => setIsInputActive(true)}
      />
      {isInputActive && (
        <ul className="autocomplete-list">
          {options
            .filter((option: any) => option.title.includes(inputValue))
            .map((option: any) => (
              <li key={option.title} onClick={() => handleSelectOption(option.title)} className="autocomplete-list-item">
                {option.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;