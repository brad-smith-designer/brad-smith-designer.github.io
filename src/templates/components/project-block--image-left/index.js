import { h } from 'preact';

const ProjectBlock = ({ modifier, link, image, title }) => <div class={`project-block ${modifier ? `${modifier}` : ''}`}>
{
    <div class="project-block__container">
        <div class="project-block__image-container">
            <a href={link} class="project-block__link--image" aria-hidden="true" tabindex="-1">
                <img class="project-block__image" src={image}></img>
            </a>
        </div>
        <div class="project-block__content">
            <a href={link} class="project-block__link--title">
                <h2 class="project-block__title">{title}</h2>
            </a>
        </div>
    </div>
}
</div>;

export default ProjectBlock;