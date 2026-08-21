import { SiteHeader } from '@/components/site-header'

const expertise = [
  {
    number: '01',
    title: 'Agentic systems',
    description:
      'Reasoning loops, tool orchestration, memory, guardrails, and evaluation designed as one dependable system.',
    tags: ['Multi-agent', 'MCP', 'Evaluation'],
  },
  {
    number: '02',
    title: 'Full-stack AI',
    description:
      'Fast, accessible interfaces connected to resilient APIs, streaming model responses, and observable backends.',
    tags: ['Next.js', 'TypeScript', 'FastAPI'],
  },
  {
    number: '03',
    title: 'Protocols & safety',
    description:
      'Clear permission boundaries, reliable tool contracts, and practical defenses for systems that can take action.',
    tags: ['Guardrails', 'Auth', 'APIs'],
  },
  {
    number: '04',
    title: 'Zero-to-one delivery',
    description:
      'Turning an ambitious idea into a focused product, validating the riskiest assumptions, and shipping quickly.',
    tags: ['Prototyping', 'Strategy', 'Cloud'],
  },
]

const work = [
  {
    eyebrow: 'Open source · AI testing',
    title: 'SwarmTrace',
    description:
      'A testing and observability framework for multi-agent AI systems—built to make complex runs easier to inspect, evaluate, and trust.',
    tags: ['Python', 'Multi-agent', 'Evaluation'],
    href: 'https://github.com/ravi3594444/swarmtrace',
    cta: 'Open repository',
    visual: 'trace',
  },
  {
    eyebrow: 'AI safety · Protocol',
    title: 'Guardian MCP',
    description:
      'A guardrail layer for tool-using language models, focused on permission-aware execution, context inspection, and safer actions.',
    tags: ['MCP', 'Security', 'Policy'],
    href: 'https://github.com/ravi3594444',
    cta: 'View GitHub profile',
    visual: 'guardian',
  },
  {
    eyebrow: 'Spatial data · Product',
    title: 'India Godview',
    description:
      'A national-scale 3D visualization concept that brings logistics, satellite signals, and operational data into one interface.',
    tags: ['3D UI', 'Real-time data', 'Maps'],
    href: 'https://github.com/ravi3594444',
    cta: 'View GitHub profile',
    visual: 'godview',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  )
}

