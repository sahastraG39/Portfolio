const projects = [
  {
    title: 'Project One',
    description: 'A cool project that does something interesting.',
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project showcasing my skills with Next.js.',
    href: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="block rounded-lg border p-6 hover:shadow-md transition-shadow"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


