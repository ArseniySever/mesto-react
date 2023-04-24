import React from 'react';
import '../../index.css';
import Header from './header';
import Footer from './footer'; 
import Main from './main';
import PopupAvatar from './popup-avatar';
import PopupProfile from './popup-profile';
import PopupPlace from './popup-place';
import PopupDelete from './popup-delete';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';

function App() {
  const [isPopupPlaceOpen, setPopupPlaceOpen] = React.useState(false);
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false });


  React.useEffect(() => {
    api.getInitialCards()
      .then(cards => {
        setCards(cards);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      name: card.name,
      link: card.link
    });
  }
  function closeAllPopups() {
    setPopupPlaceOpen(false);
    setIsPopupAvatarOpen(false);
    setIsPopupProfileOpen(false);
    setSelectedCard({ isOpen: false });

  }
  function onEditAvatar(){
    setIsPopupAvatarOpen(true);
    }
  function onEditProfile(){
    setIsPopupProfileOpen(true);
  }
  function onAddPlace(){
    setPopupPlaceOpen(true);
    }

  return (
    <div className="page">
        <Header/>
          <Main onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} onCardClick={handleCardClick} cards={cards} >
          </Main>
        <Footer/>
        <PopupAvatar isOpen={isPopupAvatarOpen} onClose={closeAllPopups}/>
        <PopupProfile isOpen={isPopupProfileOpen} onClose={closeAllPopups}/>
        <PopupPlace isOpen={isPopupPlaceOpen} onClose={closeAllPopups} />
        <ImagePopup cardLink={selectedCard.link} cardName={selectedCard.name} onClose={closeAllPopups} isOpen={selectedCard.isOpen}/>
        <PopupDelete/>
    </div>
  );
}

export default App;
