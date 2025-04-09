import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:h-16">
        {/* Top Row: Logo and Toggle */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={theme === "dark" ? "/logo.png" : "/logo2.png"}
              alt="Stormie logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom Row on Mobile, Inline on Desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:justify-end">
          <div className="w-full md:w-auto mt-2 md:mt-0">
            <CitySearch />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
