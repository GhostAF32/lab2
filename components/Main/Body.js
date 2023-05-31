import React from 'react';

function GetBody() {
  const divStyle = {
    color: 'white',
    fontSize: '30px',
    width: '100%',
    height: '900px',
    fontSize: '30px',
    background: 'red',
  };
  return (
      <div style={divStyle}>
        Тело приложения
      </div>
  );
}

export default GetBody;