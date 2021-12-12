import { h } from 'preact';

const BlockTriple = ({ modifier, figure1modifier, figure2modifier, figure3modifier, image1, image2, image3 }) => <div class={`block-triple ${modifier ? `${modifier}` : ''}`}>
{
    <div class="block-triple__container">
        <figure class={`block-triple__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
            <img class="block-triple__image" src={image1}></img>
        </figure>
        <figure class={`block-triple__figure ${figure2modifier ? `${figure2modifier}` : ''}`}>
            <img class="block-triple__image" src={image2}></img>
        </figure>
        <figure class={`block-triple__figure ${figure3modifier ? `${figure3modifier}` : ''}`}>
            <img class="block-triple__image" src={image3}></img>
        </figure>
    </div>
}
</div>;

export default BlockTriple;