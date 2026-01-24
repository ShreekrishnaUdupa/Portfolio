import DeploymentDiagram from '../../assets/deployment.jpeg';

export default function Home () {
  return (
    <>
    <br></br>
      <div>
        <div> Welcome user from a beautiful part of the internet! This website is self-hosted as illustrated below.</div>
        Please note that the frontend in itself is in it's building stage & will be beautified using React & Tailwindcss soon.<br />
        You can check the progress at this<a href="https://github.com/ShreekrishnaUdupa/Portfolio" style={{ color: 'blue' }}> Github Repo </a>

        <br />

        <div>
          Contact Details: 
          <a href="/Shreekrishna-Resume.pdf" style={{ color: 'blue' }}> Resume,  </a>
          <a href="mailto:ShreekrishnaUdupa@gmail.com" style={{ color: 'blue' }}> Email, </a>
          <a href="https://www.linkedin.com/in/shreekrishnaudupa/" style={{ color: 'blue' }}> LinkedIn </a>
        </div>
      </div>

    <div>
      <img src={DeploymentDiagram} width/>
    </div>
    </>
  )
}
