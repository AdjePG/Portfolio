import { Colors } from "@/others/types"

interface Props {
    className?: string
    duotone?: boolean
    filled?: boolean
    color?: Colors
}

export default function UserIcon({className , duotone, filled, color = Colors.CURRENT_COLOR} : Props) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
            duotone ? 
                filled ?
                    <>
                    <circle cx="12" cy="6" r="4" fill={color}/>
                    <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" fill={color}/>
                    </>
                :
                    <>
                    <circle cx="12" cy="6" r="4" stroke={color} strokeWidth="1.5"/>
                    <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" stroke={color} strokeWidth="1.5"/>
                    </>
            :
                filled ?
                    <>
                    <circle cx="12" cy="6" r="4" fill={color}/>
                    <ellipse cx="12" cy="17" rx="7" ry="4" fill={color}/>
                    </>
                :
                    <>
                    <circle cx="12" cy="6" r="4" stroke={color} strokeWidth="1.5"/>
                    <ellipse cx="12" cy="17" rx="7" ry="4" stroke={color} strokeWidth="1.5"/>
                    </>
        }
        </svg>
    )
}


