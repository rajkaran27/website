import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Intro from './intro';
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Navbar() {

    const iconHover = {

    }
    return (
        <nav style={{ backgroundColor: "#030204" }}>
            <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                <a className="flex items-center">
                    {/* <Intro /> */}
                    {/* <Image
                        src='/assets/icons/R.svg'
                        alt='myLogo'
                        height={200}
                        width={200}
                        style={{border:'1px solid white'}}
                    /> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0">
                        <g fill="#3500d3" fill-opacity="1"><g transform="translate(156.486257, 216.374986)"><g>
                            <path d="M 57.078125 -2.980469 L 43.949219 -22.066406 C 49.722656 -24.023438 56.890625 -30.820312 56.890625 -40.597656 C 56.890625 -46.554688 54.9375 -51.863281 51.492188 -55.214844 C 47.582031 -59.125 43.109375 -61.175781 32.960938 -61.175781 L 9.496094 -61.175781 C 7.355469 -61.175781 6.890625 -60.152344 6.890625 -58.476562 L 6.890625 -2.699219 C 6.890625 -0.558594 7.820312 0 9.496094 0 L 18.714844 0 C 20.390625 0 21.414062 -0.558594 21.414062 -2.699219 L 21.414062 -48.140625 L 33.800781 -48.140625 C 38.640625 -48.140625 42.367188 -45.066406 42.367188 -40.222656 C 42.367188 -35.847656 38.082031 -32.683594 33.519531 -32.683594 L 31.660156 -32.683594 C 29.515625 -32.683594 28.957031 -31.660156 28.957031 -29.980469 L 28.957031 -22.535156 C 28.957031 -19.925781 29.144531 -18.902344 29.980469 -17.785156 L 40.039062 -2.792969 C 41.34375 -0.839844 42.460938 0 44.695312 0 L 55.679688 0 C 57.449219 0 57.914062 -1.675781 57.078125 -2.980469 Z M 57.078125 -2.980469 " /></g>
                        </g>
                        </g>
                        <g clip-path="url(#fca0ea4e39)">
                            <g clip-path="url(#e3d5621a9c)"><path stroke-linecap="butt" transform="matrix(0.752531, 0, 0, 0.75, 133.680185, 124.873293)" fill="none" stroke-linejoin="miter" d="M 71.757153 0.00227653 L 143.514968 41.752279 L 143.514968 125.252285 L 71.757153 167.002287 L -0.00066153 125.252285 L -0.00066153 41.752279 Z M 71.757153 0.00227653 " stroke="#3500d3" strokeWidth="8" stroke-opacity="1" stroke-miterlimit="4" />
                            </g>
                        </g>
                        <defs>
                            <g /><clipPath id="e3d5621a9c"><path d="M 187.679688 124.875 L 241.679688 156.1875 L 241.679688 218.8125 L 187.679688 250.125 L 133.679688 218.8125 L 133.679688 156.1875 Z M 187.679688 124.875 " clip-rule="nonzero" /></clipPath><clipPath id="fca0ea4e39"><path d="M 133.679688 124.875 L 241.679688 124.875 L 241.679688 250.125 L 133.679688 250.125 Z M 133.679688 124.875 " clip-rule="nonzero" />
                            </clipPath>
                        </defs>
                    </svg> */}
                    <svg width="25%" height="auto" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M15.7635 50.9434L99 2.88675L182.237 50.9434V147.057L99 195.113L15.7635 147.057V50.9434Z" stroke="#3500D3" strokeWidth="5" />

                            <path d="M134.839 135.904C135.991 137.696 135.351 140 132.919 140H117.815C114.743 140 113.207 138.848 111.415 136.16L97.591 115.552C96.439 114.016 96.183 112.608 96.183 109.024V98.784C96.183 96.48 96.951 95.072 99.895 95.072H102.455C108.727 95.072 114.615 90.72 114.615 84.704C114.615 78.048 109.495 73.824 102.839 73.824H85.815V136.288C85.815 139.232 84.407 140 82.103 140H69.431C67.127 140 65.847 139.232 65.847 136.288V59.616C65.847 57.312 66.487 55.904 69.431 55.904H101.687C115.639 55.904 121.783 58.72 127.159 64.096C131.895 68.704 134.583 76 134.583 84.192C134.583 97.632 124.727 106.976 116.791 109.664L134.839 135.904Z" fill="#3500D3" />
                    </svg>


                </a>
                <div className="flex space-x-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="https://github.com/rajkaran27"><BsGithub style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="https://www.linkedin.com/in/rajkaran-muralikaran-49b7141b0/"><AiFillLinkedin style={{ fontSize: '2.5rem', color: 'white' }} /></a>
                    </motion.div>

                </div>
            </div>
        </nav>
    );
}
