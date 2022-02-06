import { h } from 'preact';

const BlockFull = ({ modifier, image, alt }) => <div class="block-full">
{    
    <figure class="block-full__figure">
        <img class="block-full__image" src={image} alt={alt}></img>
    </figure>
}
</div>;

export default BlockFull;