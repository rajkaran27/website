"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"; // Assuming you're using a specific icon library 
import Image from 'next/image'

export default function ProjectBox(props) {

  const cardStyle = {
    backgroundColor: '#18181b',
    padding: '10px',
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    color: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const langBox = {
    border: '1px solid black',
    borderRadius: '10px',
  }

  const images = Array.isArray(props.images) ? props.images : [];
  const languages = Array.isArray(props.languages) ? props.languages : [];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex"
    >
      <Card className="max-w-[400px]" style={cardStyle}>
        <CardHeader className="flex gap-3 p-1">
          <h2 className="text-2xl font-bold dark:text-white">{props.title}</h2>
        </CardHeader>
        <Divider />
        <CardBody className="p-1">
        <div className="flex justify-start p-1">
            {languages.map((lang, index) => (
              <div className="flex items-center p-1" key={index} style={langBox}>
                <p>{lang}</p>
                <span
                  className="inline-block rounded-full p-1 text-sm"
                >
                  {images[index] && (
                    <Image
                      src={images[index]}
                      alt="Language"
                      width={30}
                      height={30}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </CardBody>
        <Divider />
        <CardBody className="p-1">
          <p>{props.desc}</p>
        </CardBody>
        <Divider />
        <CardFooter className="p-1">
        <div className="flex items-center">
          <Link
            isExternal
            href={props.link}
          >
            Visit source code on GitHub.
          </Link>
          <FiExternalLink className="ml-1" />
        </div>
      </CardFooter>
      </Card>
    </motion.div>
  )
}
