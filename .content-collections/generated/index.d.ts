import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Project = GetTypeByName<typeof configuration, "projects">;
export declare const allProjects: Array<Project>;

export type ProjectMeta = GetTypeByName<typeof configuration, "projectMeta">;
export declare const allProjectMetas: Array<ProjectMeta>;

export {};
