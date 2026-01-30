import { useState } from 'react';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';
import { Reveal } from '../UI/Reveal';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categories = ['all', 'Full Stack', 'Backend', 'Desktop', 'Machine Learning'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Portfolio</span>
                    <h2 className={styles.title}>
                        Featured <span className={styles.highlight}>Projects</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A collection of projects I've built — from full-stack applications
                        to automation tools and security experiments.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className={styles.filters}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category === 'all' ? 'All Projects' : category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {filteredProjects.map((project, index) => (
                        <Reveal key={project.id} width="100%">
                            <article
                                className={`${styles.card} ${project.featured ? styles.featured : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <div className={styles.cardLinks}>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className={styles.cardLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View GitHub repository"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                className={styles.cardLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View live demo"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardDesc}>{project.description}</p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.techStack}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className={styles.moreCta}>
                    <p className={styles.moreText}>Want to see more?</p>
                    <a
                        href="https://github.com/TonnyGol"
                        className={styles.moreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View all on GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
