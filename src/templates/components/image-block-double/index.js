import { h } from 'preact';

const ImageBlockDouble = ({ modifier, image1, image2 }) => <div class={`image-block-double ${modifier ? `${modifier}` : ''}`}>
{
        <div class="image-block-double__container">
            <img class="image-block-double__image" src={image1}></img>
            <img class="image-block-double__image" src={image2}></img>
        </div>
}
</div>;

export default ImageBlockDouble;