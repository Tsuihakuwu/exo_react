import React, { useState } from "react";

const Ex1 = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleChangeNom = (event) => {
    setNom(event.target.value);
  };

  const handleChangePrenom = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <div>
      <p>
        Modifiez le projet précédent pour ajouter un deuxième champ texte pour
        le prénom. L'application doit afficher les deux champs texte et les
        réafficher après 'Bonjour'.
      </p>
      <input
        type="text"
        name="prenom"
        id="prenom"
        placeholder="Votre prénom"
        value={prenom}
        onChange={handleChangePrenom}
      />
      <input
        type="text"
        name="nom"
        id="nom"
        placeholder="Votre nom"
        value={nom}
        onChange={handleChangeNom}
      />
      <br />
      <br />
      <div>
        Bonjour {prenom} {nom} !
      </div>
    </div>
  );
};

export default Ex1;
