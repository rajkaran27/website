import Image from 'next/image'
import TextAnimation from './nameAnimation.js';
import { motion, Variants } from 'framer-motion';

const variants = {
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
    // Replace 'your-cv-filename.pdf' with the actual name of your CV file
    const cvFileName = 'Rajkaran Muralikaran1.pdf';

    // Create a temporary anchor element
    const a = document.createElement('a');

    // Set the anchor's attributes
    a.href = `/assets/resume/${cvFileName}`;
    a.download = cvFileName;

    // Trigger a click event on the anchor to initiate the download
    a.click();

    // Clean up the temporary anchor
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

      <div className="md:order-1 p-3">
        <motion.div variants={variants} initial="initial" animate="animate">
          <p className='text-lg'>Hi, I am</p>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
          <TextAnimation />
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate" transition={{ delay: 0.4 }}>
          <p className='text-lg'>A Year 2 Information Technology Student in Singapore Polytechnic.</p>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate" transition={{ delay: 0.6 }}>
          <button
            style={{ backgroundColor: "#3500d3" }}
            className="text-white px-4 py-2 rounded-md text-lg"
            onClick={handleDownloadCV}
          >
            My Résumé
          </button>
        </motion.div>
      </div>
    </div>
  );
}
