import Link from "next/link";

const InternalLink: React.FC<{
  href: string;
}> = ({ href, children }) => (
  <Link href={href}>
    <a className="underline">{children}</a>
  </Link>
);

export default InternalLink;
