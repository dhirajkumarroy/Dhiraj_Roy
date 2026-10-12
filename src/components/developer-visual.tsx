import { Check, Code2, Database, FileCode2, GitBranch } from "lucide-react";
import { Fragment } from "react";
import { TechnologyIcon } from "@/components/technology-icon";
import { formatMonth } from "@/lib/format";
import type { Profile } from "@/types/portfolio";

export function DeveloperVisual({ profile }: { profile: Profile }) {
  const stackRows = Array.from(
    { length: Math.ceil(profile.currentStack.length / 2) },
    (_, index) => profile.currentStack.slice(index * 2, index * 2 + 2),
  );
  return (
    <div className="developer-visual">
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-label">
        <span className="tiny-square" /> FROM IDEA TO APPLICATION
      </div>
      <div
        className="editor-window"
        aria-label="Developer profile displayed in an example code editor"
      >
        <div className="editor-titlebar">
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span>developer.workspace</span>
          <Code2 size={15} aria-hidden="true" />
        </div>
        <div className="editor-tab">
          <FileCode2 size={15} aria-hidden="true" /> dhiraj.ts <span>TS</span>
        </div>
        <div
          className="editor-code"
          role="region"
          aria-label="Developer profile code"
          tabIndex={0}
        >
          <ol>
            <li>
              <code>
                <span className="syntax-comment">{"// A little about me"}</span>
              </code>
            </li>
            <li>
              <code>
                <span className="syntax-purple">const</span> developer = {"{"}
              </code>
            </li>
            <li>
              <code>
                {" "}
                name:{" "}
                <span className="syntax-orange">
                  &apos;{profile.name}&apos;
                </span>
                ,
              </code>
            </li>
            <li>
              <code>
                {" "}
                role:{" "}
                <span className="syntax-orange">
                  &apos;{profile.role}&apos;
                </span>
                ,
              </code>
            </li>
            <li>
              <code> stack: [</code>
            </li>
            {stackRows.map((row, rowIndex) => (
              <li key={rowIndex}>
                <code>
                  {" "}
                  {row.map((tech, index) => (
                    <Fragment key={tech}>
                      <span className="syntax-orange">&apos;{tech}&apos;</span>
                      {rowIndex * 2 + index < profile.currentStack.length - 1
                        ? ", "
                        : ""}
                    </Fragment>
                  ))}
                </code>
              </li>
            ))}
            <li>
              <code> ],</code>
            </li>
            <li>
              <code>
                {" "}
                mindset:{" "}
                <span className="syntax-orange">
                  &apos;Always learning&apos;
                </span>
                ,
              </code>
            </li>
            <li>
              <code>
                {" "}
                focus:{" "}
                <span className="syntax-orange">
                  &apos;Build things that work&apos;
                </span>
              </code>
            </li>
            <li>
              <code>{"};"}</code>
            </li>
            <li>
              <code> </code>
            </li>
            <li>
              <code>
                <span className="syntax-blue">build</span>(
                <span className="syntax-orange">
                  &apos;your next idea&apos;
                </span>
                );
              </code>
            </li>
          </ol>
        </div>
        <div className="editor-status">
          <span>
            <GitBranch size={12} aria-hidden="true" /> main
          </span>
          <span>
            <Check size={12} aria-hidden="true" /> Ready to build
          </span>
          <span>TypeScript</span>
        </div>
      </div>
      <div className="tech-float react-float">
        <TechnologyIcon name={profile.currentStack[0]} size={20} />
        <span>{profile.currentStack[0]}</span>
      </div>
      <div className="tech-float laravel-float">
        <TechnologyIcon name={profile.currentStack[2]} size={20} />
        <span>{profile.currentStack[2]}</span>
      </div>
      <div className="current-role-card">
        <span className="current-role-icon">
          <Database size={21} aria-hidden="true" />
        </span>
        <div>
          <p>Currently building at</p>
          <strong>{profile.company}</strong>
          <span>Developer · Since {formatMonth(profile.startDate)}</span>
        </div>
        <span className="current-role-dot" title="Current position" />
      </div>
    </div>
  );
}
