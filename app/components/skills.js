"use client"

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


import * as bsIcons from 'react-icons/bs';
import * as aiIcons from 'react-icons/ai';
import * as faIcons from 'react-icons/fa';
import * as riIcons from 'react-icons/ri';
import * as siIcons from 'react-icons/si';
import Image from 'next/image'

export default function SkillsBox(props) {

      return (
        <div className="w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[200px] xl:h-[250px] 2xl:h-[300px]" >
          <Tabs aria-label="skills" radius={"md"} variant={"bordered"} color={"success"}>
            <Tab key="node" title={<faIcons.FaNodeJs size={30}/>}>
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="react" title={<faIcons.FaReact size={30}/>}>
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="java" title={<faIcons.FaJava size={30}/>}>
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="aws" title={<faIcons.FaAws size={30}/>}>
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="tailwind" title={<siIcons.SiTailwindcss size={30}/>}>
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </div>  
      );
    
}