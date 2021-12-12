import { h } from 'preact';
import DefaultLayout from '../layouts/default';
import Header from '../components/header';
import ProjectBlockImageLeft from '../components/project-block--image-left';
import Modal from '../components/modal';



export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout section={'Home'}>

    <div class="home-hero">
        <div class="home-hero__container">
            <div class="home-hero__content">
                {/* <h1 class="home-hero__heading">Design and art direction</h1> */}
                <h1 class="home-hero__intro">I design websites, apps and services at StormID<br/> with a focus on simplicity, usability and accessibility.</h1>
            </div>
        </div>
    </div>

    <div class="projects">
        <ul class="projects__list">
            <li class="projects__list-item">
                <a href="/scts" class="projects__list-item-trigger">
                    <h2 class="projects__list-item-title">Scottish Courts and Tribunals Service</h2>
                    <span class="projects__list-item-year">2020</span>
                </a>
            </li>
            <li class="projects__list-item">
                <a href="/edinburgh-castle" class="projects__list-item-trigger">
                    <h2 class="projects__list-item-title">Edinburgh Castle</h2>
                    <span class="projects__list-item-year">2018</span>
                    
                </a>
            </li>
            {/* <li class="projects__list-item">
                <a href="/glasgow-life" class="projects__list-item-trigger">
                    <h2 class="projects__list-item-title">Glasgow Life</h2>
                    <span class="projects__list-item-year">2017</span>
                </a>
            </li> */}
        </ul>
    </div>

    {/* <Modal id="js-modal-toggler-1" modalTitle="Edinburgh Castle" initClass="js-modal modal">
        <div class="modal__content">
            <p>At StormID I was tasked with leading the design for the new marketing website for the popular tourist destination, Edinburgh Castle. </p>   
            <figure class="modal__image">
                <img src="/static/img/edinburgh-castle/home-1.jpg"/>
            </figure>
            <p>Planning a visit was the goal for most users, so particular attention was given to the visiting information and clarity of directions.  </p>
            <div class="row">
                <figure class="modal__image modal__image--third">
                    <img src="/static/img/edinburgh-castle/tickets.png"/>
                </figure>
                <figure class="modal__image modal__image--third">
                    <img src="/static/img/edinburgh-castle/getting-here.png"/>
                </figure>
                <figure class="modal__image modal__image--third">
                    <img src="/static/img/edinburgh-castle/access.png"/>
                </figure>
            </div>
            <p>I created a UI with plenty of imagery and large clickable areas. There is a softer, lighter feel for most areas of the site, and a darker, richer feel for areas such as private events, weddings and the itineraries. Gill Sans and Gotham were borrowed from the umbrella brand, Historic Environment Scotland. </p>
            <ul class="swatch">
                <li class="swatch__item" style="background: #a61f29"></li>
                <li class="swatch__item" style="background: #d7c482"></li>
            </ul>
            <figure class="modal__image">
                <img src="/static/img/edinburgh-castle/homepage-2.png"/>
            </figure>
            <dl class="modal__info">
                <dt>Year</dt>
                <dd>2019</dd>
                <dt>Agency</dt>
                <dd>StormID</dd>
                <dt>Client</dt>
                <dd>Historic Environment Scotland</dd>
                <dt>Collaborators</dt>
                <dd>Jason Kennedy <span>Creative Director</span></dd>
            </dl>
        </div>
    </Modal>
    <Modal id="js-modal-toggler-2" modalTitle="Glasgow Life" initClass="js-modal modal">
        <div class="modal__content">
            <p>Glasgow Life were refreshing their existing site, with a focus on removing duplicate content, improving accessibility, and simplifying the experience overall.</p>            
            <p>Following a series of workshops I produced some rough sketches to share with the rest of the team and the client.</p>  
            <div class="row row--alt">
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/venue-sketch.jpg"/>
                </figure>
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/venue-wireframe.png"/>
                </figure>
            </div>
            <p>The sketches were refined into basic HTML wireframes, working with UX to align the client's business needs with those of their users.</p>
            <div class="row row--alt">
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/landing-sketch.jpg"/>
                </figure>
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/home-wireframe.png"/>
                </figure>
            </div>
            <p>A large part of the new site is the 'what's on' section with easy-to-digest information on events across all of Glasgow Life's service areas. Venues, festivals and events use a very similar content type, but with data coming from different places, which presented some challenges. </p>
            <div class="row row--alt">
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/event-list-mobile.png"/>
                </figure>
                <figure class="modal__image modal__image--half">
                    <img src="/static/img/glasgow-life/event-mobile.png"/>
                </figure>
            </div>
            <figure class="modal__image">
                <img src="/static/img/glasgow-life/nav-desktop.png"/>
            </figure>
            <figure class="modal__image">
                <img src="/static/img/glasgow-life/arts-music.png"/>
            </figure>
            <dl class="modal__info">
                <dt>Year</dt>
                <dd>2017</dd>
                <dt>Agency</dt>
                <dd>StormID</dd>
                <dt>Client</dt>
                <dd>Glasgow Life</dd>
                <dt>Collaborators</dt>
                <dd>Jason Kennedy <span>Creative Director</span></dd>
            </dl> 
        </div>
    </Modal> */}
    
{/* 
    <ProjectBlockImageLeft modifier={''} image={'/static/img/hemp-eyewear/flatlay-1-full.jpg'} link={'work/hemp-eyewear'} title={'Brand, campaign and website for Hemp Eyewear'}/> 

    <ProjectBlockImageLeft modifier={'project-block--image-right'} image={'/static/img/interstate/cover.jpg'} link={'work/interstate'} title={'Single artwork and logo for Interstate'}/> 

    <ProjectBlockImageLeft modifier={''} image={'/static/img/hemp-eyewear/flatlay-1-full.jpg'} link={''} title={'Logo for One Cloud Service'}/>  */}



</DefaultLayout>;

export default HomePage;