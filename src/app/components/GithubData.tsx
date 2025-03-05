"use client";
import useRepoData from "./ui/gitubapi";
import RepoImg from "./ui/RepoImg";
// import img from "../../../public/Users-Angular-App.png";
// import Image from "next/image";
export default function DisplayComponent() {
  const repoData = useRepoData(); // Use the hook

  return (
    <div>
      {repoData.map((repo) => (
        <div key={repo.id} id={`${repo.id}`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <RepoImg id={repo.id} name={repo.name} />
          <a href={repo.homepage}>View on GitHub</a>
        </div>
      ))}
      {/* <Image fill src={"../../../public/Users-Angular-App.png"} alt="img" /> */}
    </div>
  );
}
