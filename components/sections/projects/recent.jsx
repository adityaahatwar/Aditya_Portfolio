import Section from '../../structure/section';
import Container from '../../structure/container';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/projects/recent.module.scss';

export default function GitProjects({ repos = [], user }) {
    // Check the type of repos and log for debugging
    console.log('Type of repos:', typeof repos);
    console.log('Is repos an array?', Array.isArray(repos));

    return (
        <Section classProp={css.section}>  
            <Container classProp={css.container} spacing={'verticalXXXLrg'}>
                <h3>My Recent Projects!</h3>
                <section className={css.profile}>
    <span className={css.details}>
        <p>{user.name}</p>
        {user.html_url && (
            <a href={user.html_url} rel="noreferrer" target="_blank">
                {user.html_url} <Icon icon={['far', 'arrow-up-right-from-square']} />
            </a>
        )}
    </span>
</section>
                <div className={css.projects}>
                    {Array.isArray(repos) && repos.length > 0 ? (
                        repos.map(({ name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at }, index) => {
                            const date = new Date(pushed_at).toDateString();
                            return (
                                <article key={index} className={css.project}>
                                    <span className={css.header}>
                                        <a href={html_url} rel="noreferrer" target="_blank">
                                            {name} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                        </a>
                                        <p className={css.homepage}>{homepage}</p>
                                    </span>
                                    <span className={css.descriptionContainer}>
                                        <p className={css.description}>{description}</p>
                                    </span>
                                    <span className={css.details}>
                                        <p><i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}</p>
                                        <p><Icon icon={['fad', 'star']} /> {watchers}</p>
                                        <p><Icon icon={['fad', 'code-branch']} /> {forks_count}</p>
                                        <p className={css.pushedAt}>{date}</p>
                                    </span>
                                    <span className={css.topicsContainer}>
                                        {Array.isArray(topics) && topics.map((e, index) => (
                                            <span key={index} className={css.topics}>
                                                <i className="devicon-github-plain" /> {e}
                                            </span>
                                        ))}
                                    </span>
                                </article>
                            );
                        })
                    ) : (
                        <p></p>
                    )}
                </div>
                {/* Uncomment the following for debugging */}
                {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
                {/* <pre>{JSON.stringify(repos, undefined, 2)}</pre> */}
            </Container>
        </Section>
    );
}
