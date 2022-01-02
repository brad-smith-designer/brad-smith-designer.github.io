import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockFull from '../../components/block-full';
import BlockSingle from '../../components/block-single';
import BlockDouble from '../../components/block-double';
import BlockTriple from '../../components/block-triple';
import BlockQuadruple from '../../components/block-quadruple';


export const title = 'Boomday';

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
                    <h1 class="project-hero__heading">Boomday</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p></p>                        
                        </div>
                        <dl class="project-hero__credits">
                            <dt>Agency</dt>
                            <dd></dd>
                            <dt>Client</dt>
                            <dd></dd>
                            <dt>Creative Director</dt>
                            <dd></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/boomday/profile.png'} image2={'/static/img/edinburgh-castle/mobile-menu.jpg'}/> 

        {/* <BlockTriple modifier={'block-triple--phones'} image1={'/static/img/edinburgh-castle/tickets.png'} image2={'/static/img/edinburgh-castle/getting-here.png'} image3={'/static/img/edinburgh-castle/access.png'}/>  */}

        {/* <div class="scroller-tablet">
            <div class="scroller-tablet__device">
                <div class="scroller-tablet__figure">
                    <img src="/static/img/edinburgh-castle/tour.png" class="scroller-tablet__image"/>
                </div>
            </div>
        </div> */}

        <BlockFull image={'/static/img/edinburgh-castle/elements.png'}/> 

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/edinburgh-castle/mobile-itineraries.jpg'} image2={'/static/img/edinburgh-castle/mobile-explore.jpg'}/> 





    </div>


</DefaultLayout>;

export default Project;