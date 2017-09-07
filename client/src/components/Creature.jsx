import React from 'react';

const Creature = (props) => {
  return (
    <div>
        <h2>{props.creature.name}</h2>
        <h4>{props.creature.description}</h4>
    </div>
  );
};

export default Creature;