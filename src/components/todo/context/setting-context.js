import React, { useState } from 'react';

export const SettingContext = React.createContext();

const SettingProvider = props => {
  const [completed, setCompleted] = useState(false);
  const [difficulty, setDifficulty] = useState('Ascending');
  const [itemPage, setItemPage] = useState(3);

  const setting = {
    completed,
    difficulty,
    itemPage,
    setCompleted,
    setDifficulty,
    setItemPage,
  };
  return (
    <SettingContext.Provider value={setting}>
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
