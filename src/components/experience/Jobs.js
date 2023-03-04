import descartes from "../../assets/companies/descartes.png";
import siemens from "../../assets/companies/siemens.png";
import ness from "../../assets/companies/ness.png";
import react from "../../assets/companies/react.png";
const jobs = [
  {
    name: "QA tester",
    company: "Descartes",
    description:
      "I was working on manual testing of a software. Also creating Test Cases, bugs, " +
      "User stories and other test activities. Used tools were Postman, Azure",
    year: "2020-2021",
    image: descartes,
  },
  {
    name: "Automation tester",
    company: "Siemens",
    description:
      "As automation tester i was working on updating automation tests " +
      "and creating new tests. Used tools were Azure Devops, Visual Studio Code, " +
      "GIT, and proprietary tool for automation tests written in C",
    year: "2021-2022",
    image: siemens,
  },
  {
    name: "Software Engineer",
    company: "Ness",
    description:
      // "As manual software test I worked with Jenkins, Confluence, Jira and DBeaver to create new Test Cases, manually test software, communicate with developers",
      " ",
    year: "2022-2022",
    image: ness,
  },
  {
    name: "React developer | Automation engineer",
    company: " ",
    description:
      "Responsible for creating web app in React for people management in a company, " +
      "CV management, and creating a dashboard with tech stack calendar with events " +
      "and information about comapany.Also registered users can create their own " +
      "invoices for the company and see the payment status. As automation engineer " +
      "my role was to set up test automation in cypress using page object model and app actions patterns.",
    year: "2022-present",
    image: react,
  },
];

export default jobs;
