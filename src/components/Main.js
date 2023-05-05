import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentContext = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-area">
          <img
            className="profile__avatar"
            src={currentContext.avatar}
            alt="аватар"
          />
          <button
            type="button"
            className="profile__avatar-edit"
            aria-label="Редактировать аватар профиля"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentContext.name}</h1>
          <p className="profile__subtitle">{currentContext.about}</p>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map(({ _id, ...cards }) => (
          <Card
            key={_id}
            _id={_id}
            {...cards}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
