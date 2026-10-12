import {
  BellRing,
  BookOpen,
  Check,
  GraduationCap,
  Landmark,
  Languages,
  LayoutDashboard,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  ShoppingBag,
  Users,
  Video,
} from "lucide-react";
import type { ProjectVisual } from "@/types/portfolio";

// Decorative interface illustrations, built as lightweight markup. They are
// intentionally not screenshots or interactive application controls.
export function ProjectPreview({ visual }: { visual: ProjectVisual }) {
  if (visual === "whatsapp") {
    return (
      <div className="project-preview preview-whatsapp" aria-hidden="true">
        <div className="mini-browser">
          <span />
          <span />
          <span />
          <div>Dhanush Technologies / WhatsApp automation</div>
        </div>
        <div className="whatsapp-preview-body">
          <div className="whatsapp-preview-chat">
            <div className="whatsapp-preview-nav">
              <strong>
                <MessageCircle size={17} /> Dhanush Technologies
              </strong>
              <span>ONLINE</span>
            </div>
            <div className="whatsapp-preview-messages">
              <div className="whatsapp-message whatsapp-message-bot">
                <small>WhatsApp Assistant</small>
                <strong>Hi! Choose your language</strong>
                <span>
                  <Languages size={11} /> English&nbsp;&nbsp;·&nbsp;&nbsp;Hinglish
                </span>
              </div>
              <div className="whatsapp-message whatsapp-message-user">
                Hinglish
              </div>
              <div className="whatsapp-message whatsapp-message-bot compact">
                Tell us about your project, budget and timeline.
              </div>
            </div>
          </div>
          <div className="whatsapp-preview-lead">
            <div className="whatsapp-lead-heading">
              <span>
                <BellRing size={14} /> New lead
              </span>
              <strong>Qualified</strong>
            </div>
            <div className="whatsapp-lead-details">
              <span>
                <small>Service</small>
                <strong>Web application</strong>
              </span>
              <span>
                <small>Budget</small>
                <strong>Captured</strong>
              </span>
            </div>
            <div className="whatsapp-lead-footer">
              <span>
                <ShieldCheck size={12} /> JWT dashboard
              </span>
              <span>
                <PhoneCall size={12} /> Callback
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "heritage") {
    return (
      <div className="project-preview preview-heritage" aria-hidden="true">
        <div className="mini-browser">
          <span />
          <span />
          <span />
          <div>bihar-eight.vercel.app</div>
        </div>
        <div className="heritage-preview-body" lang="hi">
          <div className="heritage-preview-nav">
            <strong>
              <Landmark size={18} /> सम्पूर्ण बिहार
            </strong>
            <Search size={13} />
          </div>
          <div className="heritage-preview-heading">
            <div>
              <span>इतिहास · संस्कृति · पर्यटन</span>
              <strong>
                बिहार की विरासत,
                <br />
                एक जगह।
              </strong>
            </div>
            <span className="heritage-preview-landmark">
              <Landmark size={60} strokeWidth={1.25} />
            </span>
          </div>
          <div className="heritage-preview-topics">
            <span>
              <strong>38</strong> ज़िले
            </span>
            <span>
              <BookOpen size={13} /> इतिहास
            </span>
            <span>
              <Landmark size={13} /> पर्यटन
            </span>
          </div>
          <p className="heritage-preview-note">
            बिहार को जानें। विरासत से जुड़ें।
          </p>
        </div>
      </div>
    );
  }

  if (visual === "community") {
    return (
      <div className="project-preview preview-community" aria-hidden="true">
        <div className="mini-browser">
          <span />
          <span />
          <span />
          <div>AUNEXT / student community</div>
        </div>
        <div className="community-preview-body">
          <div className="community-preview-nav">
            <strong>
              <GraduationCap size={18} /> AUNEXT
            </strong>
            <span>Learn together.</span>
          </div>
          <div className="community-preview-heading">
            <span>YOUR STUDY CIRCLE</span>
            <strong>
              Better preparation.
              <br />
              Together.
            </strong>
          </div>
          <div className="community-preview-partner">
            <span className="community-preview-icon">
              <Users size={19} />
            </span>
            <div>
              <strong>Find your study partner</strong>
              <small>JEE · Physics · English</small>
            </div>
            <Check size={14} />
          </div>
          <div className="community-preview-question">
            <span>
              PHYSICS{" "}
              <span>
                <Check size={9} /> Solved
              </span>
            </span>
            <strong>How does conservation of momentum work?</strong>
            <small>Ask a doubt. Share a solution.</small>
          </div>
          <div className="community-preview-footer">
            <span>
              <MessageCircle size={11} /> Peer messaging
            </span>
            <span>
              <Video size={12} /> Study calls
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "blog") {
    return (
      <div className="project-preview preview-blog" aria-hidden="true">
        <div className="mini-browser">
          <span />
          <span />
          <span />
          <div>devnotes / journal</div>
        </div>
        <div className="blog-preview-body">
          <div className="blog-preview-nav">
            <strong>
              devnotes<span>.</span>
            </strong>
            <span>Articles · About</span>
            <BookOpen size={14} />
          </div>
          <div className="blog-preview-heading">
            <span>THE DEVELOPER&apos;S NOTEBOOK</span>
            <strong>
              Ideas worth
              <br />
              writing down.
            </strong>
          </div>
          <div className="blog-preview-articles">
            <div>
              <span>REACT</span>
              <strong>
                Building better
                <br />
                components
              </strong>
              <small>6 min read</small>
            </div>
            <div>
              <span>BACKEND</span>
              <strong>
                Making sense
                <br />
                of REST APIs
              </strong>
              <small>8 min read</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const commerce = visual === "commerce";
  return (
    <div
      className={`project-preview ${commerce ? "preview-commerce" : "preview-dashboard"}`}
      aria-hidden="true"
    >
      <div className="mini-browser">
        <span />
        <span />
        <span />
        <div>{commerce ? "storeflow / overview" : "workbase / overview"}</div>
      </div>
      <div className="dashboard-preview-body">
        <div className="mini-sidebar">
          <strong>
            {commerce ? (
              <ShoppingBag size={18} />
            ) : (
              <LayoutDashboard size={18} />
            )}
          </strong>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index === 0 ? "selected" : undefined}
            />
          ))}
          <i />
        </div>
        <div className="mini-dashboard">
          <div className="mini-dashboard-heading">
            <strong>{commerce ? "Store overview" : "Project overview"}</strong>
            <Search size={12} />
            <span className="mini-avatar">DR</span>
          </div>
          <div className="mini-stats">
            <div>
              <small>{commerce ? "Total orders" : "Projects"}</small>
              <strong>
                {commerce ? "128" : "12"}
                <span>+2</span>
              </strong>
            </div>
            <div>
              <small>{commerce ? "Products" : "Active tasks"}</small>
              <strong>
                {commerce ? "64" : "36"}
                <span>+8</span>
              </strong>
            </div>
            <div>
              <small>{commerce ? "Customers" : "Completed"}</small>
              <strong>
                {commerce ? "256" : "84"}
                <span>+12</span>
              </strong>
            </div>
          </div>
          {commerce ? (
            <div className="mini-chart">
              <div>
                <strong>Order activity</strong>
                <small>This week</small>
              </div>
              <div className="chart-bars">
                {[35, 65, 48, 85, 60, 96, 74].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          ) : (
            <div className="mini-task-board">
              <div>
                <strong>In progress</strong>
                <span>3 tasks</span>
              </div>
              {[
                "Design system update",
                "API integration",
                "Dashboard components",
              ].map((task, index) => (
                <div className="mini-task" key={task}>
                  <span className={`mini-task-check task-${index}`}>
                    <Check size={9} />
                  </span>
                  <span>{task}</span>
                  <small>{["Design", "Backend", "Frontend"][index]}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
