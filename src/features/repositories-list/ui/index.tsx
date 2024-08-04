import { GitHubRepo } from "../types";

function RepositoriesList({
  repos,
  reposLength,
}: {
  repos: GitHubRepo[];
  reposLength: number | undefined;
}) {
  return (
    <div>
      <h2 className="text-[32px] font-semibold mb-7">
        Repositories ({reposLength})
      </h2>
      <div className="flex flex-col gap-y-6">
        {repos?.map((repo: GitHubRepo) => (
          <div
            key={repo.id}
            className="w-[877px] h-28 rounded-md py-6 pl-8 bg-[#FFF]"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="text-[#0064EB] leading-7 text-2xl font-medium"
            >
              {repo.name}
            </a>
            <p className="mt-4 leading-5">{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepositoriesList;
