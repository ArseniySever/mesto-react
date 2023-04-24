import PopupWithForm from "../popup-validation";
function PopupPlace({ isOpen, onClose}){
    return(
        <PopupWithForm name="place" title="Новое место" isOpen={isOpen} onClose={onClose} buttonName="Добавить" >
            <div className="popup__form-item">
                <input type="text" name="name" className="popup__name-item popup__name-item_value_title" placeholder="Название" required minLength={1} maxLength={30} />
                <span className="popup__item-error title-input-error"></span>
            </div>
            <div className="popup__form-item">
                <input type="url" name="link"  className="popup__name-item popup__name-item_value_link"  placeholder="Ссылка на картинку" required />
                <span className="popup__item-error link-input-error"></span>
            </div>
        </PopupWithForm>

);    
}
export default PopupPlace;
