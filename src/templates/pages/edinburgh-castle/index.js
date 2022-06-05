import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockFull from '../../components/block-full';
import BlockSingle from '../../components/block-single';
import BlockDouble from '../../components/block-double';
import BlockTriple from '../../components/block-triple';
import BlockQuadruple from '../../components/block-quadruple';


export const title = 'Edinburgh Castle';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const Project = () => <DefaultLayout section={'Project'}>

    <div>

        <div class="project-hero">
            <div class="project-hero__container">
                <div class="project-hero__content">
                    <h1 class="project-hero__heading">Edinburgh Castle</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>At StormID I was tasked with leading the design for the new marketing website for the popular tourist destination, Edinburgh Castle. </p>   
                            <p>Particular attention was paid to the visit section to allow users to quickly find information like opening times, ticket prices, and how to get there.</p>
                            <p>Whilst I kept to the existing colour scheme of white and red, some of the castle's more immersive experiences are treated in a darker, more exclusive feeling colour scheme. Typography was borrowed from the parent organisation Historic Environment Scotland.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/edinburgh-castle/home-1.jpg'} alt={'Homepage on tablet or small desktop.'}/> 

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/edinburgh-castle/mobile-home.jpg'} image2={'/static/img/edinburgh-castle/mobile-menu.jpg'} alt1={'Homepage on mobile.'} alt2={'Navigation on mobile.'}/> 

        

        <BlockFull image={'/static/img/edinburgh-castle/elements.png'} alt={'Various dark-theme UI elements.'}/> 

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/edinburgh-castle/mobile-itineraries.jpg'} image2={'/static/img/edinburgh-castle/mobile-explore.jpg'} alt1={'Itineraries on mobile.'} alt2={'Castle highlights on mobile.'}/> 

        <BlockFull image={'/static/img/edinburgh-castle/find-your-way.png'} alt={'A full-width image panel on desktop.'}/> 

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/edinburgh-castle/food-and-drink.png'} alt={'An image panel for food and drink at the castle.'}/> 




    </div>


</DefaultLayout>;

export default Project;