import { BsGithub } from 'react-icons/bs';
import {AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai';

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                <a className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rajkaran</span>
                </a>

                <div className="flex space-x-4">
                    <a href="https://github.com/rajkaran27"><BsGithub style={{ fontSize: '2rem',color:'white' }} /></a>
                    <a href="https://www.linkedin.com/in/rajkaran-muralikaran-49b7141b0/"><AiFillLinkedin style={{ fontSize: '2rem',color:'white'  }} /></a>
                    <a href=""><AiOutlineInstagram style={{ fontSize: '2rem' ,color:'white' }} /></a>       
                </div>
            </div>
        </nav>
    );
}
