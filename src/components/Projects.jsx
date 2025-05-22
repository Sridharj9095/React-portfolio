import images from "../assets/img";
import ProjectCarousel from "../components/ProjectCarousel";

const projects = [
  {
    id: 1,
    img: images.dogbible,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/Dogbible",
    live: "https://dogbible.netlify.app/",
    title: "Dogbible Petshop",
    alt: "Dogbible Project",
    category: "html",
  },
  {
    id: 2,
    img: images.childrenNgo,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/NGO",
    live: "https://ngo-childcare.netlify.app/",
    title: "Children NGO",
    alt: "Children NGO",
    category: "html",
  },
  {
    id: 3,
    img: images.poplab,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/Poplab",
    live: "https://poplab-lollipop.netlify.app/",
    title: "Poplab Music",
    alt: "Poplab Project",
    category: "html",
  },
  {
    id: 4,
    img: images.onepage,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Onepage",
    live: "https://onepage-nika.netlify.app/",
    title: "Onepage Bootstrap",
    alt: "Onepage Project",
    category: "html",
  },
  {
    id: 5,
    img: images.linkedin,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Linkedin",
    live: "https://linked-in-speed.netlify.app/",
    title: "LinkedIn Clone",
    alt: "LinkedIn Clone",
    category: "html",
  },
  {
    id: 6,
    img: images.bakersmart,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BakersMart",
    live: "https://bakersmart.netlify.app/",
    title: "Bakersmart Carousel",
    alt: "Bakersmart",
    category: "html",
  },
  {
    id: 7,
    img: images.restaurent,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Sample",
    live: "https://bootstrap-sample.netlify.app/",
    title: "Restaurant Template",
    alt: "Restaurant Template",
    category: "html",
  },
  {
    id: 8,
    img: images.javascriptForm,
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/Javascript/FormValidate",
    live: "https://javascript-form-validate.netlify.app/",
    title: "JavaScript Form Validation",
    alt: "JavaScript Form Validation",
    category: "html",
  },
  {
    id: 9,
    img: images.adminPanel,
    github: "https://github.com/Sridharj9095/React-Admin-Panel-Frontend",
    live: "https://react2adminpanel.netlify.app/",
    title: "React Admin Panel",
    alt: "React Admin Panel",
    category: "react",
  },
  {
    id: 10,
    img: images.reactCalculator,
    github: "https://github.com/Sridharj9095/React-Calculator",
    live: "https://calculator-react-vite-tailwind.netlify.app/",
    title: "React Calculator",
    alt: "React Calculator",
    category: "react",
  },
  {
    id: 11,
    img: images.reactPagination,
    github: "https://github.com/Sridharj9095/Pagination-React",
    live: "https://react1pagination.netlify.app/",
    title: "React Pagination",
    alt: "React Pagination",
    category: "react",
  },
  {
    id: 12,
    img: images.reactTodolist,
    github: "https://github.com/Sridharj9095/Todo-List-React",
    live: "https://todolist-tailwind.netlify.app/",
    title: "React To-Do List",
    alt: "React To-Do List",
    category: "react",
  },
];

const Projects = () => {
  const htmlProjects = projects.filter((p) => p.category === "html");
  const reactProjects = projects.filter((p) => p.category === "react");

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-10 scroll-mt-16"
    >
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-black">React Projects</h3>
        <ProjectCarousel projects={reactProjects} />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-black">
          HTML, CSS & JavaScript Projects
        </h3>
        <ProjectCarousel projects={htmlProjects} />
      </div>
    </section>
  );
};

export default Projects;
