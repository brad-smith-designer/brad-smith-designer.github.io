import { h } from 'preact';

const Modal = ({ id, children, modalTitle, initClass="js-modal" }) => 
<div class={"modal " + initClass} data-modal-toggle={id}>
	<div class="modal__close js-modal-close js-modal-toggler" aria-label="close">
    </div>
    <div class="modal__inner"  role="dialog" aria-modal="true" aria-labelledby="modal-label">
		<h2 id="modal-label" class="modal__title">{modalTitle}</h2>
		<div class="modal__content-container">
        	{children}
		</div>
		<button role="button" aria-label="close" tabindex="0" class={"modal__close-btn " + id}>
			<svg fill="#000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
	</div>
</div>;

export default Modal;