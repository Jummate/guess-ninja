import React from "react";

const Content = ({ data }) => {
  const { mainHeading, mainContent, list } = data;
  return (
    <section>
      <h2>{mainHeading}</h2>
      <h4>{mainContent}</h4>
      {list.length > 0
        ? list.map(({ heading, item }, index) => (
            <article key={index}>
              {heading && <h5>{heading}</h5>}
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
    </section>
  );
};

export default Content;
