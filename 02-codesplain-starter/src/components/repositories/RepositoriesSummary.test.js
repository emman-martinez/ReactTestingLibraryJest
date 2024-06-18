import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

const repository = {
  language: "JavaScript",
  stargazers_count: 5,
  forks: 30,
  open_issues: 1,
};
test("displays the primary language of the repository", () => {
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");

  expect(language).toBeInTheDocument();
});

test("displays information about the repository", () => {
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }
});
