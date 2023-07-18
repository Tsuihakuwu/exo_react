import React, { useState } from "react";

const Ex3 = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, document.getElementById("liste").value]);
    document.getElementById("liste").value = "";
  };

  return (
    <div>
      <p>
        Réalisez une application permettant d'afficher une liste d'éléments.
      </p>
      <p>
        Votre liste de courses sera stockée (mais pas sauvegardée) dans un state
        qui contiendra un tableau.
      </p>
      <p>Un champ texte permettra d'ajouter un élément dans la liste</p>
      <input
        type="text"
        name="liste"
        id="liste"
        placeholder="Élément à ajouter..."
      />
      <input type="button" value="Ajouter" onClick={addItem} />

      <div>
        {items ? (
          <ul>
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Chargement de la liste</p>
        )}
      </div>
    </div>
  );
};

export default Ex3;
