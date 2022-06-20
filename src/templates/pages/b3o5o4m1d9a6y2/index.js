import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';
import BlockFull from '../../components/block-full';
import BlockContent from '../../components/block-content';
import BlockSingle from '../../components/block-single';
import BlockDouble from '../../components/block-double';
import BlockImageLeft from '../../components/block-image-left';
import BlockImageRight from '../../components/block-image-right';
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
                    <h1 class="project-hero__heading">Boomday</h1>
                    <div class="project-hero__detail">
                        <div class="project-hero__description">
                            <p>Proof of concept for a fitness oriented social media app.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BlockContent>
            <h2>The idea and the brief</h2>
            <p>Boomday was thought up to appeal to a subset of social media users who predominently post fitness, sports and gym-based content. It would also be video only.</p>
            <p>The founder approached us to develop an early iteration of the idea. This would start with a branding exersise, followed by some idea generation for the app, and culminate in a live Beta with active users. This would in theory spark interest from investors who could take it to the next stage.</p>  
            
            <h2>A hypothesis for user needs</h2>
            <p>This project was unusual for me because there was no initial research to work with, just desk research to learn about the space. Most of what we knew about the potential users was either assumed, or relayed to us from the founder.</p>
            <p>We understood that many users would value the ability to build their brand and progress their careers through the sharing of content.</p>
            <h3>Gym-focussed content creators</h3>
            <p>These people would make up the largest portion of users. Mainly fitness enthusiasts, regular gym-goers who share their workouts, and content creators who may also run YouTube channels to monetise their content. Since they largely lack a platform specialised for their subject matter (Strava notwithstanding), they would value being early adopters. They need to be able to build their brand, gain followers and engagement, and follow their favourite athletes.</p>
            <h3>Athletes</h3>
            <p>These are people who are used to posting content regularly, but who mainly focus on their professional journey. Their profile would need to include a title such as "Swiss cyclist" or "Trek Factory Racing". They would like a way to associate themselves with an offial team or country.</p>
            <h3>Fitness professionals</h3>
            <p>These are the people who make a living by providing the various services that surround professional sports. Coaches, personal trainers, therapists. Their main consideration is how they can connect with new clients through Boomday, and turn those connections into new business.</p>

            <h2>Collaboration</h2>
            <p>The design team was made up of myself and another UI Designer who took over later on, a User Researcher, and a Content Designer. The wider team are mentioned further down.</p>
            <p>I personally focussed on delivering the following outputs:</p>
            <ul>
                <li>Multiple branding options</li>
                <li>Initial design of the app and visual language</li>  
                <li>Light-touch UI documentation</li> 
            </ul>  
            <p>My most valuable contribution was a flat clickable prototype, made in Adobe XD, demonstrating the MVP based on our assumptions so far. These early screens set much of the art direction for the subsequent work.</p>

        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--narrow'} image={'/static/img/boomday/profile-sketches.png'} alt={"Early sketches of the profile page."}/> 


        <BlockContent>
            <h2>Profiles</h2>
            <p>The first area I tackled was the profile. This would work as a test environment for some of the global UI decisions such as font, colour, nav, and scales.</p>
            <p>Some concepts came and went during these quick iterations, such as the 'fan' feature which was replaced by a more universally understood 'follow'. During this time I was able to quickly sketch out new ideas and review with the team. Another feature which was left behind for a later release was the optional team emblem, which was deemed unnecessary for MVP. </p>
            <p>Challenging ideas early on and not being precious about features was hugely important. </p>
        </BlockContent>

        <BlockFull image={'/static/img/boomday/profiles.png'} alt={"Iterations of the profile page showing Sir Chris Hoy and various profile-specific features."}/> 

        <BlockContent>
            <h2>Finding the right font</h2>
            <p>A number of fonts were trialled for the UI, including (from left ro right) Assistant, Catamaran, Freight Sans, Karla, and Work Sans. I settled on Freight Sans Pro for its readability, large x-height, and solid but friendly feel. Having these fonts tested in-situ, on an early iteration of the profile page, helped evaluate them on an real device.</p>
        </BlockContent>

        <BlockFull image={'/static/img/boomday/fonts.png'} alt={"Versions of a profile page testing 5 different sans-serif fonts."}/> 

        <BlockImageRight image1={'/static/img/boomday/icons.png'} alt1 ={"A selection of 15 custom outline icons for nav and UI interations."}>
            <h2>Custom icons</h2>
            <p>I designed a set of simple icons for use in the UI, optically adjudsted around a base of 24 pixels and using a constant stroke width.</p>
        </BlockImageRight> 

        <BlockImageLeft image1={'/static/img/boomday/type-scale.png'} alt1={"A example of the type scale showing 10 sizes from 12 pixels to 51 pixels."}>
            <h2>Type scale</h2>
            <p>I never design anything without a consistent type scale.</p>
        </BlockImageLeft> 

        <BlockImageRight figure1modifier={'block-double__figure--phone'} image1={'/static/img/boomday/feed.png'} alt1={"A phone screen showing the feed page, with challenges at the top and a feed of video cards which scrolls downwards"}> 
            <h2>Feed</h2>
            <p>The feed followed a pattern familiar to anyone who's used Instagram. The main component was the video card, which would display an auto-playing but silent preview of the video. However, in a pattern more similar to YouTube, tapping a video card opened a more in-depth video page.</p>
            <p>Featured content would use a slightly taller version of the card with a 'featured' label to be explicit, and with the sport and aspect displayed as metadata tags.</p>
            <p>One feature added later on was advertising. These would use the same card component with a few changes, making clear that the content was 'sponsored', and linking off to a separate browser or tab.</p>
        </BlockImageRight> 

        <BlockFull image={'/static/img/boomday/cards.png'} alt={"3 examples of cards. Normal with video image, title, time, and reactions. Featured with the same but more height and detail. Advert with less detail, less height and a sponsored label."}/> 

        <BlockContent>
            <h2>Explore and search</h2>
            <p>To allow users to find new profiles and content, an explore section was included. This combined sport-specific areas, showing a grid of popular or 'booming' videos, with a search and filter function shown here.</p>
            <p>For filtering I used a horizontally scrolling list of pills, coded as checkboxes, using the white colour as a consistent active state. Since this was untested I would assume this would need further iteration. </p>
        </BlockContent>
        

        <BlockFull figure1modifier={''} image={'/static/img/boomday/filters-2.png'} alt={"Paper sketches of filtering, with eventual UI of filtering and search. Search shows examples like downhill mountain biking, or 10 minute workout. The last image shows the video detail screen with portrait video."}/> 

        <BlockContent>
            <h2>Finding a service</h2>
            <p>One thing we assumed users would need is the ability to find professional services for specific sports. It would allow athletes to find local services, within their specialisms and with knowledge of their unique needs, which enable them to compete at their best. This was a key differentiating factor between Boomday and other social apps. </p>
            <p>Fitness professionals would need to show information about their business, so I allowed a dedicated profile page for those. A potential client could message them through the app, view their list of services, and contact them multiple ways.</p>
        </BlockContent>

        <BlockFull image={'/static/img/boomday/services-mobile.png'} alt={"Early sketch for service search, with eventual UI of that area. Example shows a search for a football physiotherapist via two dropdown inputs, a map and list of local results, and the profile page of an example football physiotherapist with location and contact options."}/> 

        <BlockContent>
            <h2>A web app</h2>
            <p>Boomday would inlude a web app, which meant that every pattern, component and content type would need adapting to another format.</p>
            <p>With the desktop view below I made a small change to the IA compared to mobile, including Services instead of Messages. This was used as a conversation starter for the client, for us consider what should be priority. </p>
        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--desktop'} image={'/static/img/boomday/services-desktop.png'} alt={'A desktop version of the services search, showing a large map to the left and the search form and results to the right. Example shows a search for a football physiotherapist.'}/> 

        <BlockSingle figure1modifier={'block-single__figure--narrow'} image={'/static/img/boomday/featured.png'} alt={"A featured tile for the desktop app, with more width and image real estate."}/> 


        <BlockContent>
            <h2>Branding</h2>
            <p>Although my role here was mostly as a UI designer, I do have a background in graphic design, and in particular branding. Because of this I was allowed to develop a few options for the client to consider as their initial 'launch' brand.</p>
            <p>The concepts shown here are only a few of the ideas I mocked up. They offer the client a few different approaches, based on the tone they want to achieve (which wasn't fully decided yet). We could go softer and more approachable, or harder-edged.</p>
            <p>My personal recommendation was for the larger one further down, with the broken-up, distorted type and gritty imagery. This captured the essence of the subject matter - the hard work, sweat, and rewards - whilst making use of the 'boom' exclamation used playfully throughout the product.</p>
        </BlockContent>

        <BlockSingle figure1modifier={'block-single__figure--narrow'} image={'/static/img/boomday/brand-1.jpg'} alt={"Branding options as shown to the client."}/> 

        <BlockDouble figure1modifier={'block-double__figure--full'} figure2modifier={'block-double__figure--full'} image1={'/static/img/boomday/brand-phone.jpg'} image2={'/static/img/boomday/brand-ad.jpg'} alt1={'A phone image of the preferred branding option.'} alt2={'A bus stop advert showing the preferred branding option.'}/> 

        <BlockContent>
            <h2>To conclude</h2>
            <p>Boomday was a unique opportunity to imagine an all-new social media app, and design an experience from the ground up.</p>
            <p>I learned a lot, like dealing with the realities of scope-creep, and I found a new understanding for when to trust the MVP principle, and when not to. </p> 
            <p>The outcome for Boomday was that it never made it to market. The challenge was just too great for a small startup team, and the project burned through too much of the budget in the early stages. Despite this, I value my time spent on it and would like to work on something similar again one day.</p>
        </BlockContent>

    </div>


</DefaultLayout>;

export default Project;