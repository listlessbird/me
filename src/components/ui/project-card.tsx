import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./card"
import { Badge } from "./badge"

import { GitHubIcon } from "@/components/icons/GithubIcon"
import { Button } from "./button"

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
  sourceLink?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  sourceLink,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {!!sourceLink && (
        <CardFooter className="p-2">
          <div className="w-fit ml-auto">
            <Button variant={"ghost"} asChild>
              <a href={sourceLink} target="_blank">
                <GitHubIcon className="size-4" />
              </a>
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
