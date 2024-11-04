import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-x-4">
      <Button size={"xs"}>Primary</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"teritary"}>Teritary</Button>
    </div>
  );
}
