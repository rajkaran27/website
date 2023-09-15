"use client"

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import Image from 'next/image'

export default function SkillsBox(props) {
  const mainTabStyle = {
    border:'1px solid black',
    borderRadius: "8px", 
    backgroundColor:'white'
  };

  const cardStyles = {
    border:'1px solid black',
    color: "black", 
    marginTop:'10px',
    borderRadius:'8px'
  };

  const tabWidth = `${100 / props.skills.length}%`;

  return (
    <div className={`w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[200px] xl:h-[250px] 2xl:h-[300px]  mt-3`}>
      <Tabs aria-label="skills" radius={"md"} variant={"bordered"} style={mainTabStyle}>
        {props.skills.map((skill, index) => (
          <Tab
            key={index}
            
            title={<Image
              src={skill.icon}
              alt="Language"
              width={30}
              height={30}
            />}
             style={{ flexBasis: tabWidth, backgroundColor: "black" }} 
            >
            <Card style={cardStyles}>
              <CardBody className="p-2">
                <h4 class="text-2xl font-bold dark:text-black">{skill.head}</h4>
                {skill.description}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}