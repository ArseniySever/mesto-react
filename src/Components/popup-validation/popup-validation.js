import React from 'react';

function PopupWithForm({ name, title, mod, isOpen, onClose, children, buttonName }) {
    return (
        <section className={`popup popup-${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form-${name}`} noValidate>
                    <fieldset className="popup__set">
                        {children}
                        <button type="submit" className="popup__save">{buttonName}</button>
                    </fieldset>
                </form>
                <button className="popup__close" onClick={onClose}>
                </button>
            </div>
        </section>
    )
}

export default PopupWithForm;