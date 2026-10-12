import Link from "next/link";
import { Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <Code2 size={36} aria-hidden="true" />
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page took a wrong turn.</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist. The portfolio is a
        good place to start.
      </p>
      <Link href="/" className="button button-primary">
        Back to the portfolio
      </Link>
    </main>
  );
}