function ProjectVisual({ variant }: { variant: string }) {
  if (variant === 'guardian') {
    return (
      <div className="project-visual guardian-visual" aria-hidden="true">
        <div className="visual-topline">
          <span className="window-dots"><i /><i /><i /></span>
          <span>guardian.policy</span>
          <span className="visual-live">Protected</span>
        </div>
        <div className="guardian-stage">
          <div className="shield-orbit shield-orbit--outer" />
          <div className="shield-orbit shield-orbit--inner" />
          <div className="shield-core">
            <svg viewBox="0 0 40 44">
              <path d="M20 2 36 8v12c0 10-6.6 18.4-16 22C10.6 38.4 4 30 4 20V8l16-6Z" />
              <path d="m13 21 5 5 10-11" />
            </svg>
          </div>
          <span className="guard-chip guard-chip--one">Tool scope</span>
          <span className="guard-chip guard-chip--two">Context check</span>
          <span className="guard-chip guard-chip--three">Safe action</span>
        </div>
        <div className="visual-status-row">
          <span><i className="status-ok" /> Policy active</span>
          <span>03 checks passed</span>
        </div>
      </div>
    )
  }

  if (variant === 'godview') {
    return (
      <div className="project-visual godview-visual" aria-hidden="true">
        <div className="visual-topline">
          <span className="window-dots"><i /><i /><i /></span>
          <span>india.live</span>
          <span className="visual-live">Live data</span>
        </div>
        <div className="map-stage">
          <div className="map-grid" />
          <svg className="india-mark" viewBox="0 0 160 190">
            <path d="M45 9 63 17l20-5 17 12 23 4 5 18-11 11 14 17-9 16-18 5-2 18-13 10-4 31-12 25-13-20-6-25-13-12-2-19-17-12 8-18-9-17 11-16-3-19 19-7Z" />
          </svg>
          <span className="map-pulse map-pulse--one" />
          <span className="map-pulse map-pulse--two" />
          <span className="map-pulse map-pulse--three" />
          <div className="map-card">
            <span>Signal coverage</span>
            <strong>Unified view</strong>
          </div>
        </div>
        <div className="visual-status-row">
          <span><i className="status-ok" /> Streams connected</span>
          <span>Satellite + logistics</span>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual trace-visual" aria-hidden="true">
      <div className="visual-topline">
        <span className="window-dots"><i /><i /><i /></span>
        <span>swarmtrace.run</span>
        <span className="visual-live">Tracing</span>
      </div>
      <div className="trace-stage">
        <svg className="trace-lines" viewBox="0 0 560 280" preserveAspectRatio="none">
          <path d="M92 140 C145 140 148 70 220 70" />
          <path d="M92 140 C145 140 148 210 220 210" />
          <path d="M300 70 C370 70 360 140 430 140" />
          <path d="M300 210 C370 210 360 140 430 140" />
        </svg>
        <div className="trace-node trace-node--input"><span>01</span>Prompt</div>
        <div className="trace-node trace-node--planner"><span>02</span>Planner</div>
        <div className="trace-node trace-node--tool"><span>03</span>Tool</div>
        <div className="trace-node trace-node--output"><span>04</span>Verified</div>
      </div>
      <div className="visual-status-row">
        <span><i className="status-ok" /> Run complete</span>
        <span>4 spans · 0 errors</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="availability-dot" aria-hidden="true" />
                Available for ambitious AI builds
              </p>
              <h1 id="hero-title">
                AI systems
                <span>engineered to act.</span>
              </h1>
              <p className="hero-lede">
                I&apos;m Ravi Kumar—an AI engineer and product builder turning early ideas into dependable agents, model workflows, and polished software.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View selected work
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#contact">
                  Start a project
                </a>
              </div>
              <div className="hero-signals" aria-label="Core focus areas">
                <span>Agent systems</span>
                <span>Full-stack delivery</span>
                <span>MCP integrations</span>
              </div>
            </div>

            <div className="hero-visual" role="img" aria-label="An agent system moving through reason, execute, and verify stages">
              <div className="agent-window">
                <div className="agent-toolbar">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span className="agent-file">agent.runtime</span>
                  <span className="agent-online"><i /> Online</span>
                </div>
                <div className="agent-stage">
                  <div className="agent-orbit agent-orbit--one" />
                  <div className="agent-orbit agent-orbit--two" />
                  <div className="agent-core">
                    <span className="agent-core-icon">RK</span>
                    <small>Orchestrator</small>
                  </div>
                  <div className="agent-node agent-node--model"><i />Model</div>
                  <div className="agent-node agent-node--memory"><i />Memory</div>
                  <div className="agent-node agent-node--tools"><i />Tools</div>
                  <span className="agent-pulse agent-pulse--one" />
                  <span className="agent-pulse agent-pulse--two" />
                </div>
                <div className="agent-pipeline">
                  <span><i>01</i> Reason</span>
                  <b aria-hidden="true" />
                  <span><i>02</i> Execute</span>
                  <b aria-hidden="true" />
                  <span><i>03</i> Verify</span>
                </div>
              </div>
              <div className="floating-chip floating-chip--top">Production-minded</div>
              <div className="floating-chip floating-chip--bottom"><i /> System healthy</div>
            </div>
          </div>
        </section>

        <div className="capability-strip section-shell" aria-label="Capabilities">
          <span>Autonomous agents</span>
          <span>Model orchestration</span>
          <span>Reliable APIs</span>
          <span>Human-first interfaces</span>
        </div>

        <section id="about" className="content-section section-shell" aria-labelledby="about-title">
          <div className="section-kicker">About</div>
          <div className="about-grid">
            <div>
              <h2 id="about-title">From fuzzy idea to working AI product.</h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I work where product judgment, model behavior, and engineering meet.
              </p>
              <p>
                That means shaping the problem, building the orchestration and APIs, and making the final experience feel clear and fast—not stopping at a demo that only works once.
              </p>
              <div className="about-principles">
                <div><span>01</span><strong>Understand the real constraint</strong></div>
                <div><span>02</span><strong>Ship the smallest useful system</strong></div>
                <div><span>03</span><strong>Test behavior, not just code</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="content-section section-shell" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Expertise</div>
              <h2 id="expertise-title">Built across the whole AI stack.</h2>
            </div>
            <p>Architecture, product, and implementation handled as one connected job.</p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="content-section section-shell" aria-labelledby="work-title">
          <div className="section-heading work-heading">
            <div>
              <div className="section-kicker">Selected work</div>
              <h2 id="work-title">Systems designed to do real work.</h2>
            </div>
            <p>A mix of agent infrastructure, safety tooling, and data-rich product experiences.</p>
          </div>

          <div className="work-list">
            {work.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-copy">
                  <span className="project-index">0{index + 1}</span>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.cta}
                    <ArrowIcon />
                  </a>
                </div>
                <ProjectVisual variant={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="content-section process-section section-shell" aria-labelledby="process-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Process</div>
              <h2 id="process-title">Fast without becoming fragile.</h2>
            </div>
            <p>Every build moves through three clear phases, with evidence at each step.</p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Frame</h3>
              <p>Define the user outcome, risks, tools, and the smallest architecture that can prove the idea.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Ship</h3>
              <p>Build a usable vertical slice early, then improve it with real feedback instead of assumptions.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Harden</h3>
              <p>Add evaluation, observability, permissions, fallbacks, and the polish required for production.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
          <div className="contact-card">
            <div className="contact-orb" aria-hidden="true" />
            <p className="eyebrow"><span className="availability-dot" aria-hidden="true" /> Open to new work</p>
            <h2 id="contact-title">Have a difficult AI idea?</h2>
            <p>Let&apos;s turn it into something people can actually use.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:ravi.ai.founder@gmail.com">
                Email Ravi
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="https://t.me/Raviiii89" target="_blank" rel="noreferrer">
                Message on Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <a className="footer-brand" href="#top" aria-label="Back to top">Ravi<span>.</span></a>
          <p>AI engineer & product builder.</p>
        </div>
        <nav aria-label="Social links">
          <a href="https://github.com/ravi3594444" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ravi-kumar-4966713b3" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://t.me/Raviiii89" target="_blank" rel="noreferrer">Telegram</a>
        </nav>
        <p className="copyright">© 2026 Ravi Kumar</p>
      </footer>
    </>
  )
}
