import { getRelativeLocaleUrl } from "astro:i18n"
import UserIcon from "@/icons/UserIcon"
import EducationIcon from "@/icons/EducationIcon"
import WorkIcon from "@/icons/WorkIcon"
import SkillsIcon from "@/icons/SkillsIcon"
import ProjectIcon from "@/icons/ProjectIcon"
import NetworkIcon from "@/icons/NetworkIcon"
import { useState } from "react"
import type { Translations } from "@/others/types"

interface Props {
    language: string
    translations: Translations
}

const items = [
    {
        id: 'about-me',
        href: '/about-me',
        name: 'About me',
        Icon: UserIcon
    },
    {
        id: 'work-experience',
        href: '/work-experience',
        name: 'Work experience',
        Icon: WorkIcon
    },
    {
        id: 'education',
        href: '/education',
        name: 'Education',
        Icon: EducationIcon
    },
    {
        id: 'projects',
        href: '/projects',
        name: 'Projects',
        Icon: ProjectIcon
    },
    {
        id: 'skills',
        href: '/skills',
        name: 'Skills',
        Icon: SkillsIcon
    },
    {
        id: 'cv-networks',
        href: '/cv-networks',
        name: 'CV & networks',
        Icon: NetworkIcon
    }
];

export default function Navigator ({language, translations} : Props) {
    const [itemHovering, setItemHovering] = useState<string | null>(null)
    const [currentPath] = useState<string>(window.location.pathname);

    const getUrl = (language : string, navLink : string) => {
        let url = import.meta.env.BASE_URL
        url += getRelativeLocaleUrl(language, navLink)
        
        return url
    }

    return (
        <nav>
            <ul className="list-none m-0 p-0 flex flex-row md:grid md:grid-cols-2 md:h-md-lg:block">
            {
                items.map((item) => (
                    <li 
                        key={item.id}
                        className="flex flex-col justify-center rounded-xl box-border transition-colors ease duration-200 hover:bg-[#ffffff54] select-none"
                    >
                        <a 
                            href={getUrl(language, item.href)}
                            onMouseEnter={() => setItemHovering(getUrl(language, item.href))}
                            onMouseLeave={() => setItemHovering(null)}
                            className="p-3 w-140 md:h-24 text-sm text-center content-center"
                        >
                            <item.Icon
                                filled={itemHovering === getUrl(language, item.href) || currentPath === getUrl(language, item.href)}
                                duotone={currentPath === getUrl(language, item.href) && itemHovering !== getUrl(language, item.href)}
                                className="w-7 h-7 mx-auto" 
                            />
                            <p className="hidden md:inline-block">{translations[`nav.${item.id}`]}</p>
                        </a>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}
