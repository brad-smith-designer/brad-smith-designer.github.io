import { h } from 'preact';

const BlockDouble = ({ modifier, figure1modifier, figure2modifier, image1, image2 }) => <div class={`block-double ${modifier ? `${modifier}` : ''}`}>
{
    <div class="block-double__container">
        <figure class={`block-double__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
            <img class="block-double__image" src={image1}></img>
        </figure>
        <figure class={`block-double__figure ${figure2modifier ? `${figure2modifier}` : ''}`}>
            <img class="block-double__image" src={image2}></img>
        </figure>
    </div>
}
</div>;

export default BlockDouble;