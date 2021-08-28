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
                <h1 class="home-hero__heading">Design and art direction</h1>
            </div>
        </div>
    </div>

    <div class="intro">
        <div class="wrap">
            <div class="intro__content">
                <p>I am a digital designer, here is some work.</p>
            </div>
        </div>
    </div>

    <div class="projects">
        <div class="wrap">
            <ul class="projects__list">
                <li class="projects__list-item">
                    <button href="#" class="js-modal-toggler-1 projects__list-item-trigger">
                        <h2 class="projects__list-item-title">Edinburgh Castle</h2>
                        <span class="projects__list-item-year">2018</span>
                    </button>
                </li>
                <li class="projects__list-item">
                    <button href="#" class="js-modal-toggler-2 projects__list-item-trigger">
                        <h2 class="projects__list-item-title">Glasgow Life</h2>
                        <span class="projects__list-item-year">2017</span>
                    </button>
                </li>
                <li class="projects__list-item">
                    <button href="#" class="js-modal-toggler-2 projects__list-item-trigger">
                        <h2 class="projects__list-item-title">Scottish Courts and Tribunals</h2>
                        <span class="projects__list-item-year">2021</span>
                    </button>
                </li>
                <li class="projects__list-item">
                    <button href="#" class="js-modal-toggler-2 projects__list-item-trigger">
                        <h2 class="projects__list-item-title">Celtic Connections</h2>
                        <span class="projects__list-item-year">2019</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <Modal id="js-modal-toggler-1" modalTitle="Edinburgh Castle" initClass="js-modal modal">
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
            <dl class="modal__info">
                <dt>Agency</dt>
                <dd>StormID</dd>
                <dt>Client</dt>
                <dd>Historic Environment Scotland</dd>
                <dt>Collaborators</dt>
                <dd>Jason Kennedy <span>Creative Director</span></dd>
            </dl>
        </div>
    </Modal>
    <Modal id="js-modal-toggler-2" modalTitle="This project" initClass="js-modal modal">
        <div class="modal__content">
            <p>Blaaaaah.   </p>  
            <dl class="modal__info">
                <dt>Agency</dt>
                <dd>StormID</dd>
                <dt>Client</dt>
                <dd>Glasgow Life</dd>
                <dt>Collaborators</dt>
                <dd>Jason Kennedy <span>Creative Director</span></dd>
            </dl> 
        </div>
    </Modal>
    
{/* 
    <ProjectBlockImageLeft modifier={''} image={'/static/img/hemp-eyewear/flatlay-1-full.jpg'} link={'work/hemp-eyewear'} title={'Brand, campaign and website for Hemp Eyewear'}/> 

    <ProjectBlockImageLeft modifier={'project-block--image-right'} image={'/static/img/interstate/cover.jpg'} link={'work/interstate'} title={'Single artwork and logo for Interstate'}/> 

    <ProjectBlockImageLeft modifier={''} image={'/static/img/hemp-eyewear/flatlay-1-full.jpg'} link={''} title={'Logo for One Cloud Service'}/>  */}



</DefaultLayout>;

export default HomePage;