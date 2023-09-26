"use client"

import Tooltip from '@mui/material/Tooltip'
import { motion } from "framer-motion"


export default function MySkills({ skills }) {

    const spanStyle = {
        backgroundColor: '#010400',
        borderRadius: "50%",
        padding: "10px",
    }

    return (
        <div className='flex space-x-4'>
            {skills.map((skill, index) => (
                <Tooltip title={skill.head} index={index}>
                    <span style={spanStyle}>
                        <img src={skill.icon} alt={skill.head} className="h-12 w-12" />
                    </span>
                </Tooltip>
            ))}

        </div>
    )
}
