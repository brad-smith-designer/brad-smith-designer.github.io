import { h } from 'preact';

const BlockSingle = ({ modifier, figure1modifier, image, alt, caption }) => <div class={`block-single ${modifier ? `${modifier}` : ''}`}>
{
        <div class="block-single__container">
            <figure class={`block-single__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
                <img class="block-single__image" src={image} alt={alt}></img>
                <figcaption class="block-single__caption"><span>{caption}</span></figcaption>
            </figure>
        </div>
}
</div>;

export default BlockSingle;