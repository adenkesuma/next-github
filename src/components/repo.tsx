import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(reposId : string) {
    const response = await fetch(`
        https://api.github.com/repos/adenkesuma/${reposId}
    `, {
        next: {
            revalidate: 60
        }
    });

    const repo : RepoData = await response.json();
    return repo;
};

interface RepoProps {
    params: {
        reposId: string;
    }
}

type RepoData = {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
};

const Repo = async ({ params } : RepoProps) => {
    const repo = await fetchRepo(params.reposId);

    return (
        <div>
            <h3 className="font-semibold text-[24px]">{ repo.name }</h3>
            <p className="text-[16px] font-semibold text-zinc-200 mb-6">{ repo.description }</p>
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
        </div>
    );
};

export default Repo;