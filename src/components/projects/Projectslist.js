import SmartHomeLogo from "../../assets/images/aleslogo.jpg";
import Portfolio from "../../assets/images/Portfolio.PNG";
import PhotoPortfolio from "../../assets/images/photo-portfolio.png";
import Restaurant from "../../assets/images/restaurant.png";
import attorney from "../../assets/images/attorney.png";
import cypress from "../../assets/images/cypress.png";
import crypto_image from "../../assets/images/Cryptoapp.png";
import parking_lot from "../../assets/images/parking-lot.png";
import photo_portfolio_video from "../../assets/videos/photo-portfolio.mp4";
import restaurant_video from "../../assets/videos/restaurant.mp4";
import smarthome_video from "../../assets/videos/smarthome.mp4";
import testimonial_video from "../../assets/videos/testimonial.mp4";
import crypto_video from "../../assets/videos/crypto_app.mp4";

const projectList = [
  {
    id: 1,
    image: SmartHomeLogo,
    title: "Smart Home System",
    github: "https://github.com/alesberesik22/diplomovka",
    demo: "https://github.com",
    video: smarthome_video,
    tag: "React JS, Python, Testing, Firebase, Material UI, Axios, Router-Dom",
    description:
      "Smart home system that allows to add ZigbBee devices into the system and controll them manually over web site or set up automatizations that decide when and which devices should be turned on.",
  },
  {
    id: 2,
    image: Portfolio,
    title: "My Portfolio",
    github: "https://github.com/alesberesik22/OwnPortflio",
    demo: "https://github.com",
    video: "",
    tag: "React JS, Framer Motion, Router-Dom, Parallax",
    description:
      "My personal portfolio with my CV, informations skills and project that I am making.",
  },
  {
    id: 3,
    image: PhotoPortfolio,
    title: "Portfolio for a photograph",
    github: "https://github.com/alesberesik22/photo-portfolio",
    demo: "https://github.com",
    video: photo_portfolio_video,
    tag: "React JS, Router-Dom, GithuActions",
    description:
      "Portfolio web site for a photograph. Part of the web site is gallery, where we can select images shown from particular event. ",
  },
  {
    id: 4,
    image: Restaurant,
    title: "Restaurant web site",
    github: "https://github.com/alesberesik22/restaurant",
    demo: "https://github.com",
    video: restaurant_video,
    tag: "React JS,TypeScript, Node JS, PostgreSQL, Axios, Router-Dom, Docker",
    description:
      "Web for restarant with their history, opening times, menu, about and last part is reservation, where user can select any table and make a reservation for any hour and day.",
  },
  {
    id: 5,
    image: attorney,
    title: "Attorney web site",
    github: "https://github.com/alesberesik22/attorney",
    demo: "https://github.com/",
    video: testimonial_video,
    tag: "React JS,TypeScript, Framer motion, Router-dom",
    description:
      " Application that shows all important informations about lawyer. Application represents all achievements, personal informations and contact form.",
  },
  {
    id: 6,
    image: cypress,
    title: "Cypress POM model",
    github: "https://github.com/alesberesik22/cypress_pom",
    demo: "https://github.com/",
    video: "",
    tag: "Cypress, TypeScript, Docker, Jenkins, GithubActions",
    description:
      "Application that tests website from login, error message and entering shop after successfull login. Tests are build using GithubActions and results are sent to Cypress Dashboard. Docker builds image of actual version of tests and sends image versions to Docker Hub.",
  },
  {
    id: 7,
    image: parking_lot,
    title: "Parking lot",
    github: "https://github.com/alesberesik22/parkinglot",
    demo: "https://github.com/",
    video: "",
    tag: "React JS, Node JS, Docker, GithubActions",
    description:
      "Parking lot with all informations about free parking spaces detected by camera. Camera is connected to Raspberry PI with machine lerning camera recognises free parking spaces. Work in progress",
  },
  {
    id: 8,
    image: crypto_image,
    title: "Crypto app",
    github: "https://github.com/alesberesik22/crypto_page",
    demo: "https://github.com/alesberesik22/crypto_page",
    video: crypto_video,
    tag: "React JS, Redux, Ant Design, Chart JS",
    description:
      "Crypto application with all informations about Cryptos. User can see price graph, read topics about selected crypto.",
  },
];
export default projectList;
