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


export const title = 'Tikkurila';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const Project = () => <DefaultLayout section={'Project'}>

    <div>

        <div class="project-hero">
            <div class="project-hero__container">
                <div class="project-hero__content">
                    <h1 class="project-hero__heading">Tikkurila</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>A revised e-commerce site to help break into a new market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BlockContent>
            <h2>Who are Tikkurila?</h2>
            <p>Tikkurila are an established paint brand in their home country of Finland. Whilst they have a presence in the UK, it is almost entirely made up of tradespeople. </p>
            <p>We were approached to help them pivot towards DIY customers in the UK, without completely abandoning their existing professional customer base.</p>
            
            <h2>Our task</h2>
            <p>We would redesign key parts of their e-commerce site to better cater for DIY customers, and hand off to a separate team to handle the build. I had the following limitations from the start:</p>
            <ul>
                <li>The checkout experience was out of scope</li>
                <li>Product naming conventions could not be altered</li>
                <li>Product photography was limited with no budget to commission more</li>
                <li>Timescales were extremely tight</li>
            </ul>
            <p>Whilst these constraints would potentially limit the success of the project, it did leave room to make some quick wins in other areas. </p>
        </BlockContent>  


        <BlockContent>         
            <h2>Finding the problems</h2>
            <p>Desk research revealed very quickly that the existing site was almost impossible to use for DIY customers. The following things contributed to that:</p>

            <h3>The old site was split across 3 sections</h3>
            <p>The sections were titled 'for everyone', 'for professionals' and 'for industry', the idea being that those sections had content specific to those user groups, but with some products shared between them.</p>
            <p>The problem with this was that, as a DIY customer on the section titled 'for everyone', you could click on a product that would take you to the 'for professionals' section with no apparent reason. Suddenly all prices excluded tax and the terminology used was more technical. As an online experience it was pretty disorientating.</p>
            <p>Additionally, this split made content management more of a headache with lots of duplicate content.</p>
            <p>My proposal was to abolish this split and have a solution that was flexible enough to cater for everyone. A log in area for professional customers would take care of trade-specific pricing.</p>

            <h3>Browsing colours was difficult</h3>
            <p>Competitive analysis with successful paint brands in the UK gave us some insight to customer habits.</p>
            <p>Most people buying paint were concerned primarily with colour, then finish, then specific surfaces like wood or masonry.</p>
            <p>The old Tikkurila site was backwards, in that it prioritised their specialist products for certain finishes and surfaces. The user, having selected a product, would then have to use a clunky colour picker to get the right shade.</p>
            <p>We would focus on reversing this to prioritise colour.</p>
            
            <h3>Inspirational content was poor</h3>
            <p>Other sites have a good range of articles and guides for exploring colours, trends and techniques. Whilst the old Tikkurila site made a small effort in this regard, broader and more visual content was required for it to be consiered inspiring.</p>
            
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/tikkurila/old-site-details.png'} alt={"Some detail of the complicated old site, including 3-way site split and bewildering colour choice."} caption={'Complicated nav, clunky colour picker, and bewildering colour choice.'}/> 


        <BlockContent>         
            <h2>Deciding what to fix</h2>
            <p>A remote workshop allowed me to take the client through some analysis of their old site, and compare it to the sites of some competitors.</p>
            <p>I used a Miro board to show direct comparisons, introduce the outcomes of our desk research, and capture thoughts and suggestions which would be useful later on.</p>
            <p>The discussion which resulted was hugely beneficial, mainly to bring the client onboard with our thinking. Our shared vision was important to ensure the project had a minimum of design feedback, and timelines could be met.</p>
            <p>During the workshop, the user researcher developed 4 user profiles to capture the main audience for the site. These were characterised as:</p>
            <ul>
                <li>First time home owner</li>
                <li>Follower of colour trends</li>
                <li>'Pro-sumer'</li>
                <li>Professional decorator</li>
            </ul>
        </BlockContent>  

        {/* <BlockSingle figure1modifier={'block-single__figure--narrow'} image={'/static/img/tikkurila/user-profiles.png'} alt={"A screenshot of the 4 user profiles used during our remote workship in Miro."} caption={'A screenshot of user profiles in Miro.'}/>  */}

        <BlockContent>         
            <h2>Comparisons with the leading paint retailers</h2>
            <p>A simple exercise was to capture the colour selection to add-to-cart journey of the main competitors, and directly compare it in a visual way to the Tikkurila site.</p>
            <p>This way the client could see the problem clearly - that users weren't given the chance to explore colours in anywhere near enough detail to make a purchase decision.</p>
        </BlockContent>  
        
        <BlockFull figure1modifier={''} image={'/static/img/tikkurila/comparisons.png'} alt={"Comparisons of key competitors colour to purchase journeys with side-by-side screenshots."} caption={'Comparisons of key competitor sites during a workshop.'}/> 



        <BlockContent>
            <h2>My plan</h2>            
            <ul>
                <li>Re-imagine the PDPs with what I know already</li>
                <li>Work backwards from PDPs, covering PLPs and any other content types required for inspiration </li>
                <li>Create a clickable prototype in Adobe XD for mobile, tablet, and desktop</li>
                <li>Test with users, get feedback, and refine.</li>
                <li>Regular design reviews with client, our SEO team, and wider project team.</li>
                <li>Handover to external development team.</li>
            </ul>
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/tikkurila/add-to-cart-journey-old.png'} alt={"The add-to-cart journey of the old site shown in 5 mobile screenshots."} caption={'The add-to-cart journey of the old site.'}/> 


        <BlockContent>
            <h2>A colour-first approach</h2> 
            <p>The old site (above) required users to find a paint amongst a bewildering array of Swedish-named specialist products, then select a colour with almost no indication of how the colour looks in real life.</p>
            <p>I tackled this by treating colours like products, and allowing the colours their own space to breathe.</p>
            <p>This allowed a more logical colour-first approach to shopping (below), where the user settles on a colour, can see the colour in-situ, choose a paint finish, choose a quantity of paint, and add to basket. </p>
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/tikkurila/add-to-cart-journey-new.png'} alt={"The new product detail page, on mobile, showing the steps of a simplified add-to-cart journey."} caption={'The add-to-cart journey of the new site.'}/> 

        <BlockImageRight figure1modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/paint-calculator.png'} alt1={"The paint calculator shown on mobile."}>
            <h2>A simple paint estimator</h2>
            <p>How much paint do I need? The old site had a hidiously complex paint calculator which required you to measure your walls, the doors and the windows. This one is much easier to use.</p>
        </BlockImageRight> 

        <BlockImageLeft figure1modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/nav-mobile.png'} alt1={"The simplified navigation shown on mobile."}>
            <h2>A new IA</h2>
            <p>Instead of the site being split 3 ways, now we have all of the content accessible to the same users on the same site. A section for professionals makes sure there is still somewhere to advertise to the trades. Existing trade customers are given a log in area to handle their unique order requirements.</p>
        </BlockImageLeft> 

        <BlockContent>
            <h2>Guiding customers to the right colour</h2> 
            <p>Assuming most users didn't know what specific colour they wanted before visiting the site, inspirational or guide content was very important. What's colours are on trend? What colour goes with what?</p>
        </BlockContent>

        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/color-lp-mobile.png'} image2={'/static/img/tikkurila/color-lp-mobile-2.png'} alt1={'The colour landing page for blue, shown on mobile, with a large hero image with in-situ blue paint in a bedroom.'} alt2={'The colour landing page for blue, shown on mobile, with this seasons most calming hue alongside in-situ images.'}/> 

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/tikkurila/color-lp-desktop.png'} alt={'The colour landing page for blue, shown on desktop, featuring a blue called Atlantis alongside in-situ imagery.'}/> 

        <BlockImageRight figure1modifier={'block-double__figure--small'} image1={'/static/img/tikkurila/prototype.png'} alt1={"A screenshot showing the extent of my small prototype in Adobe XD."}>
            <h2>A clickable prototype</h2>
            <p>I designed the key user flows for mobile, tablet and desktop, with enough detail to demonstrate the full navigation, and to show interctions like filtering and the add-to-cart journey.</p>
        </BlockImageRight> 


        <BlockContent>         
            <h2>User testing</h2>
            <p>The user researcher found <a href="https://www.nngroup.com/articles/5-test-users-qual-quant/#:~:text=In%20general%2C%20it's%20a%20good,ve%20found%20with%205%20users." target="_blank">6 participants</a> to test our prototype.</p>
            <p>Most participants chose to use desktop, oweing to the slightly unusual (to them) 'test' situation, and we were able to observe their screens whilst interacting with the new design.</p>
            <p>Without going into too much detail, the interviews and tests:</p>
            <ul>    
                <li>Validated our thinking that colour-first was preferable as a journey, as it reflects how the DIY users described their process</li>
                <li>Suggested a prominent log in area for professional users would be very useful, since it is the first thing those users do when visiting the site</li>
                <li>Highlighted that DIY users appreciate the inpirational content, specifically the focus on in-situ colour imagery</li>
            </ul>
            <p>The client was able to observe a few of the sessions, further allowing them to get behind our approach.</p>
            <p>As well as the wins, these sessions threw up some areas of the UI that could be refined. For example, the method of selecting a paint finish had a small label which was initially designed to look like a sliding scale. The problem was it looked interactive, when in fact it wasn't. I removed it for a clearer alternative.</p>
        </BlockContent>

        <BlockDouble figure1modifier={'block-double__figure--small'} figure2modifier={'block-double__figure--small'} image1={'/static/img/tikkurila/finishes-1.png'} image2={'/static/img/tikkurila/finishes-2.png'} alt1={'The finish selector cards before user feedback, showing a faux-slider label design.'} alt2={'The finish selector cards after user feedback, showing a more explicit label design.'}/> 


        <BlockImageLeft figure1modifier={'block-double__figure--small'} image1={'/static/img/tikkurila/versions.jpg'} alt1={"A screenshot showing iterations of the Adobe XD file over a few weeks."}>
            <h2>Iteration</h2>
            <p>The prototype was constantly refined over a few weeks. After each iteration I'd gather the team together to review it, seeking feedback on specific features and facilitating discussions for wider issues. </p>
        </BlockImageLeft> 

        <BlockContent>         
            <h2>A fresher, more spacious UI</h2>
            <p>I made extra effort to open up the UI to achieve a more refined and aspirational look and feel. Spacing is more generous, white space is used, and imagery is given more real estate.</p>
        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/tikkurila/home-desktop.png'} alt={'The homepage, shown on desktop, featuring lots of white space and promotional imagery alongside titles and links to other areas of the site.'}/> 

        
        <BlockImageRight figure1modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/plp-mobile.png'} alt1={"The product listing page, shown on mobile, featuring quick links to filtered pages above the main product list."}>
            <h2>A request from the SEO team</h2>
            <p>As part of efforts to improve the site's SEO performance, I was asked to ensure that PLPs included a series of 'quick links', to pages with pre-applied filters and unique URLs for popular searches. </p>
        </BlockImageRight> 

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/tikkurila/color-lp-desktop-2.png'} alt={'The colour landing page for blue, shown on desktop, featuring inspirational written content and large colour swatches.'}/> 

        <BlockImageLeft figure1modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/article-mobile.png'} alt1={"A how-to article, shown on mobile, featuring small product link cards which can be used mid-content."}>
            <h2>Linking to products mid-content</h2>
            <p>The old site's content suggested the client would value the ability to feature products in the middle of articles, as they're mentioned. From a UX perspective this made sense, so I created a small version of the product card to use in the middle of rich text editors.</p>
        </BlockImageLeft> 
        
        <BlockDouble figure1modifier={'block-double__figure--phone'} figure2modifier={'block-double__figure--phone'} image1={'/static/img/tikkurila/home-mobile.png'} image2={'/static/img/tikkurila/inspiration-mobile.png'} alt1={'The homepage hero, shown on mobile, featuring large in-situ colour imagery and a floating chat button.'} alt2={'The colour landing page for blue, shown on mobile, featuring a popular colour with colour swatch and in-situ imagery, along with colour pairings.'}/> 

        <BlockContent>         
            <h2>Handover</h2>
            <p>Usually I code the complete UI myself. This time however, another agency were reponsible for the full build.</p>
            <p>After making sure the developers had access to Adobe XD, I used it to create a guide for whoever was writing the frontend. I included the measurements and rules I'd want to know if I were translating visuals to code.</p>
        </BlockContent>

        <BlockFull figure1modifier={''} image={'/static/img/tikkurila/guide-1.png'} alt={"An example of one of the components with overlays showing measurements."}/> 

        <BlockDouble figure1modifier={''} figure2modifier={''} image1={'/static/img/tikkurila/tile.png'} image2={'/static/img/tikkurila/guide-2.png'} alt1={'A component breakdown showing the colour swatch with core colour and a textured overlay.'} alt2={'A form input component with overlays showing measurements.'}/> 

        <div class="projects projects--other"> 
            <div class="wrap">
                <div class="projects__container">
                    <ul class="projects__list">
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

    </div>


</DefaultLayout>;

export default Project;