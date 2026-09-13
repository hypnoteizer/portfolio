export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Resume</h1>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          Download PDF
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <p className="text-zinc-600 leading-relaxed">
          Private Bestepe Anatolian High School — High School Diploma 2021 - 2026
          Karlsruhe Institute of Technology (KIT) — Mechanical Engineering B.Sc. 2026 - Present
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <p className="text-zinc-600 leading-relaxed">
          Fusion 360, OpenRocket, SolidWorks
          Python, HTML, CSS, React, Next.js
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Interests</h2>
        <p className="text-zinc-600 leading-relaxed">
          Aerodynamics /
          Rocket Propulsion /
          CAD Design /
          Software Development
        </p>
      </section>
    </main>
  );
}