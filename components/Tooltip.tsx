import React from 'react';

const Tooltip = ({ text, children }: any) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-text">{text}</div>
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;