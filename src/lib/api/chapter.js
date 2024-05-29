import { fetchAPI } from "$lib/utils/api.js";
import UniversityLogo from '$lib/images/education/university.png';
import HighSchoolLogo from '$lib/images/education/high-school.png';
import TSPLogo from '$lib/images/experience/tsp.png';
import RedSquareLogo from '$lib/images/experience/red-square.png';

import CDPicture1 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-1.png";
import CDPicture2 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-2.png";
import CDPicture3 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-3.png";
import CDPicture4 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-4.png";
import CDPicture5 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-5.png";
import CDPicture6 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-6.png";
import CDPicture7 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-7.png";
import CDPicture8 from "$lib/images/portfolio/cyberbullying-detection/cds-picture-8.png";

import DRPicture1 from "$lib/images/portfolio/dengue-report/dr-picture-1.png";
import DRPicture2 from "$lib/images/portfolio/dengue-report/dr-picture-2.png";

import AMPicture1 from "$lib/images/portfolio/accommodation-management/am-picture-1.png";
import AMPicture2 from "$lib/images/portfolio/accommodation-management/am-picture-2.png";
import AMPicture3 from "$lib/images/portfolio/accommodation-management/am-picture-3.png";
import AMPicture4 from "$lib/images/portfolio/accommodation-management/am-picture-4.png";
import AMPicture5 from "$lib/images/portfolio/accommodation-management/am-picture-5.png";

import RRPicture1 from "$lib/images/portfolio/restaurant-reservation/rr-picture-1.png";
import RRPicture2 from "$lib/images/portfolio/restaurant-reservation/rr-picture-2.png";
import RRPicture3 from "$lib/images/portfolio/restaurant-reservation/rr-picture-3.png";
import RRPicture4 from "$lib/images/portfolio/restaurant-reservation/rr-picture-4.png";
import RRPicture5 from "$lib/images/portfolio/restaurant-reservation/rr-picture-5.png";


import AWSSALogo from "$lib/images/certification/aws-sa-badge.png";
import AWSSACertificate from "$lib/images/certification/aws-sa-certificate.png";
import AWSCPLogo from "$lib/images/certification/aws-cloud-practitioner-badge.png";
import AWSCPCertificate from "$lib/images/certification/aws-cloud-practitioner-certificate.png";
import FlutterLogo from "$lib/images/certification/flutter.png";
import FlutterCertificate from "$lib/images/certification/flutter-certificate.jpg";

export async function getChapter(navigationSlug, chapterSlug, categorySlug) {
    let navigation = await fetchAPI(navigationSlug, chapterSlug, categorySlug) || navigationsData[navigationSlug];

    const chapterNavigations = navigation.map(chapter => ({ slug: chapter.slug, title: chapter.title }));
    const chapter = navigation.find(chapter => chapter.slug == chapterSlug) || navigation[0];

    chapter.content["category"] = chapter.content.categories.find(category => category.slug === categorySlug) || chapter.content.categories[0];
    
    const chapterCategoryNavigations = chapter.content.categories.map(category => ({ slug: category.slug, title: category.title }));
    
    return {
        ...chapter, 
        "navigations": chapterNavigations,
        "categoryNavigations": chapterCategoryNavigations,
    }
}

