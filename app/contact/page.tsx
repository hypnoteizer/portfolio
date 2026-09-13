const contactLinks = [
  { label: "Email", value: "orkanselcuk@gmail.com", href: "mailto:orkanselcuk@gmail.com" },
  { label: "GitHub", value: "github.com/hypnoteizer", href: "https://github.com/hypnoteizer" },
  { label: "LinkedIn", value: "linkedin.com/in/orkan-selçuk", href: "https://www.linkedin.com/in/orkan-sel%C3%A7uk/" },
];

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-zinc-600 leading-relaxed mb-10">
        You can reach me through the following channels. I look forward to connecting with you!
      </p>
      <ul className="flex flex-col gap-4">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-800 hover:text-blue-600"
            >
              <span className="font-medium">{link.label}:</span>
              <span>{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}