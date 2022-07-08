import { h } from 'preact';

const BlockFull = ({ modifier, image, alt, caption }) => <div class="block-full">
{    
    <figure class="block-full__figure">
        <img class="block-full__image" src={image} alt={alt}></img>
        <figcaption class="block-full__caption"><span>{caption}</span></figcaption>
    </figure>

}
</div>;

export default BlockFull;