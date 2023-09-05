import "./socialLinks.css"

export default function SocialLinks(props) {
  return (
    <a href={props.href} target="_blank">{props.social}</a>
  )
}