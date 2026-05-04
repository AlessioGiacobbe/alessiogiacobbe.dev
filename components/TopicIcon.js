import {
    SiReact, SiTypescript, SiTailwindcss, SiLaravel, SiDocker,
    SiPostgresql, SiRedis, SiRust, SiNextdotjs, SiKubernetes,
    SiGoogleplay, SiAppstore,
} from 'react-icons/si';
import { FiMail, FiFileText, FiTwitter, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const icons = {
    react:       SiReact,
    typescript:  SiTypescript,
    tailwind:    SiTailwindcss,
    laravel:     SiLaravel,
    docker:      SiDocker,
    postgresql:  SiPostgresql,
    redis:       SiRedis,
    rust:        SiRust,
    next:        SiNextdotjs,
    kubernetes:  SiKubernetes,
    github:      FiGithub,
    arrowUpRight: FiArrowUpRight,
    mail:        FiMail,
    twitter:     FiTwitter,
    document:    FiFileText,
    googlePlay:  SiGoogleplay,
    appStore:    SiAppstore,
};

function TopicIcon({ iconName, size = 20, className = "" }) {
    const Icon = icons[iconName];
    return Icon ? <Icon size={size} className={className} /> : null;
}

export default TopicIcon
