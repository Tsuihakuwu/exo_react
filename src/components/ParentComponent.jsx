import React from 'react';
// import ChildComponent from './ChildComponent';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';

const ParentComponent = () => {
  return (
    <div>
      <h3>Nom / Prénom</h3>
      <Ex1 />
      <h3>Compteur</h3>
      <Ex2 />
      <h3>Liste de courses</h3>
      <Ex3 />
    </div>
  );
};

export default ParentComponent;