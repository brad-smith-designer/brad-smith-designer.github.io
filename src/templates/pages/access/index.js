import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import ProjectBlockImageLeft from '../../components/project-block--image-left';
import Modal from '../../components/modal';



export const title = 'Home with access';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout section={'Home'}>

    <div class="home-hero">
        <div class="wrap">
            <div class="home-hero__container">
                <div class="home-hero__content">
                    <h1 class="home-hero__intro"><span>Brad Smith</span>I design digital experiences.</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="projects"> 
        <div class="wrap">
            <div class="projects__container">
                <ul class="projects__list">
                    <li class="projects__list-item js-scroll-point">
                        <a href="/t4i5k8k0u5r3i1l3a5" class="projects__list-item-trigger">
                            <h2 class="projects__list-item-title"><span class="projects__list-item-year">2022</span><span>Tikkurila</span></h2>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                        </a>
                    </li>
                    <li class="projects__list-item js-scroll-point">
                        <a href="/s2c6t4s0" class="projects__list-item-trigger">
                            <h2 class="projects__list-item-title"><span class="projects__list-item-year">2020</span><span>Scottish Courts and Tribunals Service</span></h2>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                        </a>
                    </li>
                    <li class="projects__list-item js-scroll-point">
                        <a href="/b3o5o4m1d9a6y2" class="projects__list-item-trigger">
                            <h2 class="projects__list-item-title"><span class="projects__list-item-year">2018</span><span>Boomday</span></h2>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>

    


</DefaultLayout>;

export default HomePage;