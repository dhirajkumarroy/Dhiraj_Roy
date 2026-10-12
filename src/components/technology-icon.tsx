import Image from "next/image";
import { Code2, Network } from "lucide-react";

const technologyAssets: Readonly<Record<string, string>> = {
  "Next.js": "nextjs.svg",
  React: "react.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  HTML5: "html5.svg",
  CSS3: "css3.svg",
  "Tailwind CSS": "tailwindcss.svg",
  Python: "python.svg",
  FastAPI: "fastapi.svg",
  Laravel: "laravel.svg",
  PHP: "php.svg",
  "Apache Doris": "apache-doris.svg",
  MySQL: "mysql.svg",
  Git: "git.svg",
  GitHub: "github.svg",
  Postman: "postman.svg",
  "VS Code": "vscode.svg",
};

export function TechnologyIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const asset = technologyAssets[name];
  const FallbackIcon = name === "REST APIs" ? Network : Code2;

  return (
    <span
      className="technology-icon"
      style={{ width: size, height: size }}
      aria-hidden="true"
      data-technology={name}
    >
      {asset ? (
        <Image
          src={`/tech-icons/${asset}`}
          alt=""
          width={size}
          height={size}
          loading="eager"
          unoptimized
        />
      ) : (
        <FallbackIcon size={size} aria-hidden="true" />
      )}
    </span>
  );
}
