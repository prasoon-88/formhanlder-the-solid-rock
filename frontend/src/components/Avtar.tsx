import cx from "classnames"
import Avtarsvg from "../assets/svgs/avatar.svg"
interface AvtarProps{

    className?:string
    color?:"default" |"primary" | "secondary" | "secondary" | "success" | "danger"
    img?:string
    alt?:string
    size?:"sm" |"md" | "lg"
    border?:"none"| "sm" | "md" | "lg"
    shadow? : "none" |"sm" | "md" | "lg"
}
const Avtar =({
className,
color = "default",
img,
alt = 'avtar',
size= "sm",
border ="none",
shadow="none",

}: AvtarProps) =>{
    return(
        <div id="avtar" className={cx (className, `color-${color} size-${size} border-${border} shadow-${shadow}`)} >
            {
            img ?
            (<img src={img} alt={alt}/>):
            <img src={Avtarsvg} alt="" />
            }
        
            
        </div>
    )
}
export default Avtar;