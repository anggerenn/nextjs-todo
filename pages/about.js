const About = () => {
  return (
    <>
      <h1 className="text-xl font-semibold text-center">About</h1>
      <p className="mt-2">
        This is an SPA for CRUD operations built using NextJS.
      </p>
      <a
        className="text-sm text-gray-500 border-b-2 border-gray-500 border-dotted hover:text-gray-900 hover:border-gray-900"
        target="_blank"
        href="https://github.com/anggerenn/nextjs-todo"
      >
        Source
      </a>
    </>
  );
};

export default About;
