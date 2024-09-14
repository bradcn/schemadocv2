import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import GetStarted from "../components/get-started";
import { DATA } from "@/schema.config";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        {DATA.siteName}
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        {DATA.siteDescription}
      </p>
      <div className="flex flex-row items-center gap-5">
        <GetStarted />
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> {DATA.terminalCommand}
      </span>
    </div>
  );
}
