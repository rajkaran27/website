import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Intro from './intro';
import Image from 'next/image'
import { motion } from "framer-motion"

const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.2, // Adjust the delay between each child element
        },
    },
};

const childVariants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, // Adjust the duration as needed
        },
    },
};

export default function Navbar() {

    return (
        <nav style={{ backgroundColor: "#030204" }}>
            <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                <motion.div variants={containerVariants} initial="initial" animate="animate">
                    <a className="flex items-center">
                        <motion.div variants={childVariants}>
                            <svg width="25%" height="auto" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7635 50.9434L99 2.88675L182.237 50.9434V147.057L99 195.113L15.7635 147.057V50.9434Z" stroke="#3500D3" strokeWidth="5" />
                                <path d="M134.839 135.904C135.991 137.696 135.351 140 132.919 140H117.815C114.743 140 113.207 138.848 111.415 136.16L97.591 115.552C96.439 114.016 96.183 112.608 96.183 109.024V98.784C96.183 96.48 96.951 95.072 99.895 95.072H102.455C108.727 95.072 114.615 90.72 114.615 84.704C114.615 78.048 109.495 73.824 102.839 73.824H85.815V136.288C85.815 139.232 84.407 140 82.103 140H69.431C67.127 140 65.847 139.232 65.847 136.288V59.616C65.847 57.312 66.487 55.904 69.431 55.904H101.687C115.639 55.904 121.783 58.72 127.159 64.096C131.895 68.704 134.583 76 134.583 84.192C134.583 97.632 124.727 106.976 116.791 109.664L134.839 135.904Z" fill="#3500D3" />
                            </svg>
                        </motion.div>
                    </a>
                </motion.div>
                <motion.div variants={containerVariants} initial="initial" animate="animate">

                    <div className="flex space-x-4">
                        <motion.div variants={childVariants} whileHover={{ scale: 1.1 }}>
                            <a href="https://github.com/rajkaran27"><BsGithub style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                        </motion.div>
                        <motion.div variants={childVariants} whileHover={{ scale: 1.1 }}>
                            <a href="https://www.linkedin.com/in/rajkaran-muralikaran-49b7141b0/"><AiFillLinkedin style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </nav>
    );
}
