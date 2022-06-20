import { h } from 'preact';

const BlockImageLeft = ({ modifier, figure1modifier, image1, alt1, children }) => <div class={`block-double block-double--image-left ${modifier ? `${modifier}` : ''}`}>
{
    <div class="block-double__container">
        <figure class={`block-double__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
            <img class="block-double__image" src={image1} alt={alt1}></img>
        </figure>
        <div class="block-double__content">
            <div class="block-double__content-container">
                {children}
            </div>
        </div>
    </div>
}
</div>;

export default BlockImageLeft;