import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Siddardha Lankireddy",
  initials: "LS",
  url: "https://github.com/Siddardha21",
  location: "Cincinnati, OH",
  locationLink: "https://www.google.com/maps/place/cincinnati",
  description:
    "Developer, Designer, Photographer, Narrative genius....doing none of them well enough to commit.",
  summary:
    "Computer Science graduate with a strong foundation in Full-Stack Development, UI/UX Design, Data Science, and Graphic Design. Experienced in building scalable web applications, conducting ETL transformations, and managing large datasets. Passionate about leveraging technology and data to deliver innovative solutions. Proficient in modern tools and frameworks, with hands-on experience in cross-functional team environments. Freelance automotive photographer with collaborations with leading local car dealerships.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C",
    "C++",
    "SQL",
    "NoSQL",
    "Postgres",
    "ETL",
    "Apache NiFi",
    "Illustrator",
    "Figma",
    "UI/UX",
    "Technical Writing",
    "SEO",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "siddardhalankireddy@gmail.com",
    tel: "+1 765 771 9366",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Siddardha21",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sidddardha/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Sidddardha",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@InvertedLook9",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Purdue University",
      href: "https://pfw.edu",
      badges: [],
      location: "Fort Wayne, IN, United States",
      title: "Student Worker, Building Services and Management",
      logoUrl: "/purdue.png",
      start: "Jul 2023",
      end: "Dec 2023",
      description:
        "" },
    {
      company: "Hungry Howie's",
      href: "https://www.hungryhowies.com/",
      badges: [],
      location: "Fort Wayne, IN, United States",
      title: "Crew Member",
      logoUrl: "/hh.png",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "" },
    {
      company: "T-Hub Foundation",
      href: "https://t-hub.co/",
      badges: [],
      location: "Hyderabad, TS, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/thub.png",
      start: "Jan 2022",
      end: "Oct 2022",
      description:
      "Led the growth of a startup at T-Hub by driving innovation and developing technical solutions. Engineered scalable backend systems, optimizing REST API performance to enhance data retrieval speed by 25%. Revamped high-traffic web interfaces, improving cross-browser compatibility and DOM efficiency. Designed over 200 custom graphics, logos, and promotional materials to strengthen brand identity. Conducted user engagement analysis, leading to a 68% improvement in key metrics through targeted UX enhancements."    
    },
    {
      company: "IcfaiTech Entrepreneurship Club",
      href: "https://www.ifheindia.org/icfai-tech-school-hyderabad",
      badges: [],
      location: "Hyderabad, TS, India",
      title: "Graphic Designer & Mentor",
      logoUrl: "/icfai.png",
      start: "Dec 2020",
      end: "May 2022",
      description:
        "As a core committee member and student mentor, I organize activities that foster innovation from awareness to ideation and incubation. I’ve successfully organized 20+ online webinars, engaging with industry leaders on topics centered around entrepreneurship and the startup ecosystem."    
    },
    {
      company: "Ahex Technologies",
      href: "https://ahex.co/",
      badges: [],
      location: "Hyderabad, TS, India",
      title: "ETL Developer Intern",
      logoUrl: "/ahex.png",
      start: "Oct 2020",
      end: "Jan 2021",
      description:
        "Automated ETL pipelines using Pentaho, streamlining workflow efficiency by 38%, while refining data extraction from multiple sources including SQL, Oracle, flat files, and XML to optimize database operations. Developed and executed SQL scripts to eliminate performance bottlenecks, significantly improving database reliability, and enhanced data retrieval speed by 60% through index optimization, ensuring accurate and timely stakeholder reporting.",
    },
    {
      company: "Skillbanc INC",
      href: "https://www.linkedin.com/company/skillbanc/",
      badges: [],
      location: "Herndon, VA, United States",
      title: "Software Developer Intern",
      logoUrl: "/skillbanc.png",
      start: "Jul 2020",
      end: "Aug 2020",
      description:
        "Streamlined SVG object adjustments to enhance dashboard usability by 27%, built a robust testing suite to reduce errors in SVG modifications and improve application reliability, and integrated user feedback into iterative design cycles to refine dashboard functionality and boost efficiency by 15%.",
    },
  ],
  education: [
    {
      school: "Purdue University",
      href: "https://www.pfw.edu/",
      degree: "Master of Science in Computer Science (MS CS)",
      logoUrl: "/purdue.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "ICFAI University",
      href: "https://www.ifheindia.org/",
      degree: "Bachelor of Technology in Computer Science and Engineering (BTech CSE)",
      logoUrl: "/icfai.png",
      start: "2018",
      end: "2022",
    },
  ],

  hackathons: [
    {
      title: "University Parking Assistance Application",
      dates: "Sep - Dec 2024",
      description:
        "Developed a responsive web application design to streamline parking spot discovery and reservations for students and faculty. Conducted iterative scenario-based design enhancements, boosting user adoption by 20%.",
        image:"/me.png",
    },
    {
      title: "Rule-Based Expert System for Personalized Recommendations",
      dates: "Jan - Apr 2023",
      description:
        "Implemented expert systems and fuzzy logic to analyze customer preferences, delivering precise vehicle recommendations. Designed a personalized recommendation engine, improving customer satisfaction and decision-making.",
        image:"/me.png",
    },
    {
      title: "UniDive - A MERN Stack Web Application",
      dates: "Feb - May 2023",
      description:
        "Developed a web application using the MERN stack to help students navigate complexities of abroad/overseas education. Designed an interactive dashboard that optimized coursework and financial resource management.",
        image:"/me.png",
      },
    {
      title: "GIS-Based Soil Erosion Assessment in Nellore District",
      dates: "Jan - May 2021",
      description:
       "Utilized satellite imagery and GIS tools within ArcGIS to generate erosion risk maps, integrated USLE model factors through spatial analysis, and produced maps and reports detailing soil erosion-prone areas.",   
       image:"/me.png",
      },
    {
      title: "Spring Project - ATTIC - MERN-Based Study Material Repository",
      dates: "Jan - May 2021",
      description:
       "Contributed to ATTIC, a part of the MERN-based application designed as a structured data-storage model for study materials. Users can upload, access, and explore high-quality learning resources across various core study areas in multiple formats. The goal is to provide an engaging and efficient learning experience.",
       image:"/me.png",
      },
    {
      title: "Projectile Motion Calculator and Graph plotting",
      dates: "Oct - Nov 2018",
      description:
        "Built a comprehensive tool using C and GNUplot for calculating and visualizing projectile motion scenarios. Enabled users to input initial conditions and generate precise trajectory graphs for simulation purposes.",
        image:"/me.png",
    },
    
  ],
  
  projects: [
    {
      title: "B.A.T",
      description:
        "Capturing the Toyota Tundra was a thrill—its commanding stance and rugged charm made every shot feel powerful. The bold grille and muscular lines exude strength, while its off-road prowess speaks to adventure. Framing its raw capability against the backdrop of nature highlighted its essence as the ultimate workhorse.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tundra.png",
      video: "",
    },
    {
      title: "The Mighty Sequoia",
      description:
        "Photographing the Toyota Sequoia was an experience in size and elegance. Its bold yet refined design balances power and sophistication, making it stand out in any scene. The sheer presence of this full-size SUV, with its aggressive front fascia and luxurious interior, tells a story of adventure and comfort in one frame.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sequoia.png",
      video: "",
    },
    {
      title: "Taco Truck",
      description:
        "Shooting this midsize beast felt like capturing the spirit of exploration—its aggressive front, lifted stance, and off-road readiness made every frame dynamic. Whether parked on rocky terrain or splashing through trails, the Tacoma’s rugged character shined through the lens.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tacoma.png",
      video: "",
    },
    {
      title: "Chevy Silverado Z71",
      description:
        "Capturing it was nothing short of exhilarating. Its chiseled bodywork, signature front grille, and raw V8 power radiate confidence. The way it dominates the road, whether hauling or cruising, made for shots that scream durability, performance, and heritage.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/silverado.png",
      video: "",
    },  
    {
      title: "Corvette C8",
      description:
        "The Corvette C8 was pure adrenaline through my lens—its sculpted aerodynamics, mid-engine stance, and razor-sharp lines make it a work of art on wheels. Every frame felt alive with speed, from the aggressive headlights to the wide rear haunches. It’s not just a car; it’s an unleashed beast ready to devour the road.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/corvette.png",
      video: "",
    },
    {
      title: "Showroom Shots",
      description:
        "Designed, developed and sold animated UI components for developers.Designed, developed and sold animated UI components for developers.Designed, developed and sold animated UI components for developers.Designed, developed and sold animated UI components for developers.Designed, developed and sold animated UI components for developers.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/interior.png",
      video: "",
    },  
    {
      title: "HMMWV Humvee",
      description:
        "Shooting the Hummer Humvee was like capturing a war machine in its element. Its military-grade presence, rugged tires, and indestructible design tell a story of resilience. Every shot highlighted its utilitarian might, embodying a legacy built for the toughest terrains and the boldest adventurers.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hummerh1.png",
      video: "",
    },  
    {
      title: "Watts to Freedom",
      description:
        "The Hummer EV is a futuristic powerhouse, and every frame told a story of innovation meeting brute strength. Its boxy stance, aggressive lighting, and silent yet monstrous torque make it a sight to behold. Capturing it felt like witnessing the rebirth of an icon, redefining what an electric truck can be.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hummerev.png",
      video: "",
    }, 
    {
      title: "Michigan Diaries",
      description:
        "Photographing the Dodge Durango on the empty, misty roads of winter in Michigan was an experience of pure cinematic intensity. Through the dense fog, while its powerful stance stood defiant against the cold, desolate landscape. The eerie silence of the mist only amplified its commanding presence, making every shot feel raw, untamed, and full of wintery mystique.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/durango.png",
      video: "",
    },  
    {
      title: "Charger Pursuit",
      description:
        "Its imposing front end, sleek yet muscular profile, and pursuit-rated performance exude authority. Every shot captured its law-enforcement DNA—fast, intimidating, and built for the chase. It’s a machine that commands attention on and off the road.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/police.png",
      video: "",
    },  
    {
      title: "F.P.I.U",
      description:
        "Capturing the Explorer was all about showcasing power with purpose. Its blacked-out grille and commanding stance make it a force to be reckoned with. Whether staged for action or standing guard, the FPIU’s presence tells a story of speed, control, and authority.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/explorer.png",
      video: "",
    },  
    {
      title: "Born Of Pedigree SUV",
      description:
        "The Tata Harrier, set against the backdrop of vast village farm fields, was a sight to behold. Its sharp lines stood in striking contrast to the raw, earthy landscape. Capturing it amidst the open fields highlighted its rugged yet refined personality, blending modern sophistication with a spirit of adventure, truly at home in nature.",
      links: [
        {
          type: "View More Pictures",
          href: "https://drive.google.com/drive/folders/1rZQFfjY1yYjP-8a9KpG4bc0ljRoKgu-O?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/harrier.png",
      video: "",
    },  
  ],
} as const;
