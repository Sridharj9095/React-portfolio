function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Contact Information
      </h2>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:sridharjeganathan96@gmail.com"
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-300"
        >
          <i className="fas fa-envelope"></i> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sridhar-jeganathan-681b992a6/"
          target="_blank"
          className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600 active:text-white transition-colors duration-300"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
