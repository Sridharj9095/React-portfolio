function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 max-w-6xl mx-auto px-4 py-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Experience</h2>

      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold">
          Web Developer – Avenstek Solutions Pvt Ltd., Chennai, TN
        </h3>
        <p className="text-gray-500">July 2023 – Present</p>

        <div className="mt-4 max-w-2xl mx-auto text-left space-y-4 text-gray-700">
          <p>
            As a React developer at Avenstek Solutions, I focused on building
            responsive, maintainable UI components using React.js and
            TypeScript. My responsibilities included transforming UI/UX
            wireframes into production-ready code and ensuring consistency
            across modern browsers.
          </p>
          <p>
            I played a key role in optimizing application performance by
            implementing memoization techniques (useMemo/useCallback) and
            applying throttling and debouncing logic for performance-critical
            features.
          </p>
          <p>
            Additionally, I contributed to scalable architecture through modular
            design, integrated Redux and Context API for effective state
            management, and collaborated closely with cross-functional teams to
            align development with business goals.
          </p>
          <p>
            Code quality and maintainability were reinforced through frequent
            peer code reviews and strict adherence to modern development best
            practices.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-2 text-center">Skill Set</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "TypeScript",
            "Redux",
            "Jest",
            "NPM",
            "Webpack",
            "Git",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Postman",
            "Bootstrap",
            "Tailwind CSS",
            "Web Inspector",
            "Figma",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-600 hover:text-white hover:shadow-md cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
