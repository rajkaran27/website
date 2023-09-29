"use client"

import Tooltip from '@mui/material/Tooltip'
import { motion } from "framer-motion"
import Fade from '@mui/material/Fade';


export default function MySkills({ skills }) {

    const spanStyle = {
        backgroundColor: '#30332E',
        borderRadius: "50%",
        padding: "10px",
        border: "2px solid #3500d3"
    }

    return (
        <div className='flex  justify-center flex-wrap'>
            {skills.map((skill, index) => (
                <motion.div style={spanStyle} className='m-2 hover:shadow-lg' key={index} whileHover={{ scale: 1.1 }}>
                    <Tooltip title={skill.head} followCursor TransitionComponent={Fade}>
                        <span>
                            <img src={skill.icon} alt={skill.head} className="h-12 w-12" />
                        </span>
                    </Tooltip>
                </motion.div>

            ))}
        </div>
    )
}
