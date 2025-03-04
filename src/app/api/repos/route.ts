/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { projects } from "../../../../data";

export async function GET(request: Request) {
  const repos = projects.map((project) => project.repoName);
  const dataPromises = repos.map(async (repo) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/AhmedSalah8/${repo}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        }
      );
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${repo}:`, error);
      return null;
    }
  });

  const fetchedData = await Promise.all(dataPromises);

  return NextResponse.json(fetchedData);
}
