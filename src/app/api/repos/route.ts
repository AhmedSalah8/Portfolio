/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { projects } from "../../../../data";

const GITHUB_API_URL = "https://api.github.com/repos/AhmedSalah8";
const HEADERS = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

async function fetchData(repo: string) {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${repo}`, {
      headers: HEADERS,
    });
    if (!response.ok)
      throw new Error(`Failed to fetch ${repo}: ${response.statusText}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function GET(request: Request) {
  const repoNames = projects.map((project) => project.repoName);

  const results = await Promise.allSettled(repoNames.map(fetchData));

  // Extract fulfilled results, replacing rejected ones with `null`
  const fetchedData = results.map((res) =>
    res.status === "fulfilled" ? res.value : null
  );

  return NextResponse.json(fetchedData);
}
