export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground border-t dark:border-rose-700">
      © {new Date().getFullYear()} RMart. All rights reserved.
    </footer>
  );
}
