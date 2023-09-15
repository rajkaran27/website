const skillsData = [
    {
        icon: "/assets/icons/nodejs.svg",
        description: "Lorem ipsum dolor sit amet...",
        head:"NodeJS"
    },
    {
        icon: "/assets/icons/java.svg",
        description: "Ut enim ad minim veniam...",
        head:"Java"
    },
    {
        icon: "/assets/icons/python.svg",
        description: "Excepteur sint occaecat cupidatat...",
        head:"Python"
    },
    {
        icon: "/assets/icons/react.svg",
        description: "Excepteur sint occaecat cupidatat...",
        head:"React"
    },
    {
        icon: "/assets/icons/tailwind.svg",
        description: "Excepteur sint occaecat cupidatat...",
        head:"Tailwind"
    },
    {
        icon: "/assets/icons/mysql.svg",
        description: "Excepteur sint occaecat cupidatat...",
        head:"MySQL"
    },
    {
        icon: "/assets/icons/aws.svg",
        description: "Excepteur sint occaecat cupidatat...",
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
        images:["/assets/icons/nextjs.svg","/assets/icons/tailwind.svg"],
        languages:["NextJS","Tailwind"],
        link:"https://github.com/rajkaran27/website"
    }
];

export default { skillsData, projectData };