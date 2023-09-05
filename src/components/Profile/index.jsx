/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import SocialLinks from "../SocialLinks"
import "./profile.css"

function Profile(props){
  return (
    <>
      <div className="container">
        <img src={props.src} alt="" />
        <h1 className="name">{props.name}</h1>
        <p className="bio">{props.bio}</p>
        <p className="phone">{props.phone}</p>
        <p className="email">{props.email}</p>
        <div className="links">
          <SocialLinks
            href="https://github.com/lucivandosousa"
            social="GitHub"
          />
          <SocialLinks
            href="https://www.linkedin.com/in/lucivandosousa/"
            social="Linkedin"
          />
          <SocialLinks
            href="https://www.instagram.com/lucivando.sousa/"
            social="Instagram"
          />
        </div>
      </div>
    </>
  )
}

export default Profile