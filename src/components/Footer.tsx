export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} Kento Hyono. Have some coffee together?
        </p>
        <div className="flex gap-6">
          <a
            href="#home"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}