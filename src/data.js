export default {

    about: {
        nickname: "Matt",
        job: "software developer",
        location: "Basking Ridge, NJ",
        personalDesc: "I enjoy creating websites, apps, and programs that look good and preform well. My goal is to build products that provide users with an intuitive and enjoyable experience.",
        jobDesc: "I am a computer science student at the [University] [of] [Maryland] where I work on a wide variety of interesting and meaningful projects on a daily basis.",
        listHeader: "Here are a few technologies I've been working with recently:", 
        list: ["Java", "Python", "C", "Javascript (ES6+)", "React.js", "HTML & CSS"] 
    },

    work: [
        {
            workplace: "Federal & Global Fellows",
            title: "Full-Stack Developer",
            date: "Spring 2020 - Present",
            desc: [
                "Development of the student portal and administrative tools including management of a MySQL based database",
                "Redesigned the entire front-end for the student portal and admin portal in React.js",
                "Used PHP to create an API which connects 250 users and 8 administrators with their respective portals, and provides them with the tools they need to partake in the program"
            ],
            tags: ["React.js", "HTML/CSS", "PHP", "MySQL"],
        },
        {
            workplace: "Atlassian",
            title: "Software Engineer Intern",
            date: "May 2021 - Aug 2021",
            desc: [
                "Developed the Confluence Cloud app for Microsoft Teams using React.js, Node.js and a DynamoDB based NoSQL database",
                "Designed and implemented the comments section functionality for pinned Confluence pages within Microsoft Teams using Confluence Cloud's web API",
                "Used AWS to deploy an SQS queue and worker which listens to and processes events from Atlassian's internal event bus"
            ],
            tags: ["React.js", "Node.js", "Typescript", "DynamoDB"],
        },
        {
            workplace: "SPS Consulting",
            title: "Full-Stack Developer",
            date: "Summer 2020",
            desc: 
            [
                "Development of the Blink Resume Progressive Web App (PWA) to quickly create more personalized resume applications",
                "Designed UI and UX then implemented interface with React.js which connects to a web API using Node.js and communicates with Google Firebase ",
                "Lead a team of three using GitHub for version control"
            ],
            tags: ["React.js", "Node.js", "Firebase"],
        },
        {
            workplace: "New Providence High School",
            title: "Animation Instructor",
            date: "Summer 2019",
            desc: [
                "Created a curriculum for a class, 'Introduction to 3D Animation'",
                "Taught a 30 student class how to use Blender software For modeling, rigging, animation, rendering, compositing and video editing"
            ],
            tags: ["Blender"],
        },
    ],

    projects: [
        {
            name: "Blink Resume",
            tags: ["React.js", "Node.js", "Firebase"],
            desc: 
            `The Blink Resume **Progressive Web App** provides a more
            personal hiring experience for recruiters who can’t meet in person with their applicants. The
            PWA connects a user’s resume with a 30 second video introduction which can then be emailed to
            employers. The app is written in React.js and uses a combination of Node.js and Google Firebase on the
            back-end.`,
            img: "blinkResume.PNG",
            demo: null,
            source: null,
        },
        {
            name: "FGSM Student Portal",
            tags: ['React.js', 'React-Bootstrap', 'PHP', 'MySQL'],
            desc: 
            `The FGSM student portal is a **complete UX/UI re-design** of the University of Maryland's 
            Federal and Global Fellows student portal. In converting the original codebase from HTML and
            CSS to React.js, much of the PHP back-end has also been rewritten and interactions between the front-end
            and back-end have been simplifed with the introduction of the useAPI hook.`,
            img: "studentPortal.PNG",
            demo: "/student-portal",
            source: "https://github.com/mgfalzon/student-portal",
        },
    ],

    archive: [
        {
            title: "Pokemon ML",
            source: "https://github.com/mgfalzon/pokemon-ml",
            demo: "https://mgfalzon.github.io/pokemon-ml",
            desc: "A Jupyter Notebook which explores the relationship between pokémon characteristics and win percentage",
            fullDesc:
            `A Jupyter Notebook which explores the relationship between pokémon characteristics
            and win percentage in simulated battles. The notebook predicts pokémon battles with
            up to 88% accuracy using various machine learning models.`,
            tags: ["Python", "Machine Learning"],
            img: "pokemon-ml.PNG",
        },
        {
            title: "Blackjack",
            source: "https://github.com/mgfalzon/blackjack",
            demo: null,
            desc: "A simple terminal based blackjack game",
            fullDesc:
            `The Blackjack project is a simple game designed to test my object-oriented
            programming skills in Python. The object oriented design allows various poker
            classes to be intuitively extended into blackjack classes. The project uses a
            Display class which appends Strings horizontally to create the text-based interface.`,
            tags: ["Python"],
            img: "blackjack.png",
        },
        {
            title: "Art Gallery",
            source: "https://github.com/mgfalzon/gallery",
            demo: "https://mgfalzon.github.io/gallery",
            desc: "A responsive art gallery built in React.js for a friend",
            fullDesc:
            `The art gallery project is a flexible image showcase that generates a variable
            number of responsive pages based on the number of images taken from a source folder.
            Any size of image is supported. The project provides three view - small, medium, and large.`,
            tags: ["React.js", "Javascript"],
            img: "gallery.PNG",
        },
        {
            title: "Arch Linux Configuration",
            source: "https://github.com/mgfalzon/dotfiles",
            demo: null,
            desc: 
            `My custom arch linux configuration. Designed to increase my
            productivity and make those long coding sessions more enjoyable`,
            fullDesc:
            `I'm constantly updating my arch linux configuration to my fit my liking. This repository contains
            all relevant configuration files and bash scripts I wrote to perfect my setup.`,
            tags: ['Python', 'Shell Script', 'Vim Script'],
            img: "linux.png",
        },
    ]

}