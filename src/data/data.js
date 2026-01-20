import Client from "../assets/imgs/project_thumbnails/Client.png";
import Nexgen from "../assets/imgs/project_thumbnails/Nexgen.png";
import caff from "../assets/imgs/project_thumbnails/caff.png";
import summer from "../assets/imgs/project_thumbnails/summer.png";
import Foodoo from "../assets/imgs/project_thumbnails/Foodoo.png";
import Owambe from "../assets/imgs/project_thumbnails/Owambe.png";

export const data = [
  {
    name: "FooDoo",
    description: "Ai powered website for a Restaurant.",
    thumbnail: Foodoo,
    tools: ["React", "Next js", "JavaScript", "TailwindCss"],
    github: "https://github.com/KingWahley/FOODOO",
    preview: "https://foodoo-ochre.vercel.app/",
  },
  {
    name: "SummerHuse",
    description:
      "A real estate webapp where users can find listings that are for sale or for rent.",
    thumbnail: summer,
    tools: ["React", "Next js", "JavaScript", "TailwindCss", "Supabase"],
    github: "https://github.com/KingWahley/summerHouse",
    preview: "https://summer-house-bay.vercel.app/",
  },
  {
    name: "Nexgen",
    description: "website for a Photography firm.",
    thumbnail: Nexgen,
    tools: ["html5", "JavaScript", "Bootstrap"],
    github: "https://github.com/KingWahley/nexgen",
    preview: "https://nexgen-77bz.onrender.com//",
  },
  {
    name: "Fake Client",
    description: "An AI-powered client brief generator ",
    thumbnail: Client,
    tools: ["react", "Next js", "TailwndCss"],
    github: "https://github.com/KingWahley/FakeClient",
    preview: "https://fake-client-topaz.vercel.app/",
  },

  {
    name: `Caffeine`,
    description:
      " Website for an online coffee shop, users can find and place orders for coffee of their choice",
    thumbnail: caff,
    tools: ["react", "Next js", "TailwindCss", "JavaScript"],
    github: "https://github.com/KingWahley/coffeeshop",
    preview: "https://caffeineonlinestore.vercel.app/",
  },
  {
    name: `Owambe`,
    description: " webapp for discovering and creating events",
    thumbnail: Owambe,
    tools: ["react", "Next js", "TailwindCss", "JavaScript", "Firebase"],
    github: "https://github.com/KingWahley/eventApp/tree/main",
    preview: "https://event-app-lime.vercel.app/",
  },
];
