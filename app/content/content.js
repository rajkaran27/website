const skillsData = [
    {
        icon: "/assets/icons/nodejs.svg",
        head: "NodeJS",
        time: 0.2
    },
    {
        icon: "/assets/icons/java.svg",
        head: "Java",
        time: 0.4
    },
    {
        icon: "/assets/icons/python.svg",
        head: "Python",
        time: 0.6
    },
    {
        icon: "/assets/icons/react.svg",
        description: "",
        head: "React",
        time: 0.8
    },
    {
        icon: "/assets/icons/tailwind.svg",
        head: "Tailwind",
        time: 1
    },
    {
        icon: "/assets/icons/mysql.svg",
        head: "MySQL",
        time: 1.2
    },
    {
        icon: "/assets/icons/aws.svg",
        head: "Amazon Web Services",
        time: 1.4
    },
];

const projectData = [
    {
        title: "Auto Amigos",
        desc: "A full stack car e-commerce website built using NextJS, TailwindCSS and PostgreSQL.",
        images: ["/assets/icons/react.svg", "/assets/icons/tailwind.svg", "/assets/icons/postgresql.svg"],
        languages: ["React", "Tailwind", "PostgreSQL"],
        link: "https://auto-amigos.vercel.app/"
    },
    {
        title: "Threads Clone",
        desc: "A clone of the Threads app built using NextJS, TailwindCSS, MongoDB and Clerk.",
        images: ["/assets/icons/react.svg", "/assets/icons/tailwind.svg", "/assets/icons/mongodb.svg"],
        languages: ["React", "Tailwind", "MongoDB"],
        link: "https://github.com/rajkaran27/Threads-Clone"
    },
    {
        title: "Kitty Reads",
        desc: "A bookstore built with Java and JSP, with an integrated Paypal payment system.",
        images: ["/assets/icons/java.svg", "/assets/icons/mysql.svg"], // Use an array of image URLs
        languages: ["Java", "MySQL"],
        link: "https://github.com/rajkaran27/JAD-CA2"
    },
    {
        title: "Budget Application",
        desc: "A simple expenses tracking application built with React Native.",
        images: ["/assets/icons/react.svg"],
        languages: ["React"],
        link: "https://github.com/rajkaran27/FirstReactApp"
    },
    {
        title: "Data Analysis on Education",
        desc: "Data Analysis on education in Singapore using Pandas",
        images: ["/assets/icons/pandas.svg", "/assets/icons/anaconda.svg"],
        languages: ["Pandas", "Numpy"],
        link: "https://github.com/rajkaran27/PDS-CA2"
    },
    {
        title: "DVD Rental Page",
        desc: "A simple DVD rental page built with NodeJS and ExpressJS.",
        images: ["/assets/icons/nodejs.svg", "/assets/icons/mysql.svg"],
        languages: ["NodeJS", "MySQL"],
        link: "https://github.com/rajkaran27/DVD-Rental-page"
    },
    {
        title: "Personal Website",
        desc: "This website you're currently on! Built with NextJS and TailwindCSS.",
        images: ["/assets/icons/react.svg", "/assets/icons/tailwind.svg"],
        languages: ["React", "Tailwind"],
        link: "https://github.com/rajkaran27/website"
    },

];

export default { skillsData, projectData };