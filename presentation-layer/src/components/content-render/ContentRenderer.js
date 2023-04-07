import React from "react";
import "./ContentRenderer.css";
import { ImArrowRight } from "react-icons/im";

export const Content = ({ data }) => {
  const { mainHeading, mainContent, list } = data;
  return (
    <>
      <div className="content-header">
        <h3>{mainHeading}</h3>
      </div>
      <div className="content-body">
        {mainContent && (
          <h4>
            <span style={{ color: "#000" }}>
              <ImArrowRight />
            </span>{" "}
            {mainContent}
          </h4>
        )}
        {list.length > 0 && list[0].item[0].content
          ? list.map(({ heading, item }, index) => (
              <article key={index}>
                {heading && <h3>{heading}</h3>}
                <ul>
                  {item.map(({ title, content }, index) => (
                    <li key={index}>
                      <span>{title && title.toUpperCase()}</span>{" "}
                      {title
                        ? content
                        : content.charAt(0).toUpperCase() + content.slice(1)}
                    </li>
                  ))}
                </ul>
              </article>
            ))
          : null}
      </div>
    </>
  );
};
