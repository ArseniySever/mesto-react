import React from "react";
function Card({ _id, link, name, likes, onCardClick}){
  const card = { _id: _id, link: link, name: name, likes: likes };
  
  function handleClick() {
    onCardClick(card);
  }  
  return(
    <template id="element" className="element element-template">
      <div className="element__rectangle">
        <button type="button" className="element__trash"></button>
        <img className="element__image" src={link} alt={name} onClick={handleClick}/>
        <h2 className="element__title">{name}</h2>
        <div className="element__area">
          <button type="button" className="element__heart"></button>
          <h3 className="element__heart-number">{likes.length}</h3>
        </div>
      </div>
    </template>
);  

}
export default Card;
