import {project} from "@/app/source";

export const projects = [...project.getPages()].sort(
    (a, b) =>
        new Date(b.data.date ?? b.file.name).getTime() -
        new Date(a.data.date ?? a.file.name).getTime()
);