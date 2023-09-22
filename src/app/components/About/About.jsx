import data from "../../data/about.json";

const About = () => {
  return (
    <section id="about" className="pb-10 pt-28">
      <div className="container">
        <h1 className="text-orange text-6xl text-center mb-6 font-bold">
          {data.about.title}
        </h1>
        <p className="text-main text-base text-center">
          {data.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
