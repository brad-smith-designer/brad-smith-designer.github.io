import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockFull from '../../components/block-full';
import BlockSingle from '../../components/block-single';
import BlockContent from '../../components/block-content';
import BlockDouble from '../../components/block-double';
import BlockImageLeft from '../../components/block-image-left';
import BlockImageRight from '../../components/block-image-right';
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
                    <h1 class="project-hero__heading">Scottish Courts and Tribunals Service</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>An online system to collect and process expenses claims.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BlockContent>
            <h2>Understanding the client's world</h2>
            <p>I attended a series of remote workshops with the senior stakeholders and our wider team, to gradually get to know the process for court expenses.</p>
            <p>If you are called to jury duty, or have to attend a tribunal, you can claim back what it cost you to attend court. This could be for travel expenses, food and drink, childcare, or loss of earnings. Some expense caps exist which are set by the government.</p>
            
            <h2>Empathising with users</h2>
            <p>The people claiming for court expenses are usually not here because they want to be. They've often gone through a stressful, traumatic experience with little patience for extra paperwork. Many users are also unfamiliar with the Scottish court system and many of the terms used, adding to their stress.</p>
            
            <h2>The obvious issues</h2>
            <p>In 2020 applying for court expenses still involved a paper form, handed to you in person at court, completed with no errors, and delivered to the SCTS (Scottish Courts and Tribunals Service). If you claimed for loss of earnings, you'd also have to give the form to your manager for their input and approval. Depending on your working pattern and your manager's availablility, this could take some time.</p>
            <p>You would also have to provide proof for miniscule expenses such as bus tickets, which could be as little as £1.80. If you knew to ask for a receipt, and managed to not lose it, you'd have to provide it with your claim to be manually checked. The cost of processing this was often more than the actual claim.</p>
            <p>The paper form meant that, if you had difficulty completing it for whatever reason, you'd have to have someone to help fill it out, or help request an alternative format like braille.</p>
            <p>It was very clear where improvements could be made.</p>

            <h2>What to design</h2>
            <p>We needed a way for people to claim expenses online on a variety of devices, and a way for SCTS staff to manage claims securely and efficiently.</p>
            <p>During discovery we would produce an early prototype of the online expenses form. With this initial prototype we would:</p>
            <ul>
                <li>Visualise some ideas and generate useful discussions</li>
                <li>Validate early assumptions with some user testing</li>
                <li>Get buyin from senior stakeholders outside the project team</li>
            </ul>
            <p>Further refinement of the claim form would come during alpha, with more user testing informing the beta phase and eventual release.</p>
            <p>The admin system would begin to take shape during alpha when we'd have a chance to interview staff members.</p>
            
            <h2>Constraints</h2>
            <p>Like many services this was built on top of old policies which no longer met user expectations. Unfortunately, whilst we could raise issues with policies which caused user friction, we had minimal power to influence change. These constraints included:</p>
            <ul>
                <li>Loss of earnings claims are capped at roughly £70 per day for most claims. That falls below the real earnings of many users, which was a constant source of frustration and meant some would be losing money by attending court. We would have to manage expectations at this stage of the claim form. </li>
                <li>Receipts were required as proof for everything, including for items as little as a bus ticket. Upon challenging this, we developed the concept of low-risk claims which could eventually be processed without manual checking and without receipts. For launch however, the form would require file or image uploads. </li>
                <li>To receive payment, the user couldn't simply enter their card details on the form, owing to the client's inability to store such sentitive data. So upon launch the payment was arranged via an email from a completely separate entity, in this case Natwest bank. I raised numerous concerns over this, mainly about expecting vulnerable users to trust an email from an unknown-to-them bank, and ask them to click a link to provide account information.</li>
            </ul>
            
            <h2>A discovery prototype</h2>
            <p>My main output initially was a clickable prototype. I presented this to the client and their stakeholders through a series of screenshare calls, and since the client had exposure to our process, it was warmly received.</p>
            <p>This method of prototyping allowed us to share with users remotely, and share with those on the client's side who would ultimately decide the future of the project. </p>
        </BlockContent>

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/scts/claim-phone-1.png'} image2={'/static/img/scts/claim-phone-2.png'} alt1={'Selecting journey for jury service or tribunal hearings.'} alt2={'Checking your tribunal.'}/> 

        <BlockContent>
            <h2>Applying the principles of the GOV.UK design system</h2>
            <p>I adopted the layouts and component structures advised by the GOV.UK design system, which is rigourously tested and trusted across the industry.</p>
            <p>The UI styling is a hybrid of that system and my own interpretations of it. The result is a visual language that's formal but not intimidating, with lots of affordance allowed for.</p>
            <p>Some form sections required me to think outside the system and try some new components and patterns. One example of this is the loss of earnings section, which went through several iterations.</p>
        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/desktop-1.png'} alt={'Loss of earnings claim.'}/> 


        <BlockContent>
            <h2>Going further</h2>
            <p>For alpha I built on the previous work by refining some form sections, and covering the complete breadth of the historic paper forms.</p>
            <p>I would also be tasked with starting to think about the admin system, to allow SCTS staff to process claims.</p>
            <p>For the next few months I switched back and forth between the claim form and the admin system, managing my workflow between these two very different use cases.</p>
            <h2>My iterative process</h2>
            <p>My personal process was very simple and looked a little like this:</p>
            <ul class="process">
                <li>Group chat with collaborators via Slack or video call</li>
                <li>Paper sketches for quickness and maximum input from stakeholders</li>
                <li>Some XD screens for select areas to aid decision making</li>
                <li>Flat HTML screens including A/B versions</li>
                <li>Review with team, users, or stakeholders</li>
                <li>Repeat if necessary</li>
            </ul>
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/scts/form-screens.png'} alt={"A variety of screens from the claim form."}/> 

        <BlockContent>
            <h2>Learning from users</h2>
            <p>I attended and assisted with a series of user testing sessions, totaling around 20 participants, for some evaluative research. Mostly the participants were made up of people who had prior experience of the Scottish court expenses system.</p>
            <p>We shared the prototype URL with each participant, who attempted to complete the form whilst sharing their screen with us. The participants used a mix of phones and laptops. I attended the sessions whilst taking notes in Optimal Workshop, which would be analysed and added to a report to share with the wider team. Crucially, this report was also shared with stakeholders, which meant that the client was onboard with our rationalle for future decisions.</p>
            <p>The feedback confirmed many of our assumptions, but also identified areas for improvement. The tricky part was trying to address frustrations with the government's policy whilst not being able to change it. That meant being very explicit in some areas of the form where user friction was most likely to occur, to manage expectations before too much time had been invested by the user.</p>
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/scts/payment-refine.png'} alt={"Iterations of the form section for arranging payment, getting smaller and simpler each time."}/> 

        <BlockContent>
            <h2>The admin system</h2>
            <p>For the processing of claims there was a need for an admin interface. Speaking to admin staff gave us a reasonable idea of their requirements:</p>
            <ul>
                <li>A quick view of claims needing processed by priority</li>
                <li>A list of claims assigned to you to manage workflow</li>
                <li>Easy access to claimant contact details, and be able to message claimants</li>
                <li>The ability to edit claim details for small mistakes</li>
                <li>The option to accept, reject, or refer claims to other staff members</li>
            </ul>
            <p>These were synthesised with the known business requirements which focussed on existing 'four eye check' procedures, and I produced a UI to suit. </p>
            <p>This would in theory allow SCTS staff to access, understand, accept or challenge claims much more quickly, with fewer mistakes than the old paper method. </p>
    
        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/filter-scroll.gif'} alt={'Admin claim list filters'}/> 

        <BlockFull figure1modifier={''} image={'/static/img/scts/admin-lists.png'} alt={"Admin lists of claims with and without a claim selected and associated actions shown."}/> 

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/scts/claim-detail.png'} alt={'A claim detail view of a flagged claim.'}/> 


        

        <BlockContent>
            <h2>A component library for future use</h2>
            <p>Thi service was intended to be the first in a series of similar services, so it made sense to capture the UI components into a library.</p>
            <p>I used Adobe XD to keep a source of truth for every token, component and pattern used, complete with states, variations, pixel measurements and some usage examples. The frontend developer used this to build out the component library in Storybook.</p>
            <p>Below are some snapshots of the XD library.</p>
        </BlockContent>

        <BlockDouble figure1modifier={'block-double__figure--full'} figure2modifier={'block-double__figure--full'} image1={'/static/img/scts/components-1.png'} image2={'/static/img/scts/components-2.png'} alt1={'Checkbox component states.'} alt2={'Text input component states.'}/> 
        
        <BlockFull figure1modifier={''} image={'/static/img/scts/components-4.png'} alt={"Design tokens like colours, font weights, font sizes, and spacers."}/> 

        <BlockFull figure1modifier={''} image={'/static/img/scts/components-5.png'} alt={"Variations on checkboxes, radio buttons, and text inputs. File uploader states and button states."}/> 

       
        <BlockDouble figure1modifier={'block-double__figure--full'} figure2modifier={'block-double__figure--full'} image1={'/static/img/scts/components-6.1.png'} image2={'/static/img/scts/components-6.2.png'} alt1={'Admin components for claim lists, notes, and search inputs.'} alt2={'Admin component states for claim lists.'}/> 
        

        <BlockContent>
            <h2>People I worked with</h2>
            <ul class="credits">
                <li>Sarah Richards, Frontend Developer</li>
                <li>Marie Moyles, User Researcher</li>
                <li>Hannah Kaner, Product Manager / Consultant</li>
                <li>Craig Turpie, Director</li>
                <li>Louise Browne, Project Manager</li>
                <li>Liam Brotchie, Tester</li>
                <li>Developers including Liam Gove, Ashleigh Adams, Kyle Bonallo and John McDowall</li>
            </ul>
        </BlockContent>

        <div class="projects projects--other"> 
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
                            <a href="/b3o5o4m1d9a6y2" class="projects__list-item-trigger">
                                <h2 class="projects__list-item-title"><span class="projects__list-item-year">2018</span><span>Boomday</span></h2>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>



    </div>


</DefaultLayout>;

export default Project;