const navigationsData = {
    "education": [
        {
            slug: "university",
            title: "University",
            content: {
                images: [
                    UniversityLogo
                ],
                title: "Asia Pacific University (APU)",
                date: "Dec 2021 - May 2017",
                role: null,
                categories: [
                    {
                        slug: null,
                        lists: [
                            "Graduated w. BSs (Hons) in Software Engineering",
                            "Best Student & First Class Honours",
                            "Degree CGPA: 3.93; Diploma CGPA: 3.97",
                            "IEEE Engineering Club Member",
                            "Diabolo Club Member & Stage Performer",
                        ]
                    }
                ]
            }
        },
        {
            slug: "high-school",
            title: "High School",
            content: {
                images: [
                    HighSchoolLogo
                ],
                title: "SMK Seri Kembangan",
                date: "2017 - 2012",
                role: null,
                categories: [
                    {
                        slug: null,
                        lists: [
                            "Graduated w. 7A in SPM",
                            "Consistently Ranked 9th to 11th across all classes",
                            "Appointed as Class Monitor Assistant",
                        ]
                    }
                ]
            }
        }
    ],
    "experience": [
        {
            slug: "tsp",
            title: "TSP",
            content: {
                images: [
                    TSPLogo
                ],
                title: "The Software Practice (TSP)",
                date: "Current - Sep 2022",
                role: "Software Development Engineer",
                categories: [
                    {
                        slug: "sla-leap",
                        title: "SLA-LEAP",
                        summary: "Played a pivotal role to a large-scale government project based in Singapore that prioritizes on modernizing land sales and lease management through web application.",
                        lists: [
                            "Proficient in implementing APIs to encapsulate diverse business logic, optimizing functionality and connectivity across applications.",
                            "Responsible in seamless integration of a third-party payment gateway enabling transactions via Singapore's PayNow and Bank Transfer, ensuring secure and efficient payment processing.",
                            "Independently established a comprehensive and flexible CI/CD pipeline, facilitating environment-based and service-specific deployments.",
                            "Swiftly adapt to production issues, consistently devising optimal solutions for seamless resolution, occasionally consulting with seniors for additional insights and expertise.",
                            "Familiar with unit testing practices, ensuring the reliability and functionality of code components through holistic testing strategies.",
                            "Experienced in onboarding junior team member onto projects, providing guidance on coding practices and fostering a mindset centered around implementing changes with minimal disruption, ensuring smoother project development.",
                        ]
                    }
                ]
            }
        },
        {
            slug: "redsquare",
            title: "RedSquare",
            content: {
                images: [
                    RedSquareLogo
                ],
                title: "RedSquare Software",
                date: "Aug 2022 - Aug 2021",
                role: "Junior Backend Engineer",
                categories: [
                    {
                        slug: "mywheels",
                        title: "MyWheels",
                        summary: "Contributed significantly to a medium-sized CMS/E-commerce web & mobile application with a comprehensive reporting dashboard for the ChinaPress clients.",
                        lists: [
                            "Develop and integrate numerous APIs to accommodate different website displays.",
                            "Document important business operations and code functions to ease future implementation and  communication.",
                            "Liaise with project managers to ensure feasible yet satisfactory feature expectations.",
                            "Seek advice and insights from seniors regularly to make sure proper programming principles and practices are upheld.",
                            "Propose appropriate software diagramming practices to streamline communication between the team.",
                            "Exercise hybrid methodology including Kanban and Scrum with retrospective suggestions to further refine development process.",
                            "Develop multiple background tasks to automate interval updates.",
                            "Provide upper management from time to time on several solutions, detailed with respective pros and cons to mission-critical problems.",
                        ]
                    },
                    {
                        slug: "capedia",
                        title: "Capedia",
                        summary: "Took over and single-handedly completed a half-finished online courses booking web application catered to SMEs using Django, as well as AJAX to improve overall user experience.",
                        lists: [
                            "Develop the application thoroughly using MVC principles.",
                            "Make decisions regularly on selecting the most pragmatic implementation that conforms to the technical requirements and tight schedule.",
                            "Refactor old codebase to prevent wasteful resources on subsequent implementation.",
                        ]
                    }
                ]
            }
        },
        {
            slug: "redsquare-internship",
            title: "RedSquare - Internship",
            content: {
                images: [
                    RedSquareLogo
                ],
                title: "RedSquare Software",
                date: "Nov 2020 - Jul 2020",
                role: "Software Engineer Intern",
                categories: [
                    {
                        slug: "airstarter",
                        title: "AirStarter",
                        summary: "Learned and helped develop a mobile-focused application designed to gather online talents  and entertainers, built using React Native.",
                        lists: [
                            "Integrate several APIs to respective mobile pages.",
                            "Improve application performance and user experience significantly by incorporating transitions and animations, reducing component rendering, applying pagination and segregating API calls.",
                            "Document user manual to properly guide the application usage to the clients.",
                        ]
                    }
                ]
            }
        },
    ],
    "portfolio": [
        {
            slug: "cyberbullying-detection",
            title: "Cyberbullying Detection",
            content: {
                images: [
                    CDPicture1,
                    CDPicture2,
                    CDPicture3,
                    CDPicture4,
                    CDPicture5,
                    CDPicture6,
                    CDPicture7,
                    CDPicture8,
                ],
                title: "Cyberbullying Detection System",
                date: null,
                role: "Keras, React, Flask, MySQL",
                categories: [
                    {
                        slug: null,
                        title: null,
                        summary: "Web-based system detects code-switching cyberbullying messages (English & Malay) on Twitter in Malaysia via sentiment analysis, aiding government agencies and NGOs in monitoring.",
                        lists: [
                            "Clean dataset through preprocessing the data, removing the stopwords and lemmatizing the words.",
                            "Perform exploratory data analysis to identify outliers and imbalance of dataset.",
                            "Tokenize, train, test and compare models built using machine learning and deep learning algorithms.",
                            "Scrape, classify, calculate, and visualize cyberbullying tweets with interactive bar and map charts on the website.",
                        ]
                    }
                ]
            }
        },
        {
            slug: "dengue-report",
            title: "Dengue Report",
            content: {
                images: [
                    DRPicture1,
                    DRPicture2,
                ],
                title: "Dengue Report System",
                date: null,
                role: "Java",
                categories: [
                    {
                        slug: null,
                        title: null,
                        summary: "Desktop-based system displays static dengue case data via report format, using Java alongside Swing.",
                        lists: [
                            "Demonstrate concept of functional programming including pure functions and currying.",
                        ]
                    }
                ]
            }
        },
        {
            slug: "accommodation-management",
            title: "Accommodation Management",
            content: {
                images: [
                    AMPicture1,
                    AMPicture2,
                    AMPicture3,
                    AMPicture4,
                    AMPicture5,
                ],
                title: "Accommodation Management System",
                date: null,
                role: "Java, SQL Server",
                categories: [
                    {
                        slug: null,
                        title: null,
                        summary: "Desktop-based system involves management of university accommodation with the ability to record and generate receipt upon payments.",
                        lists: [
                            "Demonstrate the understanding of OOP concepts comprising inheritance and polymorphism.",
                            "Deepen understanding of the design principle of minimalism.",
                        ]
                    }
                ]
            }
        },
        {
            slug: "restaurant-reservation",
            title: "Restaurant Reservation",
            content: {
                images: [
                    RRPicture1,
                    RRPicture2,
                    RRPicture3,
                    RRPicture4,
                    RRPicture5,
                ],
                title: "Restaurant Reservation System",
                date: null,
                role: "HTML, CSS, JS, PHP, MySQL",
                categories: [
                    {
                        slug: null,
                        title: null,
                        summary: "Developed a comprehensive web-based restaurant reservation system, integrating seamless booking functionalities with robust management tools for efficient table oversight and customer service enhancement.",
                        lists: [
                            "Demonstrate the comprehension of designing a full-fledged website with components communicating between front-end and back-end.",
                            "Exposed to the extensive considerations needed when developing system attuned for the business, especially preventing conflict of restaurant reservation timing.",
                            "Deepen understanding of session-based authentication.",
                        ]
                    }
                ]
            }
        },
    ],
    "certification": [
        {
            slug: "aws-sa-associate",
            title: "AWS-SA Associate",
            content: {
                images: [
                    AWSSALogo
                ],
                title: "AWS Solutions Architect - Associate",
                date: "Oct 2025 - Oct 2022",
                role: null,
                categories: [
                    {
                        slug: null,
                        file: AWSSACertificate,
                        lists: [],
                    }
                ],
            }
        },
        {
            slug: "aws-cp",
            title: "AWS-CP",
            content: {
                images: [
                    AWSCPLogo
                ],
                title: "AWS Cloud Practitioner",
                date: "Oct 2024 - Oct 2021",
                role: null,
                categories: [
                    {
                        slug: null,
                        file: AWSCPCertificate,
                        lists: [],
                    }
                ],
            }
        },
        {
            slug: "flutter-and-dart",
            title: "Flutter & Dart",
            content: {
                images: [
                    FlutterLogo
                ],
                title: "Flutter & Dart - Udemy ",
                date: "Nov 2020",
                role: null,
                categories: [
                    {
                        slug: null,
                        file: FlutterCertificate,
                        lists: [],
                    }
                ],
            }
        },
    ],
}