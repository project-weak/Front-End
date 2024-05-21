import './AboutusCard.css';
import linkedin from "../../images/linkedin-logo.png";

function AboutusCard( props) {
    const {name, image, description, href } = props;
    return (
    <div className={'aboutuscard'}>
        <img className='user-image' src={image} alt="personal img"/>
        <p>{name}</p>
        <p style={{fontSize:18}}>{description}</p>
        <a href={href} className="linkedin" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn profile" className="linkedin-img" />
        </a>    
    </div>
    );
  }
  
export default AboutusCard;


