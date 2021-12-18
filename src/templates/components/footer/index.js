import { h } from 'preact';

const Footer = ({ children }) => <footer class="footer">

    <div class="footer__container">
        <div class="footer__contact">
            <p>To hear about more of my work or discuss opportunities, drop me a line: <a href="mailto:bradley0612@googlemail.com" class="footer__social-link" target="_blank">bradley0612@googlemail.com</a></p>
        </div>
        <div class="footer__social">
            <a href="https://www.linkedin.com/in/brad-smith-88124955/" class="footer__social-link" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/BRAD___SMITH" class="footer__social-link" target="_blank">Twitter</a>
        </div>
    </div>
</footer>;

export default Footer;