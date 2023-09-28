import React, { useEffect, useRef, useState } from "react";

const ScrollingImages = () => {
  const scrollSpeed = 1;
  const containerRef = useRef(null);

  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    let scrollInterval;

    // const container = containerRef.current;

    const scrollContainer = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
    };

    //     if (
    //       container.scrollLeft >=
    //       container.scrollWidth - container.clientWidth
    //     ) {
    //       container.scrollLeft = 0;
    //     }
    //   }
    // };

    scrollInterval = setInterval(scrollContainer, 16);
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageUrls = [
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
    "tech-images/html-css.png",
    "tech-images/tailwind.png",
    "tech-images/bootstrap.jpg",
    "tech-images/javascript-js-logo.png",
    "tech-images/git.png",
    "tech-images/react.png",
    "tech-images/typescript.png",
    "tech-images/node.png",
    "tech-images/mongo.png",
  ];
  return (
    <>
      <div className="scrolling-info">
        <h1>
          Those are some of the Technologies that I can work with at the Moment!
        </h1>
      </div>
      <div
        className="scroll-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="rotate-up">
          {imageUrls.map((imageUrls, index) => (
            <img key={index} src={imageUrls} alt={`Image ${index}`} />
          ))}
        </div>

        {/* <div className="rotate-down">
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ScrollingImages;
