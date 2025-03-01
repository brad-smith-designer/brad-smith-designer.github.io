import { h } from 'preact';
import DefaultLayout from '../layouts/default';




export const title = 'Home';



const HomePage = () => <DefaultLayout section={'Home'}>


        <div class="home-hero">
            <div class="wrap">
                <div class="home-hero__container">
                    <div class="home-hero__content">
                        <h1 class="home-hero__intro"><span>Brad Smith</span>I do the hard work to make things simple.</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects"> 
            <div class="wrap">
                <div class="projects__container">
                    <ul class="projects__list">
                        <li class="projects__list-item js-scroll-point">
                            <a class="projects__list-item-trigger locked" disabled>
                                <h2 class="projects__list-item-title"><span class="projects__list-item-year">2022</span><span>Tikkurila</span></h2>
                                <div class="tip">
                                    <svg aria-hidden="true" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z"/></svg>
                                    <span>Contact for link</span>
                                </div>
                            </a>
                        </li>
                        <li class="projects__list-item js-scroll-point">
                            <a class="projects__list-item-trigger locked" disabled>
                                <h2 class="projects__list-item-title"><span class="projects__list-item-year">2020</span><span>Scottish Courts and Tribunals Service</span></h2>
                                <div class="tip">
                                    <svg aria-hidden="true" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z"/></svg>
                                    <span>Contact for link</span>
                                </div>
                            </a>
                        </li>
                        <li class="projects__list-item js-scroll-point">
                            <a class="projects__list-item-trigger locked" disabled>
                                <h2 class="projects__list-item-title"><span class="projects__list-item-year">2018</span><span>Boomday</span></h2>
                                <div class="tip">
                                    <svg aria-hidden="true" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z"/></svg>
                                    <span>Contact for link</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


</DefaultLayout>;



export default HomePage;