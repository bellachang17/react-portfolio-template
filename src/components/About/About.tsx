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
        Ladies and Gentlemen, my name is Poopy Bella, and I am very not funny.
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
