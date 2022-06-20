import { h } from 'preact';

import Modal from '../../components/modal';


const Header = ({ modifier }) => <header class={`header ${modifier ? `${modifier}` : ''}`}>
{
    <div class="header__container">
        <a href="/" class="header__logo-link" aria-label="Brad Smith Designer - home">
            <svg class="header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.52 180.81">
            <defs/>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-1" d="M171.42 91V41.12L204 53.66a9.52 9.52 0 013.94 3.07 8.87 8.87 0 011.46 4.7V91h11.71l.05-20.06V20.06a20.43 20.43 0 00-6-14.25A20.63 20.63 0 00201.05 0h-21.24a19.92 19.92 0 00-14.22 5.91 19.22 19.22 0 00-5.83 14.14V91zm2.48-76.73a8.31 8.31 0 015.91-2.48h21.24a8.27 8.27 0 016 2.59 9.43 9.43 0 012.27 5.7v23.17l-10.94-4.13-21.6-8.43a8 8 0 01-3.94-3.05 9.58 9.58 0 01-1.42-4.64v-2.94a8.41 8.41 0 012.48-5.81zM90.81 41.11l32.52 12.54a9.59 9.59 0 013.94 3.08 8.87 8.87 0 011.46 4.7V91h11.71l.05-20v-9.49c0-8.97-6.49-14.89-6.49-14.89s.68-.65 3.6-4.37 2.93-10.44 2.93-10.44V20.06s-.05-8.3-6-14.25S120.43 0 120.43 0H79.14v91h11.67zm0-29.35h29.62a8.25 8.25 0 016 2.6 9.41 9.41 0 012.27 5.7v11.2s.28 3.22-3 6.38-7.95 1.48-7.95 1.48l-21.6-8.44a8 8 0 01-3.94-3 9.65 9.65 0 01-1.4-4.68zM297.93 84.8a18.88 18.88 0 005.58-13.88V20.06s-.05-8.3-5.94-14.25S283.46 0 283.46 0h-41.3v91h41.3c2.32 0 8.33-.4 14.47-6.2zm-44.1-5.58V11.76h29.63a8.26 8.26 0 015.85 2.44 8 8 0 012.45 5.86v50.86a7.76 7.76 0 01-2.42 5.85 9.51 9.51 0 01-5.88 2.45zM61.35 61.43c0-9-6.53-14.81-6.53-14.81a54.6 54.6 0 003.6-4.37c2.93-3.72 2.93-10.44 2.93-10.44V20.06s-.05-8.3-5.94-14.25S41.3 0 41.3 0H0v91h41.3c2.32 0 8.33-.37 14.47-6.17a18.88 18.88 0 005.58-13.88s-.01-.55 0-9.52zM11.67 11.76H41.3a8.24 8.24 0 016 2.6 9.46 9.46 0 012.28 5.7v11.2s.27 3.22-3 6.38-7.94 1.48-7.94 1.48l-21.6-8.44a8 8 0 01-3.94-3A9.6 9.6 0 0111.67 23zm35.51 65a9.51 9.51 0 01-5.88 2.45H11.67v-38.1L44.2 53.65a9.59 9.59 0 013.93 3.08 8.93 8.93 0 011.47 4.7v9.49a7.76 7.76 0 01-2.42 5.85zM293.85 140.87l-26.59-10.2s-2.64-1-3.6-2.74a10.59 10.59 0 01-1.14-3.78v-19h-9.64v75.14h9.64v-41.14l26.94 10.38a7.15 7.15 0 013.67 3.34c1 2.34.72 3.06.72 3.06v24.4h9.64v-75.14h-9.64zM47.8 146.48a16.12 16.12 0 00-7.85-6l-25.62-9.92A6.83 6.83 0 0111 128a7.55 7.55 0 01-1.28-3.56v-2.71a7.4 7.4 0 011.62-4.43 6.81 6.81 0 015.23-2.42h17.62a6.85 6.85 0 014.69 1.85 6.69 6.69 0 012.17 5h9.71a16.23 16.23 0 00-4.45-11.29 16.52 16.52 0 00-12.12-5.27H16.37A17.25 17.25 0 004.9 110 16.5 16.5 0 000 121.75v1l.05 2.37A17.14 17.14 0 003.3 134a14.72 14.72 0 006.42 5.08l26.93 10.46a7.51 7.51 0 013.29 2.65 7.26 7.26 0 011.14 3.92V164a7.15 7.15 0 01-1.89 4.5 7 7 0 01-5 2.17H16.57a6.84 6.84 0 01-6.85-6.85H0a16.6 16.6 0 004.83 11.69 16.22 16.22 0 0011.73 4.87h17.63a17.18 17.18 0 0011.7-4.83 15.54 15.54 0 004.87-11.73V155a17.66 17.66 0 00-2.96-8.52zM164.25 105.19h9.64v75.15h-9.64zM207.84 105.66h-20.38v9.72h20.38v65.43h9.64v-65.43h20.66v-9.72h-30.3zM143.48 110a17.53 17.53 0 00-11.67-4.8h-12.75a17.5 17.5 0 00-11.66 4.8 18.56 18.56 0 00-4.92 11.79v46.35h9.72v-36.77a3 3 0 010-.34v-9.26a6.57 6.57 0 012-4.85 6.84 6.84 0 014.84-2h12.75a6.83 6.83 0 014.84 2 6.57 6.57 0 012 4.85V131a3 3 0 010 .34v49h9.72v-58.57a18.58 18.58 0 00-4.87-11.77z"/>
                <path class="cls-1" d="M66.22 105.18l16.58-.07h12.75a17.48 17.48 0 0111.67 4.8 18.52 18.52 0 014.92 11.78v45.91h-9.73v-36.31a3 3 0 000-.34v-9.26a6.56 6.56 0 00-2-4.84 6.81 6.81 0 00-4.84-2H76V131a3 3 0 000 .34v49.05h-9.78V105.18z"/>
                </g>
            </g>
            </svg>
        </a>
        <div class="nav">
            {/* <a href="#" class="nav__item">Work</a>
            <a href="#" class="nav__item">Blog</a> */}
            <button href="#" class="js-modal-toggler-1 nav__item"><span>About</span></button>
        </div>
        <Modal id="js-modal-toggler-1" modalTitle="About" initClass="js-modal modal">
            <div class="modal__content">
                <div class="modal__content-block">
                    <p>I am a senior digital designer. For the last 5 years I've been a part of StormID, a digital transformation agency based in Leith, Edinburgh. For 4 years before that I was a part of a number of design agencies big and small, and even a small charity. My experience is broad, but more recently covers public sector projects, digital healthcare applications, and design systems.</p>
                    <p>My work always values simplicity, usability and accessibility. I'm not a person to make assumptions, and I don't like to follow trends. I ask questions and try to get to the heart of the problem I'm trying to solve. Most of all I'm open-minded. </p>
                    <p>My experience is predominently in UI, but I place huge importance on being involved at all stages of the design process, especially research. I write HTML and CSS, and occasionally JS where necessary. Writing frontend code for design is controversial but beneficial in my opinion. It allows me to think in terms of reusable components, directly influence the accessibility aspects of a project, make fixes to production code where needed, and speak the same language as frontend and backend developers.</p>
                    <p>For early ideation I use a pen and paper. Alongside coding I use the likes of XD and Figma to create rapid high-fidelity prototypes to engage the client, test with users, and iterate quickly. </p>
                    
                    <p>More work examples are available on request.</p>
                </div>
                <div class="modal__content-block">
                    <h2>I've designed for:</h2>
                    <ul class="list--blocked">
                        <li>Historic Environment Scotland</li>
                        <li>Edinburgh Castle</li>
                        <li>Glasgow Life</li>
                        <li>Abrdn</li>
                        <li>Youth Scotland</li>
                        <li>Young Scot</li>
                        <li>Historic England</li>
                        <li>Celtic Connections</li>
                        <li>Scottish Courts and Tribunals</li>
                        <li>NHS Scotland</li>
                        <li>Scottish Housing Regulator</li>
                        <li>Drinking Water Quality Regulator</li>
                        <li>Harrison Stevens</li>
                        <li>Natwest</li>
                        <li>Menzies Distribution</li>
                        <li>Edinburgh Fringe</li>
                        <li>Visit Scotland</li>
                        <li>The Scottish Government</li>
                        <li>Wood Mackenzie</li>
                        <li>Project Scotand</li>
                        <li>Scottish Enterprise</li>
                        <li>Northlink Ferries</li>
                        <li>Hemp Eyewear</li>
                        <li>Hemp MVMNT</li>
                        <li>and many more...</li>
                    </ul>
                </div>
                <div class="modal__content-block">
                    <h2>I've studied:</h2>
                    <ul class="list--lined">
                        <li>edX - Introduction to Web Accessibility</li>
                        <li>Udacity - Web Accessibility by Google</li>
                        <li>Codecademy - Introduction to HTML, CSS and JS</li>
                        <li>Glasgow Caledonian University - BA Hons Graphic Design for Digital Media</li>
                        <li>City of Glasgow College - HND Design and Visual Communication</li>
                    </ul>
                </div>
            </div>
        </Modal>
    </div>
}
</header>;

export default Header;