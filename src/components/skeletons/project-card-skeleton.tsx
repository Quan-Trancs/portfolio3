import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProjectCardSkeleton() {
  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40">
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0">
        <Skeleton className="h-64 w-full" />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-2 mt-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-10 w-10 rounded-full ml-auto" />
      </CardFooter>
    </Card>
  );
}

export function ProjectListSkeleton() {
  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-md bg-muted/40">
      <CardContent className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 p-4 md:p-6">
        <Skeleton className="h-32 w-full md:h-full" />
        <div className="space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

