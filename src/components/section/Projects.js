import Cards from "../Cards"
import styles from './Projects.module.css'
import project1 from '../../img/project1.svg'

function Projects() {
    return (
        <div className={styles.Projects} id="Projects">
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.projects_container}>
                <Cards
                    image={project1}
                    site={"https://jsol.netlify.app/"}
                    title={"Primeira LandingPage DNC"}
                    techs={"HTML, CSS, JS"}
                    description={"Projeto Front-End para se familiarizar com a estrutura dsds asa asasda asae um site Projeto Front-End para se familiarizar com a estrutura dsds asa asasda asae um site Projeto Front-End para se familiarizar com a estrutura dsds asa asasda asae um site"}
                    repo={"https://github.com/JSolRibeiro/projeto-landing-page"}
                />

                <Cards
                    image={project1}
                    site={"https://jsol.netlify.app/"}
                    title={"Primeira LandingPage DNC"}
                    techs={"HTML, CSS, JS"}
                    description={"Projeto Front-End para se familiarizar com a estrutura de um site"}
                    repo={"https://github.com/JSolRibeiro/projeto-landing-page"}
                />

                <Cards
                    image={project1}
                    site={"https://jsol.netlify.app/"}
                    title={"Primeira LandingPage DNC"}
                    techs={"HTML, CSS, JS"}
                    description={"Projeto Front-End para se familiarizar com a estrutura de um site"}
                    repo={"https://github.com/JSolRibeiro/projeto-landing-page"}
                />

                <Cards
                    image={project1}
                    site={"https://jsol.netlify.app/"}
                    title={"Primeira LandingPage DNC"}
                    techs={"HTML, CSS, JS"}
                    description={"Projeto Front-End para se familiarizar com a estrutura de um site"}
                    repo={"https://github.com/JSolRibeiro/projeto-landing-page"}
                />

                <Cards
                    image={project1}
                    site={"https://jsol.netlify.app/"}
                    title={"Primeira LandingPage DNC"}
                    techs={"HTML, CSS, JS"}
                    description={"Projeto Front-End para se familiarizar com a estrutura de um site"}
                    repo={"https://github.com/JSolRibeiro/projeto-landing-page"}
                />
            </div>
        </div>
    )
}
export default Projects