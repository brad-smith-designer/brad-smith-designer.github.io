import { h } from 'preact';

const BlockSingle = ({ modifier, figure1modifier, image }) => <div class={`block-single ${modifier ? `${modifier}` : ''}`}>
{
        <div class="block-single__container">
            <figure class={`block-single__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
                <img class="block-single__image" src={image}></img>
            </figure>
        </div>
}
</div>;

export default BlockSingle;