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
        languages: ["Java", "MySQL"]
    },
    {
        title: "Budget Application",
        desc: "A simple expenses tracking application built with React Native.",
        images: ["/assets/icons/react.svg"],
        languages: ["React"]
    },
    {
        title: "Data Analysis on Education",
        desc: "Data Analysis on education in Singapore using Pandas",
        images: ["/assets/icons/pandas.svg", "/assets/icons/anaconda.svg"],
        languages: ["Pandas", "Numpy"]
    },
];

export default { skillsData, projectData };