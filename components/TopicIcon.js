import ReactIcon from "../assets/react.svg";
import KubernetesIcon from "../assets/kubernetes.svg"
import CpuIcon from "../assets/cpu.svg"
import DockerIcon from "../assets/docker.svg"
import LaravelIcon from "../assets/laravel.svg"
import SymfonyIcon from "../assets/symfony.svg"
import NextIcon from "../assets/nextjs.svg"
import IsaacIcon from "../assets/isaac.svg"
import { GitHub, ArrowUpRight, Mail, Twitter, FileText } from 'react-feather';

const icons = {
    react: ReactIcon,
    next: NextIcon,
    kubernetes: KubernetesIcon,
    cpu: CpuIcon,
    docker: DockerIcon,
    laravel: LaravelIcon,
    symfony: SymfonyIcon,
    isaac: IsaacIcon,
    github: GitHub,
    arrowUpRight: ArrowUpRight,
    mail: Mail,
    twitter: Twitter,
    document: FileText
};

function TopicIcon({ iconName = "react", customStyles = "scale-60" }) {
    const SelectedIcon = icons[iconName];
    return <>
        {SelectedIcon && <SelectedIcon className={customStyles} />}
    </>
}

export default TopicIcon