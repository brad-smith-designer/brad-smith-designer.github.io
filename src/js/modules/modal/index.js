import { MODAL } from '../../constants';
import Modal from '@stormid/modal';

export default () => {
    if(document.querySelector(MODAL.SELECTOR)) {
        const modal = Modal(MODAL.SELECTOR, {
            callback: () => {
                let modalOpen = true;
                modal.forEach(element => {
                   modalOpen = modalOpen && element.getState().isOpen;
                });
                if(modalOpen) {
                    document.documentElement.classList.add('modal--open');
                } else {
                    document.documentElement.classList.remove('modal--open');
                }
            }
        });
    }
};