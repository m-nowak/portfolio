import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
  return (
    <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-lg border-gray-200 border-[1px]">
      <div className="flex flex-1 flex-col py-3 px-8 h-[400px]">
        <div className="w-full min-h-[220px] flex justify-center ">
          <div className="relative w-[100%] ">
            <Image
              src={project.img}
              alt={project.name}
              width={300}
              height={300}
              cover
              className="mx-auto"
            />
          </div>
        </div>

        <h3 className="mt-6 text-md font-medium text-gray-900">
          {project.name}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only"></dt>
          <dd className="text-sm text-gray-500">{project.desc}</dd>
          <dt className="sr-only"></dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-gray-700 ">
              {project.stack}
            </span>
          </dd>
          <dd className="mt-3">
            <span className="text-xs text-indigo-400">#{project.type}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              target="_blank"
              title={project.eye_title !== "" ? project.eye_title : "Demo"}
              href={project.eye}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900  hover:bg-gray-100"
            >
              <img className="w-8" src="assets/eye.svg" alt="eye" />
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              target="_blank"
              title="Code"
              href={project.git}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              <img className="w-6" src="assets/github-mark.svg" alt="github" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
