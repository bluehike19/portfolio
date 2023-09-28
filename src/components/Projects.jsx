import React, { useEffect, useState } from "react";
import InfoData from "./data/InfoData";

const Projects = () => {
  const smallScreenBreakpoint = 600;
  const [columns, setColumns] = useState(getInitialColumns());

  // const columns = window.innerWidth < smallScreenBreakpoint ? 1 : 3;

  function getInitialColumns() {
    return window.innerWidth < smallScreenBreakpoint ? 1 : 3;
  }

  useEffect(() => {
    const handleResize = () => {
      const newColumns = window.innerWidth < smallScreenBreakpoint ? 1 : 3;
      if (newColumns !== columns) {
        setColumns(newColumns);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columns]);

  return (
    <>
      <h1 className="projects">
        PROJECTS ~
        <span className="projects-span">
          (Currently working on them, Soon I will be Updating!)
        </span>
      </h1>
      <div className="card-container">
        {InfoData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category">
            <h2 className="category-title">{category.title}</h2>
            <div className="card-row">
              {category.cards.map((card, cardIndex) => (
                <div key={card.id} className="card">
                  <img src={card.image} alt={card.title} />
                  <h3>{card.cardTitle}</h3>
                  <p>{card.description}</p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
