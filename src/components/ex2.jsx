import React, { useState } from "react";

const Ex2 = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Réalisez une application qui affiche un compteur.</p>
      <p>
        La valeur du compteur doit être stockée dans une variable (créée avec
        useState()).
      </p>
      <p>Un bouton permet d'augmenter la valeur du compteur.</p>
      <button onClick={increment}>Compteur = {count}</button>
    </div>
  );
};

export default Ex2;