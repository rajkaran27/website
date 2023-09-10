"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

import * as bsIcons from 'react-icons/bs';
import * as aiIcons from 'react-icons/ai';
import * as faIcons from 'react-icons/fa';
import * as riIcons from 'react-icons/ri';
import * as siIcons from 'react-icons/si';

export default function ProjectBox(props) {

  const cardStyle = {
    backgroundColor: '#18181b',
    padding:'10px',
    borderRadius:'10px',
    color:'white'
  }

  const defaultIconStyle = {
    fontSize: '24px',
    color: 'black',
  };

  const icons = Array.isArray(props.icons) ? props.icons : [];

  return (
    <Card className="max-w-[400px]" style={cardStyle}>
      <CardHeader className="flex gap-3">
        <h2 className="text-2xl font-bold dark:text-white">{props.title}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.desc}</p>
        <Divider />
        <div className="flex items-center justify-between">
          {icons.map((icon, index) => (
            <span
              key={index}
              className="inline-block rounded-full p-1 text-sm  m-1"
              style={{ ...defaultIconStyle, ...props.iconStyles[index] }}
            >
              {icon}
            </span>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={props.link}
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}


//   const defaultIconStyle = {
//     fontSize: '24px',
//     color: 'black',
//   };
//   const icons = Array.isArray(props.icons) ? props.icons : [];
//         <div className="flex items-center justify-between">
//           {icons.map((icon, index) => (
//             <span
//               key={index}
//               className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               style={{ ...defaultIconStyle, ...props.iconStyles[index] }}
//             >
//               {icon}
//             </span>
//           ))}
//           <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
