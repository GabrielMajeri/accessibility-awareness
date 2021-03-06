import ExternalLink from "../components/ExternalLink";
import PageHeading from "../components/PageHeading";

const About: React.FC = () => (
  <>
    <header className="m-4">
      <PageHeading text="Despre" />
    </header>

    <p className="mx-auto mb-3 max-w-prose text-justify">
      Conform{" "}
      <ExternalLink
        href="http://anpd.gov.ro/web/conventia/"
        className="underline"
      >
        Convenției Națiunilor Unite privind drepturile persoanelor cu
        dizabilități
      </ExternalLink>
      ,{" "}
      <span className="italic">
        „Persoanele cu dizabilitãţi includ acele persoane care au deficienţe
        fizice, mentale, intelectuale sau senzoriale de duratã, deficienţe care,
        în interacţiune cu diverse bariere, pot îngrãdi participarea deplinã şi
        efectivã a persoanelor în societate, în condiţii de egalitate cu
        ceilalţi.”
      </span>
    </p>

    <p className="mx-auto max-w-prose text-justify">
      Persoanele cu dizabilități au dreptul să lucreze în orice domeniu în care
      dizabilitatea nu i-ar împiedica să își desfășoare activitatea. Din păcate,
      aceștia sunt în continuare discriminați de majoritatea angajatorilor,
      fiindu-le astfel îngrădit accesul la piața muncii.{" "}
      <span className="font-bold">Și eu pot să lucrez</span> este o inițiativă
      care susține persoanele cu dizabilități prin informarea și conștientizarea
      populației despre acest subiect.
    </p>
  </>
);

export default About;
