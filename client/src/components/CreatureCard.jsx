import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreatureStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 0.5px 0.5px 8px grey;
  h3{
    padding: 5px 0;
    text-align: center;
  }
`;

const CreatureCard = (props) => {
  return (
    <CreatureStyles>
      <Link to={`/creatures/${props.creature.id}`}>
        <h3>{props.creature.name}</h3>
      </Link>
    </CreatureStyles>
  );
};

export default CreatureCard;