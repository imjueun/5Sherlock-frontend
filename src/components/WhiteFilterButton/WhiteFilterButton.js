import React, { useState, useEffect } from 'react';
import './WhiteFilterButton.scss';
import { useNavigate, Link } from 'react-router-dom';

const WhiteFilterButton = props => {
  const { text, clicked, onClick } = props;

  return (
    <div className={`whiteFilterButton ${clicked}`} onClick={onClick}>
      {text}
    </div>
  );
};
export default WhiteFilterButton;