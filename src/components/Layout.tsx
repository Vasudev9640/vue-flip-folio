import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex gap-8 items-center justify-center">
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
          </ul>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
