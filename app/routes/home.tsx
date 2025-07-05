import type { Route } from "./+types/home";
import StartJourney from "~/components/startJourney/startJourney";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fabelle" },
    { name: "description", content: "Welcome to Fabelle!" },
  ];
}

export default function Home() {
  return <StartJourney />;
}
