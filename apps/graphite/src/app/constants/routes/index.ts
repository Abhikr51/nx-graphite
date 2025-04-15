// Define a reusable base URL to avoid repetition and make future changes easier
const BASE_URL = "http://localhost:4200/graphite";

// Define a TypeScript type for stronger typing and IDE support (optional but recommended)
interface RouteItem {
  id: number;
  title: string;
  url: string;
  icon?: string; // optional if some routes don’t use icons
}

// Centralized route config
export const routes: RouteItem[] = [
  {
    id: 1,
    title: "My Dashboard",
    url: `${BASE_URL}/dashboard`,
    icon: "dashboard", // example: could be a Material icon name
  },
  {
    id: 2,
    title: "Intervention",
    url: `${BASE_URL}/intervention`,
  },
  {
    id: 3,
    title: "Data Processing",
    url: `${BASE_URL}/data-processing`,
  },
  {
    id: 4,
    title: "Reporting",
    url: `${BASE_URL}/reporting`,
  },
  {
    id: 5,
    title: "Inquiry",
    url: `${BASE_URL}/inquiry`,
  },
];
