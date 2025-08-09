const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'REST APIs',
  'Git & GitHub',
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border px-4 py-2 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}


