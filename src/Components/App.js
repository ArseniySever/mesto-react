import React from 'react';
import '../index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 
import PopupAvatar from './components/popup-avatar';
import PopupProfile from './components/popup-profile';
import PopupPlace from './components/popup-place';
import PopupDelete from './components/popup-delete';
import api from '../utils/Api';
import ImagePopup from './components/ImagePopup';
import Card from './components/Card';

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
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
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
