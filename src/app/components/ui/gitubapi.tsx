"use client";
import { useState, useEffect } from "react";

interface RepoData {
  id: number;
  name: string;
  description: string;
  img: string;
  stargazers_count: number;
  homepage: string;
  iconLists: string;
}

export default function useRepoData() {
  const [repoData, setRepoData] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/repos`);
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error(`Error fetching :`, error);
        return null;
      }
    };

    fetchData();
  }, []);

  return repoData; // Return data directly
}
