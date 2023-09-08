import Image from 'next/image'
import Navbar from './components/navbar.js'
import ProjectBox from './components/projectBox.js'
import { FaJava, FaReact } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <div id="intro">
          <div className="flex flex-col items-center justify-center">
            <div className="contentbox mx-auto" id="start">
              <svg id="logo" width="100%" height="auto" viewBox="0 0 1087 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M73 142L43.8 89H35.6V142H1.40002V1.60001H58.8C69.8667 1.60001 79.2667 3.53334 87 7.4C94.8667 11.2667 100.733 16.6 104.6 23.4C108.467 30.0667 110.4 37.5333 110.4 45.8C110.4 55.1333 107.733 63.4667 102.4 70.8C97.2 78.1333 89.4667 83.3333 79.2 86.4L111.6 142H73ZM35.6 64.8H56.8C63.0667 64.8 67.7334 63.2667 70.8 60.2C74 57.1333 75.6 52.8 75.6 47.2C75.6 41.8667 74 37.6667 70.8 34.6C67.7334 31.5333 63.0667 30 56.8 30H35.6V64.8Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M219.269 117.2H166.869L158.469 142H122.669L173.469 1.60001H213.069L263.869 142H227.669L219.269 117.2ZM210.469 90.8L193.069 39.4L175.869 90.8H210.469Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M367.33 1.60001V97.2C367.33 112 363.13 123.4 354.73 131.4C346.463 139.4 335.263 143.4 321.13 143.4C306.33 143.4 294.463 139.2 285.53 130.8C276.596 122.4 272.13 110.467 272.13 95H306.13C306.13 100.867 307.33 105.333 309.73 108.4C312.13 111.333 315.596 112.8 320.13 112.8C324.263 112.8 327.463 111.467 329.73 108.8C331.996 106.133 333.13 102.267 333.13 97.2V1.60001H367.33Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M476.355 142L429.155 80V142H394.955V1.60001H429.155V63.2L475.955 1.60001H516.155L461.755 70.4L518.155 142H476.355Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M621.808 117.2H569.408L561.008 142H525.208L576.008 1.60001H615.608L666.408 142H630.208L621.808 117.2ZM613.008 90.8L595.608 39.4L578.408 90.8H613.008Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M753.469 142L724.269 89H716.069V142H681.869V1.60001H739.269C750.335 1.60001 759.735 3.53334 767.469 7.4C775.335 11.2667 781.202 16.6 785.069 23.4C788.935 30.0667 790.869 37.5333 790.869 45.8C790.869 55.1333 788.202 63.4667 782.869 70.8C777.669 78.1333 769.935 83.3333 759.669 86.4L792.069 142H753.469ZM716.069 64.8H737.269C743.535 64.8 748.202 63.2667 751.269 60.2C754.469 57.1333 756.069 52.8 756.069 47.2C756.069 41.8667 754.469 37.6667 751.269 34.6C748.202 31.5333 743.535 30 737.269 30H716.069V64.8Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M899.737 117.2H847.338L838.938 142H803.138L853.938 1.60001H893.537L944.338 142H908.138L899.737 117.2ZM890.938 90.8L873.537 39.4L856.338 90.8H890.938Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
                <path d="M1085.4 142H1051.2L993.998 55.4V142H959.798V1.60001H993.998L1051.2 88.6V1.60001H1085.4V142Z" stroke="white" strokeWidth="0.9" mask="url(#path-1-outside-1_1_4)" />
              </svg>
            </div>
          </div>
        </div>
        <div id='about'>
          <h1 className='text-4xl font-extrabold dark:text-white text-center'>About me</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
            <Image
              src="/assets/me.jpg"
              alt="Vercel Logo"
              width={500}
              height={500}
            />            
            </div>
            <div>
              <h3>Myself</h3>
            </div>
          </div>
        </div>
        <div id='projects'>
          <h1 className='text-4xl font-extrabold dark:text-white text-center'>Projects</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <ProjectBox title="Java" desc="lorum ipsum" icon1={<FaJava />} iconSize="32px"
                iconColor="red" img="/assets/java.png"/>
            </div>
            <div>
              <ProjectBox
                title="Java"
                desc="lorum ipsum"
                icons={[<FaJava />, <FaReact />]}
                iconStyles={[{ fontSize: '32px', color: 'red' }, { fontSize: '28px', color: 'green' }]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
