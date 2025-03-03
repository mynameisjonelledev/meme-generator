import trollFace from "../assets/troll-face.png"
import githubLogo from "../assets/github.svg"


export function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} />
            <h1>Meme Generator</h1>
            
            <div className="github con">
            <a href="https://github.com/mynameisjonelledev"><img src={githubLogo} alt="github logo" className="github-logo"/></a>
            </div>
            
        </header>
    )
}