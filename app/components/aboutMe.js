import Image from 'next/image'
// import Intro from './intro';
import TextAnimation from './nameAnimation.js';

export default function AboutMe(props) {
  const handleDownloadCV = () => {
    // Replace 'your-cv-filename.pdf' with the actual name of your CV file
    const cvFileName = 'nodejs.svg';

    // Create a temporary anchor element
    const a = document.createElement('a');

    // Set the anchor's attributes
    a.href = `/assets/icons/${cvFileName}`;
    a.download = cvFileName;

    // Trigger a click event on the anchor to initiate the download
    a.click();

    // Clean up the temporary anchor
    window.URL.revokeObjectURL(a.href);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 justify-items-center p-10">
      <div className="md:order-2 ">
        <Image
          src="/assets/me.jpg"
          alt="Vercel Logo"
          width={500}
          height={500}
        />
      </div>
      <div className="md:order-1 p-3">
        <div>
          <p>Hi, I am</p>
          <TextAnimation/>
        </div>
        <div className="mt-3">
          <p>A Year 2 Information Technology Student in Singapore Polytechnic.</p>
        </div>
        <div className="mt-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleDownloadCV}
          >
            My Résumé
          </button>
        </div>
      </div>
    </div>
  );
}
