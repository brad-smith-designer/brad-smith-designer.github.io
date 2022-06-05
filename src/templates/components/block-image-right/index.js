import { h } from 'preact';

const BlockImageRight = ({ modifier, figure1modifier, image1, alt1, title, children }) => <div class={`block-double block-double--image-right ${modifier ? `${modifier}` : ''}`}>
{
    <div class="block-double__container">
        <figure class={`block-double__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
            <img class="block-double__image" src={image1} alt={alt1}></img>
        </figure>
        <div class="block-double__content">
            <div class="block-double__content-container">
                <h2 class="block-double__title">{title}</h2>
                {children}
            </div>
        </div>
    </div>
}
</div>;

export default BlockImageRight;