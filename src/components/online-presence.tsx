import Dot from "./dot";
import { Badge } from "./ui/badge";

export default function OnlinePresence() {
  return (
    <Badge className="inline-flex gap-1 space-y-2 border-green-700 bg-green-500 dark:text-foreground">
      <Dot animate />
      Online
    </Badge>
  );
}
