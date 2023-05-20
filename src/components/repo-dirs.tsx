import Link from "next/link";

interface RepoDirsProps {
    params: {
        reposId: string
    }
}

async function fetchRepoContents(reposId: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
        `https://api.github.com/repos/adenkesuma/${reposId}/contents`, {
            next: {
                revalidate: 60
            }
        }
    );
    const contents = await response.json();
    return contents;
}

const RepoDirs = async ({ params } : RepoDirsProps ) => {
    const contents = await fetchRepoContents(params.reposId);
    console.log(contents)
    const dirs = contents.filter((content : { type: string }) => content.type === "dir");

    return (
        <div className="mt-4">
            <h3 className="font-semibold text-[18px] mb-2">Directories</h3>
            <ul>
                {dirs.map((dir : { path: string }) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${params.reposId}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoDirs;