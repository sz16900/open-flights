import React from 'react';
import styled from 'styled-components';
import './Rating.css';

const StarWrapper = styled.span`
  position: relative;
  display: inline-block;
  &::before {
    font-family: 'FontAwesome';
    content: '\\f005 \\0020 \\f005 \\0020 \\f005 \\0020 \\f005 \\0020 \\f005';
  }
`;

const Stars = styled.span`
  color: #fcc201;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  &::before {
    font-family: 'FontAwesome';
    content: '\\f005 \\0020 \\f005 \\0020 \\f005 \\0020 \\f005 \\0020 \\f005';
  }
`;

const Rating = (props) => {
  const score = (props.score / 5) * 100;

  return (
    <StarWrapper>
      <Stars className="stars" style={{ width: score + '%' }}></Stars>
    </StarWrapper>
  );
};

export default Rating;
