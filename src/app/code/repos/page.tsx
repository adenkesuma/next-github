import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export const metadata = {
    title: 'Repository',
    description: 'Repository page'
}

interface ReposProps {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
};

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/adenkesuma/repos');
    const repos = await response.json();
    return repos;
}

const Repos = async ({}) => {
    const repos = await fetchRepos();

    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-6 font-bold text-[40px]">Repositories</h1>
            <ul className="flex flex-col gap-6">
                {repos.map((repo : ReposProps) => (
                    <li className="bg-zinc-200 rounded-lg px-6 py-4" key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3 className="font-bold text-[23px]">{ repo.name }</h3>
                            <p className="text-[16px] font-semibold text-zinc-600 mb-6">{ repo.description }</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <FaStar /> <span>{ repo.stargazers_count }</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCodeBranch /> <span>{ repo.forks_count }</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEye /> <span>{ repo.watchers_count }</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Repos;