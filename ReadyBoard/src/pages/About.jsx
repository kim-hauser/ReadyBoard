function About() {
  return (
    <div className="page">
      <h1>About ReadyBoard</h1>

      <section className="card">
        <h2>What is ReadyBoard?</h2>
        <p>
          ReadyBoard is a lightweight change management dashboard designed to
          simplify how teams track and execute change requests.
        </p>
        <p>
          It focuses on clarity, speed, and usability—helping users quickly
          identify priorities without getting lost in complex systems.
        </p>
      </section>

      <section className="card">
        <h2>Who is it for?</h2>
        <ul>
          <li>Change Managers overseeing workflows</li>
          <li>Change Owners responsible for execution</li>
          <li>Teams that need better visibility into change activity</li>
        </ul>
      </section>

      <section className="card">
        <h2>Project Context</h2>
        <p>
          This application was built as part of a front-end project to
          demonstrate routing, component structure, and UI design using React.
        </p>
      </section>

      <section className="card">
        <h2>About the Developer - Kim Hauser</h2>
        <p>
          Howdy! My name is Kim, and I’m currently part of the LaunchCode Women+ 
          Part-Time October 2025 cohort. When I’m not coding, I work in IT supporting 
          Microsoft 365 and Atlassian solutions.
        </p>

        <p>
          I love learning new things and have a wide range of hobbies. I’m especially 
          fascinated by horses and enjoy spending time at my local barn. I also enjoy 
          video games, reading, and the occasional weightlifting session.
       </p>

        <p>
          I firmly believe there’s no such thing as a too-good user experience.
       </p>
      </section>

      <section className="links">
        <a href="https://www.linkedin.com/in/kimberlyhauser/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
        </a>
        <a href="https://github.com/kim-hauser/" target="_blank" rel="noopener noreferrer">
            View my GitHub
        </a>
      </section>
    </div>
  )
}

export default About