import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Image from 'next/image'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>
                        <Typography>{children}</Typography>
                    </div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function SkillsBox({ skills }) {

    const boxStyle = {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ maxWidth: { xs: 320, sm: 800 },width: '100%' }}
            style={boxStyle}
        >
            <Tabs
                indicatorColor='secondary'
                variant="scrollable"
                value={value}
                onChange={handleChange}
                allowScrollButtonsMobile
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                }}
            >
                {skills.map((skill, index) => (
                    <Tab label={<Image src={skill.icon} alt={skill.head} height={40} width={40} />} {...a11yProps(index)} key={index} />
                ))}
            </Tabs>
            {skills.map((skill, index) => (
                <TabPanel value={value} index={index} key={index}>
                    <h4 className="text-2xl font-bold dark:text-dark">{skill.head}</h4>
                    {skill.description}
                </TabPanel>
            ))}
        </Box>
    );
}