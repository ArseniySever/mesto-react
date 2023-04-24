import React from "react";
import api from "../utils/Api";
import Card from "./Card";
function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick}){
    const [apiSearch, setapiSearch] = React.useState('');

    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);

    React.useEffect(() =>{
        api.getUserInfo(apiSearch)
        .then((data) =>{
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
    }
    )
   
    
    

    return(
    <section className='main'>
        <section className="profile">
        <div className="profile__avatar-area">
            <img
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }} 
            alt=""
            />
            <button
            type="button"
            className="profile__avatar-edit"
            aria-label="Редактировать аватар профиля"
            onClick = {onEditAvatar}
            ></button>
        </div>
        <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button type="button" className="profile__edit-button" onClick = {onEditProfile}
></button>
        </div>
        <button type="button" className="profile__add-button" onClick = {onAddPlace}
></button>
        </section>
        <section className="elements">
            {cards.map(({ _id, ...cards }) => <Card key={cards.id} {...cards}  onCardClick={onCardClick} />)}
        </section>
    </section>
      );  
    
}



export default Main;