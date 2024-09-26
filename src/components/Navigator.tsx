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
        label: 'About me',
        Icon: UserIcon
    },
    {
        id: 'work-experience',
        href: '/work-experience',
        label: 'Work experience',
        Icon: WorkIcon
    },
    {
        id: 'projects',
        href: '/projects',
        label: 'Projects',
        Icon: ProjectIcon
    },
    {
        id: 'education',
        href: '/education',
        label: 'Education',
        Icon: EducationIcon
    },
    {
        id: 'skills',
        href: '/skills',
        label: 'Skills',
        Icon: SkillsIcon
    },
    {
        id: 'cv-networks',
        href: '/cv-networks',
        label: 'CV & networks',
        Icon: NetworkIcon
    }
];

export default function Navigator ({language, translations} : Props) {
    const [itemHovering, setItemHovering] = useState<string | null>(null)
    const [currentPath] = useState<string>(window.location.pathname);

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
                            href={getRelativeLocaleUrl(language, item.href)}
                            aria-label={translations[`nav.${item.id}`] as string}
                            onMouseEnter={() => setItemHovering(getRelativeLocaleUrl(language, item.href))}
                            onMouseLeave={() => setItemHovering(null)}
                            className="p-3 w-140 md:h-24 text-sm text-center content-center rounded-xl"
                        >
                            <item.Icon
                                filled={itemHovering === getRelativeLocaleUrl(language, item.href) || currentPath === getRelativeLocaleUrl(language, item.href)}
                                duotone={currentPath === getRelativeLocaleUrl(language, item.href) && itemHovering !== getRelativeLocaleUrl(language, item.href)}
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
