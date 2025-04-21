const projects = [
  {
    img: "src/assets/img/dogbible.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/Dogbible",
    live: "https://dogbible.netlify.app/",
    alt: "Dogbible Project",
    title: "Dogbible Petshop",
  },
  {
    img: "src/assets/img/children-ngo.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/NGO",
    live: "https://ngo-childcare.netlify.app/",
    alt: "Children NGO",
    title: "Children NGO",
  },
  {
    img: "src/assets/img/poplab.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/Poplab",
    live: "https://poplab-lollipop.netlify.app/",
    alt: "Poplab Project",
    title: "Poplab Music",
  },
  {
    img: "src/assets/img/onepage.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Onepage",
    live: "https://onepage-nika.netlify.app/",
    alt: "Onepage Project",
    title: "Onepage Bootstrap",
  },
  {
    img: "src/assets/img/linkedin.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Linkedin",
    live: "https://linked-in-speed.netlify.app/",
    alt: "LinkedIn Clone",
    title: "LinkedIn Clone",
  },
  {
    img: "src/assets/img/bakersmart.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BakersMart",
    live: "https://bakersmart.netlify.app/",
    alt: "Bakersmart",
    title: "Bakersmart Carousel",
  },
  {
    img: "src/assets/img/restaurent.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/HTML/BOOTSTRAP/Sample",
    live: "https://bootstrap-sample.netlify.app/",
    alt: "Restaurant Template",
    title: "Restaurant Template",
  },
  {
    img: "src/assets/img/javascript-form.png",
    github:
      "https://github.com/Sridharj9095/Working-Area/tree/main/DreamTech/Javascript/FormValidate",
    live: "https://javascript-form-validate.netlify.app/",
    alt: "JavaScript Form Validation",
    title: "JavaScript Form Validation",
  },
  {
    img: "src/assets/img/admin-panel.png",
    github: "https://github.com/Sridharj9095/React-Admin-Panel-Frontend",
    live: "https://react2adminpanel.netlify.app/",
    alt: "React Admin Panel",
    title: "React Admin Panel",
  },
  {
    img: "src/assets/img/react-calculator.png",
    github: "https://github.com/Sridharj9095/React-Calculator",
    live: "https://calculator-react-vite-tailwind.netlify.app/",
    alt: "React Calculator",
    title: "React Calculator",
  },
  {
    img: "src/assets/img/react-pagination.png",
    github: "https://github.com/Sridharj9095/Pagination-React",
    live: "https://react1pagination.netlify.app/",
    alt: "React Pagination",
    title: "React Pagination",
  },
  {
    img: "src/assets/img/react-todolist.png",
    github: "https://github.com/Sridharj9095/Todo-List-React",
    live: "https://todolist-tailwind.netlify.app/",
    alt: "React To-Do List",
    title: "React To-Do List",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-xl active:shadow-xl transition-transform hover:-translate-y-1 active:-translate-y-1 duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.alt}
                title={project.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 active:scale-110"
              />
            </div>
            <div className="flex justify-around gap-4 py-2 border-t border-gray-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                title="GitHub Repository"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200 flex items-center justify-between leading-[0]"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                title="Live Demo"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200 leading-[0] flex items-center justify-center"
              >
                <i className="fas fa-link text-xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
