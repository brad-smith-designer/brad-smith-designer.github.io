import { h } from 'preact';

const Footer = ({ children }) => <footer class="footer">

    <div class="wrap">

        <div class="footer__container">
            <div class="js-scroll-point footer__contact">
                <p>To see more of my work or discuss opportunities, drop me a line: <a href="mailto:bradley0612@googlemail.com" class="footer__social-link text-button" target="_blank"><span>bradley0612@googlemail.com</span></a></p>
            </div>
            <div class="js-scroll-point footer__social">
                <a href="https://www.linkedin.com/in/brad-smith-88124955/" class="footer__social-link text-button" target="_blank"><span>LinkedIn</span></a>
                <a href="https://twitter.com/BRAD___SMITH" class="footer__social-link text-button" target="_blank"><span>X (formally Twitter)</span></a>
                <a href="https://www.instagram.com/bradderaders/" class="footer__social-link text-button" target="_blank"><span>Instagram</span></a>

            </div>
        </div>

    </div>
</footer>;

export default Footer;