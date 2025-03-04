import React from "react";
import { projects } from "../../../../data";
import Image from "next/image";

function RepoImg({ id, name }: { id: number; name: string }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} id={`${id}`}>
          {id === project.id ? (
            <Image
              src={project.img}
              height={600}
              width={600}
              priority={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`Thumbnail for ${name}`}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default RepoImg;
