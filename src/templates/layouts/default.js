import { h } from 'preact';
import Skip from '../components/skip';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

const Default = ({ children, section }) => <body>
    <Header modifier={'header--home'} /> 

        <Skip />
        {/* <ExampleNavigation ariaLabel={'Main navigation'}>
            <ExampleNavigationItem href="/" active={section === 'Home'}>Home</ExampleNavigationItem>
        </ExampleNavigation> */}
    <Main>
        { children }
    </Main>
    <Footer />
</body>;

export default Default;