import { Button } from "@/components/ui/button";
import { createAdminClient } from "@/lib/appwrite";

export default function Home() {
  console.log(createAdminClient);
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
