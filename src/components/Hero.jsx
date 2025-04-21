function Hero() {
  return (
    <main
      id="portfolio"
      className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10"
    >
      <div className="h-[350px] w-[350px] rounded-full overflow-hidden">
        <img
          src="src/assets/img/profile-pic.jpeg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="mb-2">Hello, I'm</p>
        <h1 className="text-4xl font-bold">Sridhar Jeganathan</h1>
        <p className="text-xl text-gray-500 font-semibold">
          MERN Stack Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/src/assets/Sridhar_Jeganathan_-_Full_Stack_Developer_1.pdf"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-300"
            target="_blank"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-gray-500 text-gray-500 px-4 py-2 rounded-full hover:bg-gray-500 hover:text-white active:bg-gray-600 active:text-white transition-colors duration-300"
          >
            Contact Info
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/sridhar-jeganathan-681b992a6/"
            target="_blank"
            title="LinkedIn"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-2.5 px-3 rounded-full leading-[0] flex items-center justify-center"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://github.com/Sridharj9095"
            target="_blank"
            title="GitHub"
            aria-label="GitHub"
            rel="noopener noreferrer"
            className="bg-black text-white p-2.5 px-3 rounded-full leading-[0] flex items-center justify-center"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
