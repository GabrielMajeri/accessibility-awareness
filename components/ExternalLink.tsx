const ExternalLink: React.FC<{
  href?: string;
  className?: string;
}> = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noreferer noopener">
    {children}
  </a>
);

export default ExternalLink;
