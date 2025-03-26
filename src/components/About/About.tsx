import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hello! My name is Bella and I am from Boulder, Colorado. I am an introvert at heart but with some extroverted qualities. I love to meet new people and take risks: Whether it be through learning new things, pushing myself outside of my comfort zone or challenging myself to grow.
      </p>
      <p>
        I absolutely love learning new skills and challenging myself in
        different respects. To learn more about what I've been working on, feel
        free to check out my <a href="https://github.com/wderocco8">GitHub</a>{" "}
        😁.
      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}
