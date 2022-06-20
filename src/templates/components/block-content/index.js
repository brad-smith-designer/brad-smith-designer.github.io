import { h } from 'preact';

const BlockContent = ({children}) => <div class="block-content">
    <div class="block-content__container">
        {children}
    </div>
</div>;

export default BlockContent;