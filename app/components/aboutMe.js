import Image from 'next/image'
import TextAnimation from './nameAnimation.js';
import { motion } from 'framer-motion';

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
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Adjust the duration as needed
    },
  },
};

export default function AboutMe(props) {
  const handleDownloadCV = () => {
    const cvFileName = 'Rajkaran Muralikaran1.pdf';

    const a = document.createElement('a');

    a.href = `/assets/resume/${cvFileName}`;
    a.download = cvFileName;

    a.click();

    window.URL.revokeObjectURL(a.href);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 justify-items-center p-10">
      <div className="md:order-2">
        {/* <Image
          src="/assets/images/me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
      </div>

      <motion.div
        className="md:order-1 p-3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={childVariants}>
          <p className='text-lg p-1'>Hi, I am</p>
        </motion.div>
        <motion.div variants={childVariants}>
          <TextAnimation />
        </motion.div>
        <motion.div variants={childVariants}>
          <p className='text-lg p-1'>A Year 2 Information Technology Student in Singapore Polytechnic.</p>
        </motion.div>
        <motion.div variants={childVariants} className='py-2'>
          <button
            style={{ backgroundColor: "#3500d3" }}
            className="text-white px-4 py-2 rounded-md text-lg"
            onClick={handleDownloadCV}
          >
            My Résumé
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
