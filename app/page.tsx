import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-white text-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <SiteHeader />

        <main className="pb-32">
          <Hero />

          <div className="flex flex-col gap-28 sm:gap-36">
            <ProjectDashboard />
            <ProjectFinderly />
          </div>
        </main>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="flex items-center justify-between py-7">
      <Link href="/" className="text-sm font-semibold tracking-tight">
        Liam Lai
      </Link>
      <nav className="flex items-center gap-7 text-sm text-zinc-500">
        <Link href="/" className="font-semibold text-zinc-900">
          Work
        </Link>
        <Link href="/about" className="transition-colors hover:text-zinc-900">
          About
        </Link>
        <Link href="/resume" className="transition-colors hover:text-zinc-900">
          Resume
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-xl pt-24 pb-28 sm:pt-32">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Hi, I&rsquo;m Liam
      </h1>
      <p className="mt-5 text-base leading-7 text-zinc-600">
        I&rsquo;m a product designer who thinks in systems and designs for
        simplicity. From speculative concepts to large-scale product systems, I
        care about the craft and execution that makes complex tasks feel
        effortless.
      </p>
      <p className="mt-5 text-base leading-7 text-zinc-600">
        Currently looking for Summer 2027 Internships.
      </p>
    </section>
  );
}

function ProjectDashboard() {
  return (
    <section className="grid items-center gap-10 sm:grid-cols-2 sm:gap-14">
      <div className="order-2 sm:order-1">
        <h2 className="text-xl font-bold tracking-tight">
          Program Management Dashboard
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          End-to-end design of a web dashboard to help nonprofit admins manage{" "}
          <strong className="font-semibold text-zinc-900">X+</strong> students
          and cut administrative task time by{" "}
          <strong className="font-semibold text-zinc-900">X%</strong>.
        </p>
        <ProjectLink href="/work/program-management-dashboard" />
      </div>

      <div className="order-1 sm:order-2">
        <LaptopMock />
      </div>
    </section>
  );
}

function ProjectFinderly() {
  return (
    <section className="grid items-center gap-10 sm:grid-cols-2 sm:gap-14">
      <div className="order-1">
        <PhonesMock />
      </div>

      <div className="order-2">
        <h2 className="text-xl font-bold tracking-tight">Finderly AI</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          High-fidelity Figma prototypes for speculative AR/AI concepts, shaping
          the team&rsquo;s future product direction.
        </p>
        <ProjectLink href="/work/finderly-ai" />
      </div>
    </section>
  );
}

function ProjectLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900"
    >
      View Project
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </Link>
  );
}

/* Device mockups — placeholder visuals standing in for project screenshots. */

function LaptopMock() {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 p-8">
      <div className="w-full max-w-sm">
        <div className="rounded-t-xl border border-zinc-300 bg-white p-2 shadow-sm">
          <div className="mb-2 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 w-1/3 rounded bg-emerald-200" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded bg-zinc-50 p-1.5"
              >
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
                <span className="h-1.5 flex-1 rounded bg-zinc-200" />
                <span className="h-1.5 w-8 rounded bg-zinc-200" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto h-2 w-[110%] -translate-x-[5%] rounded-b-xl bg-zinc-300" />
      </div>
    </div>
  );
}

function PhonesMock() {
  return (
    <div className="flex aspect-[4/3] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-100 p-8">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1/3 max-w-[110px] rounded-[1.25rem] border border-zinc-300 bg-white p-1.5 shadow-sm"
        >
          <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-zinc-300" />
          <div className="space-y-1.5">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200" />
            <div className="h-1.5 w-3/4 rounded bg-zinc-200" />
            <div className="h-1.5 w-1/2 rounded bg-zinc-200" />
            <div className="mt-1 h-3 w-full rounded-full bg-violet-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
