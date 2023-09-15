"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"; // Assuming you're using a specific icon library 
import Image from 'next/image'

export default function ProjectBox(props) {

  const cardStyle = {
    backgroundColor: '#010400',
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const langBox = {
    border: '1px solid #3500d3',
    borderRadius: '10px',
  }

  const images = Array.isArray(props.images) ? props.images : [];
  const languages = Array.isArray(props.languages) ? props.languages : [];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex"
    >
      <Card className="max-w-[400px] sm:max-w-full md:max-w-[400px]" style={cardStyle}>
        <CardHeader className="flex justify-between gap-3 p-2">
            <div>
              <Image
                src="/assets/icons/folder.svg"
                alt="Language"
                width={50}
                height={50}
                color="white"
                />
                
            </div>
            <div className="pr-2">
              <a href={props.link} >
                <Image
                  src="/assets/icons/github.svg"
                  alt="github"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          
        </CardHeader>
        {/* <Divider /> */}
        <CardBody className="p-2">
        <h2 className="text-2xl font-bold dark:text-white text-start">{props.title}</h2>
        </CardBody>
        {/* <Divider /> */}
        <CardBody className="p-2">
          <p>{props.desc}</p>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter className="p-2">
        <div className="flex justify-center space-x-4 ">
            {languages.map((lang, index) => (
              <div className="flex items-center p-1" key={index} style={langBox}>
                <p className="ml-1">{lang}</p>
                <span
                  className="inline-block rounded-full p-1 text-sm"
                >
                  {images[index] && (
                    <Image
                      src={images[index]}
                      alt="Language"
                      width={25}
                      height={25}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
