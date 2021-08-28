import { h } from 'preact';
import DefaultLayout from '../../layouts/default';
import Header from '../../components/header';


export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout section={'Home'}>

    <div>
        <div class="home-hero">
            <div class="wrap">
                <div class="home-hero__content">
                    <h1 class="home-hero__heading">Digital design and art direction.</h1>
                </div>
            </div>
        </div>

        <div class="project-block">
            <div class="wrap">
                <div class="project-block__image">

                </div>
                <div class="project-block__content">
                    <a href="#" class="project-block__link">
                        <h2>Project title goes here</h2>
                    </a>
                </div>
            </div>
        </div>

    </div>


</DefaultLayout>;

export default HomePage;