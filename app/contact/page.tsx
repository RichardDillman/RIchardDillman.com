import type { Metadata } from "next";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact | Richard Dillman",
  description: "Get in touch with Richard Dillman. Connect on LinkedIn, GitHub, or dev.to.",
};

const contactLinks = [
  {
    name: "Email",
    href: "mailto:&#114;&#100;&#105;&#108;&#108;&#109;&#097;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;",
    icon: FaEnvelope,
    display: "rdillman [at] gmail [dot] com",
    description: "Send me an email"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/richarddillman/",
    icon: FaLinkedin,
    display: "linkedin.com/in/richarddillman",
    description: "Connect professionally"
  },
  {
    name: "GitHub",
    href: "https://github.com/richardDillman/",
    icon: FaGithub,
    display: "github.com/richardDillman",
    description: "Check out my code"
  },
  {
    name: "Dev.to",
    href: "https://dev.to/richarddillman",
    icon: SiDevdotto,
    display: "dev.to/richarddillman",
    description: "Read my writing"
  }
];

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed">
          I'm always happy to discuss engineering leadership, performance optimization,
          web architecture, or how to work effectively with AI agents. Feel free to
          reach out through any of these channels.
        </p>

        <div className="space-y-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                    {link.description}
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-mono">
                    {link.display}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">About Response Time</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I typically respond within 1-2 business days. If you're reaching out about
            engineering roles, consulting opportunities, or speaking engagements, please
            include relevant details in your initial message.
          </p>
        </div>
      </div>
    </div>
  );
}
