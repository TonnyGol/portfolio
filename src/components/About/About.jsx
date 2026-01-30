import styles from './About.module.css';

const About = () => {
    const highlights = [
        { icon: '🎓', title: 'CS Student', description: 'Third-year Computer Science student at Ashkelon Academic College' },
        { icon: '💻', title: 'Backend Focus', description: 'Building robust, scalable server-side applications with Java & Spring Boot' },
        { icon: '🔧', title: 'Full Stack', description: 'React + Vite frontend with REST API backend integration' },
        { icon: '🤖', title: 'ML & Vision', description: 'Experience with TensorFlow and OpenCV for computer vision projects' }
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>About Me</span>
                    <h2 className={styles.title}>
                        Turning <span className={styles.highlight}>ideas</span> into reality
                    </h2>
                </div>

                <div className={styles.content}>
                    <p className={styles.text}>
                        Hey! I'm Tonny, a Computer Science student with a passion for building things that work.
                        Whether it's a backend booking system with Spring Boot, a Telegram bot for automation,
                        or a machine learning project for license plate recognition — I love the entire process of
                        taking an idea from concept to deployment.
                    </p>
                    <p className={styles.text}>
                        My journey in tech started with the "Magshimim" cyber program and has evolved through
                        military service and academic studies into hands-on experience with real systems.
                        I've built booking platforms, bots, desktop games, and explored machine learning.
                        I'm most comfortable with Java, Python, and JavaScript on the backend,
                        and React for frontend work.
                    </p>

                    <div className={styles.highlights}>
                        {highlights.map((item, index) => (
                            <div key={index} className={styles.highlightCard}>
                                <span className={styles.highlightIcon}>{item.icon}</span>
                                <h3 className={styles.highlightTitle}>{item.title}</h3>
                                <p className={styles.highlightDesc}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <a href="#contact" className={styles.ctaButton}>
                            <span>Let's Connect</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
