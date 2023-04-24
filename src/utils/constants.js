export { validationConfig, initialCards };
export {
  page,
  popupProfile,
  popupPhoto,
  popupSubtitle,
  buttonAdd,
  popupPlace,
  buttonEdit,
  formElementPlace,
  placesBox,
  login,
  job,
  avatar,
  titleInput,
  imageInput,
  formEditProfile,
  formAddNewCard,
  formAddAvatar,
  nameInput,
  popupAvatar,
  avatarEdit,
  buttonEditeAvatar,
  avatarInput,
  jobInput,
};
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__name-item",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__name-item_error",
  errorClass: "popup__name-item_active",
};
const initialCards = [
  {
    name: "Тихвин",
    link: "https://sun6-23.userapi.com/s/v1/if1/tfLbly28AUsC2zFfiGLw_DGpr8qTPjXO4ko6czg5B9TWl_Cs1chlVb_6gFmKr6aUQJvDV5fY.jpg?size=902x902&quality=96&crop=170,0,902,902&ava=1",
  },
  {
    name: "Старая Ладога",
    link: "https://35photo.pro/photos_main/1266/6330385.jpg",
  },
  {
    name: "Гатчина",
    link: "https://sun9-61.userapi.com/tUYFzmhM9m6W-cY17yM7qcT2_XEupql_ml-ORQ/4UBZEAvWm7Q.jpg",
  },
  {
    name: "Выборг",
    link: "https://kareliya-tur.ru/images/foto-vyborg/zimoj/vyborgskij-zamok-zimoj.jpg",
  },
  {
    name: "Петергорф",
    link: "http://news-piter.ru/wp-content/uploads/2012/03/DSC_9151.jpg",
  },
  {
    name: "Орешек",
    link: "https://takeyourtrip.ru/images/posts/8789/HQ/IMG_5287.jpg",
  },
];
const page = document.querySelector(".page");
const popupProfile = page.querySelector(".popup-profile");
const buttonEdit = page.querySelector(".profile__edit-button");
const popupPlace = page.querySelector(".popup-place");
const popupAvatar = page.querySelector(".popup-avatar");
const avatarEdit = page.querySelector(".profile__avatar");
const buttonAdd = page.querySelector(".profile__add-button");
const formElementPlace = page.querySelector(".popup__form-place");
const placesBox = document.querySelector(".elements");
const login = page.querySelector(".profile__title");
const job = page.querySelector(".profile__subtitle");
const avatar = page.querySelector(".profile__avatar");
const buttonEditeAvatar = page.querySelector(".profile__avatar-edit");
const titleInput = formElementPlace.querySelector(
  ".popup__name-item_value_title"
);
const imageInput = formElementPlace.querySelector(
  ".popup__name-item_value_link"
);
const formEditProfile = popupProfile.querySelector(".popup__form");
const formAddNewCard = popupPlace.querySelector(".popup__form");
const formAddAvatar = popupAvatar.querySelector(".popup__form");
const nameInput = formEditProfile.querySelector(".popup__name-item_value_name");
const jobInput = formEditProfile.querySelector(".popup__name-item_value_job");
const avatarInput = formAddAvatar.querySelector(
  ".popup__name-item_value_avatar"
);

const popupPhoto = page.querySelector(".popup__image");
const popupSubtitle = page.querySelector(".popup__subtitle");
