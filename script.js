const githubUsername = 'JoshyDevRL';

async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repos = await response.json();
    const repoList = document.getElementById('repo-list');

    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo');

        repoElement.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description ? repo.description : ''}</p>
            <a href="${repo.html_url}" target="_blank">View Project</a>
        `;
        repoList.appendChild(repoElement);
    });
}

fetchRepos();
