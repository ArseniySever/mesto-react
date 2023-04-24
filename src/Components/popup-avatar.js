
import PopupWithForm from "../popup-validation";
function PopupAvatar({ isOpen, onClose}){
    return(
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} buttonName="Обновить">
            <input type="url" name="link" className="popup__name-item popup__name-item_value_avatar" placeholder="Введите ссылку на аватар" required minLength="2" maxLength="200"/>
            <span className="popup__item-error avatar-input-error"/>
        </PopupWithForm>
);    
}
export default PopupAvatar;