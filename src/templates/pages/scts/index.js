import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockFull from '../../components/block-full';
import BlockSingle from '../../components/block-single';
import BlockDouble from '../../components/block-double';
import BlockTriple from '../../components/block-triple';
import BlockQuadruple from '../../components/block-quadruple';


export const title = 'Scottish Courts and Tribunals Service';

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
                    <h1 class="project-hero__heading">Scottish Courts and Tribunals Service</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>An online system to collect and process expenses claims, replacing the old paper form method.</p>
                            <p>I designed a basic component library and UI kit alongside frontend developer Sarah Richards, to help build a suite of online services to save the client money, and each claimant time and frustration.</p>
                        </div>
                        <dl class="project-hero__credits">
                            <dt>Agency</dt>
                            <dd>StormID</dd>
                            <dt>Client</dt>
                            <dd>Scottish Courts and Tribunals Service</dd>
                            <dt>Creative Director</dt>
                            <dd>Jason Kennedy</dd>
                            <dt>Frontend Developer</dt>
                            <dd>Sarah Richards</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <BlockDouble figure1modifier={'block-double__figure--full'} figure2modifier={'block-double__figure--full'} image1={'/static/img/scts/components-1.png'} image2={'/static/img/scts/components-2.png'} alt1={'Checkbox component states.'} alt2={'Text input component states.'}/> 
        
        <BlockFull figure1modifier={''} image={'/static/img/scts/components-4.png'} alt={"Design tokens like colours, font weights, font sizes, and spacers."}/> 

        <BlockFull figure1modifier={''} image={'/static/img/scts/components-5.png'} alt={"Variations on checkboxes, radio buttons, and text inputs. File uploader states and button states."}/> 

        <div class="js-scroll-point block-content">
            <div class="block-content__container">
                <h2>Claim form</h2>
                <p>The main user-facing output was the online form for submitting expense claims.</p>
                <p>Going from a paper form to an online system was a big step, which required careful iteration and many user interviews.</p>
                <p>The end result for phase 1 shown here is the first live version of the form. I took care to ensure the form only asks one question per view, and uses the simplest language possible. </p>

            </div>
        </div>

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/scts/claim-phone-1.png'} image2={'/static/img/scts/claim-phone-2.png'} alt1={'Selecting journey for jury service or tribunal hearings.'} alt2={'Checkinh your tribunal.'}/> 
    
        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/desktop-1.png'} alt={'Loss of earnings claim.'}/> 

        <BlockDouble figure1modifier={'block-double__figure--full'} figure2modifier={'block-double__figure--full'} image1={'/static/img/scts/components-6.1.png'} image2={'/static/img/scts/components-6.2.png'} alt1={'Admin components for claim lists, notes, and search inputs.'} alt2={'Admin component states for claim lists.'}/> 
        
        <div class="js-scroll-point block-content">
            <div class="block-content__container">
                <h2>Admin interface</h2>
                <p>For the processing of claims there was a need for an admin interface. This borrows from the same component library as the claim service, with the addition of certain admin-specific patterns.</p>
                <p>The goal was to allow a large number of claims to be quickly understood, accepted, challenged and passed onto other staff members where necessary.</p>

            </div>
        </div>
       
        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/filter-scroll.gif'} alt={'Admin claim list filters'}/> 

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/claim-detail.png'} alt={'Admin claim detail.'}/> 

        {/* <div class="block-content">
            <div class="block-content__container">
                <h2>Good bits</h2>
                <ul class="list--positive">
                    <li>Great project team</li>
                    <li>Focus on testing our ideas with users</li>
                    <li>Open-minded client</li>
                </ul>
                <h2>Not so good bits</h2>
                <ul class="list--negative">
                    <li>Inability to properly affect policy change with the client</li>
                    <li>Project false starts</li>
                </ul>
            </div>
        </div> */}

    <div class="projects projects--extra">
        <ul class="projects__list">
            <li class="projects__list-item">
                <a href="/edinburgh-castle" class="projects__list-item-trigger">
                    <span class="projects__list-item-year">2018</span>
                    <h2 class="projects__list-item-title">Edinburgh Castle</h2>
                </a>
            </li>
        </ul>
    </div>



    </div>


</DefaultLayout>;

export default Project;