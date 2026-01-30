import { motion } from 'framer-motion';
import styles from './HeroLaptop.module.css';

const HeroLaptop = () => {
    return (
        <div className={styles.scene}>
            <motion.div
                className={styles.laptop}
                initial={{ transform: "rotateX(0deg) rotateY(0deg)" }}
                animate={{
                    transform: [
                        "rotateX(0deg) rotateY(-10deg)",
                        "rotateX(-5deg) rotateY(0deg)",
                        "rotateX(0deg) rotateY(10deg)",
                        "rotateX(0deg) rotateY(-10deg)"
                    ]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className={styles.screen}>
                    <div className={styles.display}>
                        <div className={styles.codeHeader}>
                            <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                            <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                            <span className={styles.dot} style={{ background: '#27ca40' }}></span>
                        </div>
                        <div className={styles.codeContent}>
                            <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
                            <p>&nbsp;&nbsp;name: <span className="string">"Tonny"</span>,</p>
                            <p>&nbsp;&nbsp;skills: [<span className="string">"React"</span>, <span className="string">"Node"</span>],</p>
                            <p>&nbsp;&nbsp;coffee: <span className="boolean">true</span></p>
                            <p>&#125;;</p>
                        </div>
                    </div>
                </div>
                <div className={styles.keyboard}>
                    <div className={styles.trackpad}></div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroLaptop;
