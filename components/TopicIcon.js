import ReactIcon from "../assets/react.svg";
import KubernetesIcon from "../assets/kubernetes.svg"
import CpuIcon from "../assets/cpu.svg"
import DockerIcon from "../assets/docker.svg"
import LaravelIcon from "../assets/laravel.svg"
import SymfonyIcon from "../assets/Symfony.svg"
import NextIcon from "../assets/nextjs.svg"

const icons = {
    react: ReactIcon,
    next: NextIcon,
    kubernetes: KubernetesIcon,
    cpu: CpuIcon,
    docker: DockerIcon,
    laravel: LaravelIcon,
    symfony: SymfonyIcon
};

function TopicIcon({ iconName = "react" }) {
    const SelectedIcon = icons[iconName];
    return <>
        {console.log(iconName)}
        {iconName != undefined && SelectedIcon != undefined && <SelectedIcon className="scale-60" />}
    </>
}

export default TopicIcon