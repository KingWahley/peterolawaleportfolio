import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";

const ProjectCard = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {data.map((d) => (
        <div
          className="project"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease"
          key={d.name}
        >
          <div className="project-card">
            <div className="project-thumbnail">
              <a href={d.preview}>
                <img src={d.thumbnail} alt={d.name} />
              </a>
            </div>
            <div className="project-description">
              <h5 className="project-title">{d.name}</h5>
              <p className="project-text">{d.description}</p>
              <div className="project-tools">
                <div className="tools-header">Tools</div>
                <div className="tools-icons">
                  {d.tools.map((tool, i) => (
                    <span className="tool" key={i}>
                      {/* <i className={`fab ${tool}`}></i> */}
                      {tool},
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="project-preview">
            <div className="preview-navs">
              <span className="code-base">
                <a href={d.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </span>
              <span className="view-live">
                <a href={d.preview} target="_blank" rel="noreferrer">
                  <i className="fas fa-globe"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="see-more-area">
        <button className="tour-btn">
          <a
            href="https://github.com/KingWahley"
            target="_blank"
            rel="noreferrer"
          >
            See More?
          </a>
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
