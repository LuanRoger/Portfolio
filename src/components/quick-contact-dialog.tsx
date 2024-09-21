import IconText from "./icon-text";
import OnlinePresence from "./online-presence";
import SpotifyCurrentPlayingBadge from "./spotify-current-playing-badge";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { IconRocket } from "@tabler/icons-react";

export default function QuickContactDialog() {
  const titlesDefaultClasses = "font-mono text-sm text-gray-400 opacity-65";

  return (
    <Popover>
      <PopoverTrigger>
        <OnlinePresence />
      </PopoverTrigger>
      <PopoverContent
        className="max-w-72 flex flex-col items-center gap-2 text-gra"
        side="left"
      >
        <IconText
          icon={<IconRocket size={20} color="#9ca3af" className="opacity-65" />}
          text="Activities"
          textClassName={`${titlesDefaultClasses} uppercase text-sm`}
        />
        <SpotifyCurrentPlayingBadge title="Listening to" />
        <Separator />
        <h1 className={titlesDefaultClasses}>I'm online! Reach me out 👋</h1>
        <Button variant={"ghost"}>Send a message</Button>
      </PopoverContent>
    </Popover>
  );
}
