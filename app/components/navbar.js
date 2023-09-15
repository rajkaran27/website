import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Intro from './intro';
import { motion } from "framer-motion"

export default function Navbar() {

    const iconHover = {

    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                <a className="flex items-center">
                    <Intro />
                </a>

                <div className="flex space-x-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="https://github.com/rajkaran27"><BsGithub style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://www.linkedin.com/in/rajkaran-muralikaran-49b7141b0/"><AiFillLinkedin style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href=""><AiOutlineInstagram style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
