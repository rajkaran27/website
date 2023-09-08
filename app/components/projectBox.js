import * as bsIcons from 'react-icons/bs';
import * as aiIcons from 'react-icons/ai';
import * as faIcons from 'react-icons/fa';
import Image from 'next/image'

export default function ProjectBox(props) {
  const defaultIconStyle = {
    fontSize: '24px',
    color: 'black',
  };

  const icons = Array.isArray(props.icons) ? props.icons : [];

  const projectBoxContainerStyle = {
    maxWidth: '300px', // Set the desired maximum width
    height: '400px',   // Set the desired height
    // Add any other styling you need, such as background color, border, etc.
  };

  return (
    <div style={projectBoxContainerStyle}>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image 
        src={props.img}
        alt={props.alt}
        width={100}
        height={100}
        // width={props.width}
        // height={props.height}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <p>{props.desc}</p>
        </div>
        <div className="flex items-center justify-between">
          {icons.map((icon, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              style={{ ...defaultIconStyle, ...props.iconStyles[index] }}
            >
              {icon}
            </span>
          ))}
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>
    </div>
  )
}
{/* <div style={projectBoxContainerStyle}>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="../assets/me.jpg" alt="" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.desc}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {icons.map((icon, index) => (
      <span
        key={index}
        className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        style={{ ...defaultIconStyle, ...props.iconStyles[index] }}
      >
        {icon}
      </span>
    ))}
  </div>
</div>
</div> */}