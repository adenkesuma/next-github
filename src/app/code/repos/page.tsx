interface ReposProps {};

export const metadata = {
    title: 'Repository',
    description: 'Repository page'
}

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/adenkesuma/repos');
    const repos = await response.json();
    return repos;
}

const Repos = async ({}) => {
    const repos = await fetchRepos();

    return (
        <div>
            <h1>Repository</h1>
            <p>{repos[0].name}</p>
        </div>
    )
}

export default Repos;