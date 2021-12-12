import { h } from 'preact';

const BlockFull = ({ modifier, image }) => <div class="block-full">
{    
    <figure class="block-full__figure">
        <img class="block-full__image" src={image}></img>
    </figure>
}
</div>;

export default BlockFull;