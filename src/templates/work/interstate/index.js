import { h } from 'preact';
import DefaultLayout from '../../../layouts/default';
import Header from '../../../components/header';
import BlockSingle from '../../../components/block-single';
import BlockDouble from '../../../components/block-double';


export const title = 'Interstate';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const Project = () => <DefaultLayout section={'Project'}>

    <div>

        <Header modifier={'header--project'} />

        <div class="project-hero">
            <div class="project-hero__container">
                <div class="project-hero__content">
                    <h1 class="project-hero__heading">Interstate</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        {/* <ul class="project-hero__credits">
                            <li class="project-hero__credits-item">Product and model photography <span>Matt Beech</span></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>

        <BlockDouble modifier={''} image1={'/static/img/interstate/constellations.jpg'} image2={'/static/img/interstate/keeps-me-alive.jpg'}/> 


    </div>


</DefaultLayout>;

export default Project;