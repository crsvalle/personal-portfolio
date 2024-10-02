'use client';
import './Skills.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faPython, faNodeJs, faJava, faGit, faHtml5, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faServer } from '@fortawesome/free-solid-svg-icons';


const skillsData = {
    frontend: [
        { skill: 'JavaScript', icon: faJs, color: '#FFD43B' },
        { skill: 'TypeScript', icon: faJs, color: '#007ACC' },
        { skill: 'Python', icon: faPython, color: '#3776AB' },
        { skill: 'React', icon: faReact, color: '#61DAFB' },
        { skill: 'Node.js', icon: faNodeJs, color: '#8CC84B' },
        { skill: 'Redux Toolkit', icon: faJs, color: '#764ABC' },
        { skill: 'HTML/CSS', icon: faHtml5, color: '#E44D26' },
        { skill: 'Bootstrap', icon: faBootstrap, color: '#563D7C' },
    ],
    backend: [
        { skill: 'Node.js', icon: faNodeJs, color: '#8CC84B' },
        { skill: 'Express', icon: faNodeJs, color: '#8CC84B' },
        { skill: 'PostgreSQL', icon:faDatabase, color: '#00599C'},
        { skill: 'Java', icon: faJava, color: '#007396' },
        { skill: 'C++', icon:faCode, color: '#00599C'},
    ],
    tools: [
        { skill: 'Git', icon: faGit, color: '#F05032' },
        { skill: 'Postman', icon:faDatabase, color: '#00599C'},
        { skill: 'MaterialUI', icon:faCode, color: '#00599C'}, 
        { skill: 'Firebase', icon:faServer, color: '#00599C'}, 
        { skill: 'TailwindCSS', icon:faCode, color: '#00599C'}, 
    ],
};

const Skills = () => {
    return (
        <section className="skills-section py-10 bg-black text-white">
            <div className="skill-box mx-auto p-8 rounded-lg shadow-lg ">
                <h2 className="text-3xl font-bold text-center mb-5 skills-title">SKILLS</h2>
                <div className="grid grid-cols-3 gap-4">
                    {Object.keys(skillsData).map((category) => (
                        <motion.div
                            key={category}
                            className="skill-category p-4 bg-gray-800 rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold text-center mb-2">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <ul className="grid grid-cols-4 gap-2 list-none">
                                {skillsData[category].map(({ skill, icon, color }) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 * skillsData[category].indexOf(skill) }}
                                        className="flex flex-col items-center justify-center p-2 border border-transparent hover:border-yellow-500"
                                    >
                                        <FontAwesomeIcon 
                                            icon={icon} 
                                            className="mb-1 text-2xl" 
                                            style={{ color }} // Set the icon color
                                        />
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

