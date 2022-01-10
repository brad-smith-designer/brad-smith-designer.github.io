import Toggle from './modules/toggle';
import Modal from './modules/modal';
import ScrollPoints from 'storm-scroll-points';

export const initStack = [
    Toggle,
    Modal
];

ScrollPoints.init('.js-scroll-point'); 