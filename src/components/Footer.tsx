const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="code-font text-sm text-muted-foreground">
          Portfolio © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted-foreground">
          Building the future with <span className="gradient-text font-medium">AI</span>
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/bharani-10" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/bharani-r-70932b2b4/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
          <a href="mailto:bharanir1010@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
