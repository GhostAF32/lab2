import React from 'react';

function GetFooter() {
  const divStyle = {
    width: '100%',
    height: '150px',
    color: 'yellow',
    fontSize: '30px',
    background: 'green',
  };
  return (
      <div style={divStyle}>
        Подвал приложения
      </div>
  );
}

export default GetFooter;