import React from 'react';

function Footer() {
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

export default Footer;