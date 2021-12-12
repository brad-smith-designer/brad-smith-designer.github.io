import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockSingle from '../../components/block-single';
import BlockDouble from '../../components/block-double';
import BlockTriple from '../../components/block-triple';
import BlockQuadruple from '../../components/block-quadruple';


export const title = 'Glasgow Life';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const Project = () => <DefaultLayout section={'Project'}>

    <div>

        <div class="project-hero">
            <div class="project-hero__container">
                <div class="project-hero__content">
                    {/* <a href="../" class="back-link">Back</a> */}
                    <h1 class="project-hero__heading">Glasgow Life</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>Glasgow Life were refreshing their existing site, with a focus on removing duplicate content, improving accessibility, and simplifying the experience overall.</p>
                            <p>Whilst participating in a series of workshops I produced some rough sketches to share with the rest of the team and the client.</p>  
                        </div>
                        <dl class="project-hero__credits">
                            <dt>Agency</dt>
                            <dd>StormID</dd>
                            <dt>Client</dt>
                            <dd>Glasgow Life</dd>
                            <dt>Creative Director</dt>
                            <dd>Jason Kennedy</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        

        {/* <BlockSingle modifier={' block-single--medium block-single--tablet-landscape'} image={'/static/img/edinburgh-castle/home-1.jpg'}/>  */}

        {/* <BlockDouble modifier={'block-double--desktop-mobile'} image1={'/static/img/edinburgh-castle/home-1.jpg'} image2={'/static/img/edinburgh-castle/mobile-home.jpg'}/>  */}

        <BlockQuadruple modifier={''} image1={'/static/img/glasgow-life/venue-sketch.jpg'} image2={'/static/img/glasgow-life/venue-wireframe.png'} image3={'/static/img/glasgow-life/venue-screenshot.png'} image4={'/static/img/glasgow-life/venue-live.png'}/> 

        {/* <div class="scroller-tablet">
            <div class="scroller-tablet__device">
                <div class="scroller-tablet__figure">
                    <img src="/static/img/edinburgh-castle/tour.png" class="scroller-tablet__image"/>
                </div>
            </div>
        </div> */}

        <div class="block-double block-double--tablet-content">
            <div class="block-double__container">
                <figure class="block-double__figure">
                    <img class="block-double__image" src='/static/img/glasgow-life/whats-on-tablet.png'></img>
                </figure>
                <figure class="block-double__figure">
                    <img class="block-double__image" src='/static/img/glasgow-life/card-hover.gif'></img>
                </figure>
            </div>
        </div>

        <div class="block-double block-double--content-tablet">
            <div class="block-double__container">
                <figure class="block-double__figure">
                    <img class="block-double__image" src='/static/img/glasgow-life/logo-transform.gif'></img>
                </figure>
                <figure class="block-double__figure">
                    <img class="block-double__image" src='/static/img/glasgow-life/whats-on-tablet.png'></img>
                </figure>
            </div>
        </div>





        {/* <BlockQuadruple modifier={'block-quadruple--phones'} image1={'/static/img/edinburgh-castle/mobile-home.jpg'} image2={'/static/img/edinburgh-castle/mobile-menu.jpg'} image3={'/static/img/edinburgh-castle/mobile-itineraries.jpg'} image4={'/static/img/edinburgh-castle/mobile-explore.jpg'}/>  */}

        {/* <BlockSingle modifier={'block-single--full'} image={'/static/img/edinburgh-castle/elements.png'}/>  */}


    </div>


</DefaultLayout>;

export default Project;