import ExternalLink from "../components/ExternalLink";
import PageHeading from "../components/PageHeading";

const EmploymentResources: React.FC = () => (
  <>
    <header className="p-4">
      <PageHeading text="Resurse pentru angajare" />
      <p className="mt-2 mx-auto max-w-prose">
        Pe această pagină strângem și sumarizăm cele mai utile resurse pentru
        persoanele cu dizabilități care își caută un loc de muncă.
      </p>
    </header>
    <EmploymentResource>
      <ExternalLink href="https://www.olx.ro/" className="underline">
        Olx.ro
      </ExternalLink>{" "}
      au un{" "}
      <ExternalLink
        href="https://bundeangajat.olx.ro/"
        className="underline font-bold"
      >
        blog
      </ExternalLink>{" "}
      dedicat celor care doresc să se dezvolte pe plan personal și profesional,
      precum și o categorie separată de{" "}
      <ExternalLink
        href="https://www.olx.ro/locuri-de-munca/joburi-pentru-persoane-dizabilitati/"
        className="underline font-bold"
      >
        locuri de muncă pentru persoanele cu dizabilități
      </ExternalLink>
      .
    </EmploymentResource>
    <EmploymentResource>
      <ExternalLink href="https://www.understood.org" className="underline">
        Understood.org
      </ExternalLink>{" "}
      oferă{" "}
      <ExternalLink
        href="https://www.understood.org/pages/en/young-adults/"
        className="underline font-bold"
      >
        sfaturi
      </ExternalLink>{" "}
      pentru tinerii adulți cu dizabilități, aflați la început de drum.
    </EmploymentResource>
  </>
);

const EmploymentResource: React.FC = ({ children }) => (
  <p className="mx-2 my-4 p-4 sm:mx-auto max-w-xl border border-double rounded-xl shadow">
    {children}
  </p>
);

export default EmploymentResources;
