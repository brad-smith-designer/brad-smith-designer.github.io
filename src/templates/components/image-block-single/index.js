import { h } from 'preact';

const ImageBlockSingle = ({ modifier, image }) => <div class={`image-block-single ${modifier ? `${modifier}` : ''}`}>
{
        <div class="image-block-single__container">
            <img class="image-block-single__image" src={image}></img>
        </div>
}
</div>;

export default ImageBlockSingle;