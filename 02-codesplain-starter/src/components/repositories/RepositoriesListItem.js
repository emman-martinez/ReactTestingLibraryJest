import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import FileIcon from "../tree/FileIcon";
import RepositoriesSummary from "./RepositoriesSummary";

function RepositoriesListItem({ repository }) {
  const { description, full_name, html_url, language, name, owner } =
    repository;

  return (
    <div className="py-3 border-b flex">
      <FileIcon name={language} className="shrink w-6 pt-1" />
      <div>
        <Link to={`/repositories/${full_name}`} className="text-xl">
          {owner.login}/<span className="font-bold">{name}</span>
        </Link>
        <p className="text-gray-500 italic py-1">{description}</p>
        <RepositoriesSummary repository={repository} />
      </div>
      <div className="grow flex items-center justify-end pr-2">
        <a
          aria-label="GitHub repository"
          className="text-gray-500 hover:text-gray-800"
          href={html_url}
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub repository"
        >
          <MarkGithubIcon size={24} />
        </a>
      </div>
    </div>
  );
}

export default RepositoriesListItem;
