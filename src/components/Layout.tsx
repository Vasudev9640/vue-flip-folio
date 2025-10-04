import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-[10px] m-2">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex gap-8 items-center justify-center relative">
            <li>
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/skills" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="absolute right-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
