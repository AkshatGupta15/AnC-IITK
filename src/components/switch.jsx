import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ToggleDark = ({isDarkMode}) => {

  const toggleDarkMode = () => {
    console.log("Clickde")
    
    // setDarkMode(!isDarkMode);
  };

  return (
    <DarkModeSwitch
      style={{width: "56px" , height: "30px" , padding: "4px"}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
    />
  );
};

export default ToggleDark
  