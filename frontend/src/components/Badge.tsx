import cx from "classnames"
import Fivesvg from "../assets/svgs/5.svg"
interface BadgeProps{

    className?:string
    color?:"default" |"primary" | "secondary" | "secondary" | "success" | "danger"
    img?:string
    alt?:string
    size?:"sm" |"md" | "lg"
    border?:"none"| "sm" | "md" | "lg"
    shadow?: "none" |"sm" | "md" | "lg" | "xl" |"2xl" | "inner"
    
}
const Badge =({
className,
color = "default",
img,
alt = 'badge',
size= "sm",
shadow= "none"

}: BadgeProps) =>{
    return(
        <div id="badge" className={cx (className, `color-${color} size-${size} shadow-${shadow} `)} >
            {
            img ?
            (<img src={img} alt={alt}/>):
            <img src={Fivesvg} alt="" />
            }
        
            
        </div>
    )
}
export default Badge;