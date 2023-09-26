const skillsData = [
    {
        icon: "/assets/icons/nodejs.svg",
        description: "",
        head:"NodeJS"
    },
    {
        icon: "/assets/icons/java.svg",
        description: "I chose the Software Engineering specialisation, which focuses on Java. I have experience with the basics of Javam JSP, and Spring Boot. I created a bookstore with Java and JSP, with an integrated Paypal payment system.",
        head:"Java"
    },
    {
        icon: "/assets/icons/python.svg",
        description: "I took Python as part of my Programming for Data Science elective. I used Pandas and Numpy to perform data analysis on .",
        head:"Python"
    },
    {
        icon: "/assets/icons/react.svg",
        description: "",
        head:"React"
    },
    {
        icon: "/assets/icons/tailwind.svg",
        description: "I learnt Tailwind CSS on my own to enhance the aesthetics on my websites.",
        head:"Tailwind"
    },
    {
        icon: "/assets/icons/mysql.svg",
        description: "I am proficient in SQL and have experience with MySQL workbench. ",
        head:"MySQL"
    },
    {
        icon: "/assets/icons/aws.svg",
        description: "I learnt how to deploy a website on AWS using EC2, RDS, and S3. This was done as a part of my CA2 assignnment for my Enterprise Systems Developemnt (ESDE) moduule.",
        head:"Amazon Web Services"
    },
];

const projectData = [
    {
        title: "Kitty Reads",
        desc: "A bookstore built with Java and JSP, with an integrated Paypal payment system.",
        images: ["/assets/icons/java.svg", "/assets/icons/mysql.svg"], // Use an array of image URLs
        languages: ["Java", "MySQL"],
        link:"https://github.com/rajkaran27/JAD-CA2"
    },
    {
        title: "Budget Application",
        desc: "A simple expenses tracking application built with React Native.",
        images: ["/assets/icons/react.svg"],
        languages: ["React"],
        link:"https://github.com/rajkaran27/FirstReactApp"
    },
    {
        title: "Data Analysis on Education",
        desc: "Data Analysis on education in Singapore using Pandas",
        images: ["/assets/icons/pandas.svg", "/assets/icons/anaconda.svg"],
        languages: ["Pandas", "Numpy"],
        link:"https://github.com/rajkaran27/PDS-CA2"
    },
    {
        title:"DVD Rental Page",
        desc:"A simple DVD rental page built with NodeJS and ExpressJS.",
        images:["/assets/icons/nodejs.svg","/assets/icons/mysql.svg"],
        languages:["NodeJS","MySQL"],
        link:"https://github.com/rajkaran27/DVD-Rental-page"
    },
    {
        title:"Personal Website",
        desc:"This website you're currently on! Built with NextJS and TailwindCSS.",
        images:["/assets/icons/react.svg","/assets/icons/tailwind.svg"],
        languages:["React","Tailwind"],
        link:"https://github.com/rajkaran27/website"
    }
];

export default { skillsData, projectData };