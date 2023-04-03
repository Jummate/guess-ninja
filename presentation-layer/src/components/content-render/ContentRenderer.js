import React from "react";
import "./ContentRenderer.css";

const Content = ({ data }) => {
  const { mainHeading, mainContent, list } = data;
  return (
    <section>
      <div className="content-header">
        <h3>{mainHeading}</h3>
      </div>
      <div className="content-body">
        <h5>{mainContent}</h5>
        {list.length > 0 && list[0].item[0].content
          ? list.map(({ heading, item }, index) => (
              <article key={index}>
                {heading && <h6>{heading}</h6>}
                <ul>
                  {item.map(({ title, content }, index) => (
                    <li key={index}>
                      {title && title} {content}
                    </li>
                  ))}
                </ul>
              </article>
            ))
          : null}
      </div>
    </section>
  );
};

export default Content;
