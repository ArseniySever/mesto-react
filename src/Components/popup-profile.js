import PopupWithForm from "./popup-validation";
function PopupProfile({ isOpen, onClose}){
    return(
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonName="Сохранить" >
    <div className="popup__form-item">
        <input type="text" name="name" className="popup__name-item popup__name-item_value_name" required minLength={2} maxLength={40} />
        <span className="popup__item-error name-input-error"></span>
    </div>
    <div className="popup__form-item">
    <input type="text" name="job" className="popup__name-item popup__name-item_value_job" required minLength={2} maxLength={200} />
        <span className="popup__item-error job-input-error"></span>
    </div>
</PopupWithForm>
);    
}
export default PopupProfile;
