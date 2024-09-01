import { Colors } from "@/others/types"

interface Props {
    className?: string
    duotone?: boolean
    filled?: boolean
    color?: Colors
}

export default function EducationIcon({className, duotone, filled, color = Colors.CURRENT_COLOR} : Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" >
        {
            duotone ? 
                filled ?
                    <>
                    <path d="M14.2172 3.49965C12.7962 2.83345 11.2037 2.83345 9.78272 3.49965L3.0916 6.63659C2.0156 7.14105 1.73507 8.56352 2.25 9.54666L2.25 14.5C2.25 14.9142 2.58579 15.25 3 15.25C3.41421 15.25 3.75 14.9142 3.75 14.5V10.672L9.78281 13.5003C11.2038 14.1665 12.7963 14.1665 14.2173 13.5003L20.9084 10.3634C22.3639 9.68105 22.3639 7.31899 20.9084 6.63664L14.2172 3.49965Z" fill={color}/>
                    <path opacity="0.5" d="M5 11.2581L9.78281 13.5003C11.2038 14.1665 12.7963 14.1665 14.2173 13.5003L19 11.2581V16.6252C19 17.6333 18.4965 18.577 17.6147 19.0654C16.1463 19.8786 13.796 20.9998 12 20.9998C10.204 20.9998 7.8537 19.8786 6.38533 19.0654C5.5035 18.577 5 17.6333 5 16.6252V11.2581Z" fill={color}/>
                    </>
                :
                    <>
                    <path d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z" stroke={color} strokeWidth="1.5"/>
                    <path opacity="0.5" d="M2 8.5V14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                    <path opacity="0.5" d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                    </>
            :
                filled ?
                    <>
                    <path d="M14.2172 3.49965C12.7962 2.83345 11.2037 2.83345 9.78272 3.49965L3.0916 6.63659C2.0156 7.14105 1.73507 8.56352 2.25 9.54666L2.25 14.5C2.25 14.9142 2.58579 15.25 3 15.25C3.41421 15.25 3.75 14.9142 3.75 14.5V10.672L9.78281 13.5003C11.2038 14.1665 12.7963 14.1665 14.2173 13.5003L20.9084 10.3634C22.3639 9.68105 22.3639 7.31899 20.9084 6.63664L14.2172 3.49965Z" fill={color}/>
                    <path d="M5 12.9147V16.6254C5 17.6334 5.5035 18.5772 6.38533 19.0656C7.8537 19.8787 10.204 21 12 21C13.796 21 16.1463 19.8787 17.6147 19.0656C18.4965 18.5772 19 17.6334 19 16.6254V12.9148L14.854 14.8585C13.0296 15.7138 10.9705 15.7138 9.14607 14.8585L5 12.9147Z" fill={color}/>
                    </>
                :
                    <>
                    <path d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z" stroke={color} strokeWidth="1.5"/>
                    <path d="M2 8.5V14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                    </>
        }
        </svg>
    )
}
