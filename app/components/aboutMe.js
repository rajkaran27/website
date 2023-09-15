import Image from 'next/image'
import Intro from './intro';

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
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 justify-items-center">
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
          {/* <Intro /> */}
        </div>
        <div className="mt-3">
          <p>My name is Rajkaran and I am a student in Singapore Polytechnic.
            I am currently pursuing my Diploma in Information Technology, and I am in the second year of my studies.
            I love learning new technologies. Apart from that, I love to keep myself fit and </p>
        </div>
        <div className="mt-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleDownloadCV}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
