import Image from "next/image";
import ExternalLink from "../components/ExternalLink";
import PageHeading from "../components/PageHeading";

const AssistiveTechnologies: React.FC = () => (
  <>
    <header className="p-4 bg-gradient-to-b from-white to-gray-200">
      <PageHeading text="Tehnologii asistive" />
      <p className="sm:mx-auto sm:max-w-md">
        Pe această pagină prezentăm principalele tehnologii care ajută
        persoanele cu dizabilități să-și desfășoare mai ușor activitățile în
        viața de zi cu zi.
      </p>
    </header>
    <div className="px-4 pb-4 bg-gray-200">
      <AssistiveTechnology
        name="Cititor de ecran"
        description="Cititoarele de ecran sunt programe care citesc cu voce tare textul aflat pe ecran."
        disability="Deficiențe de vedere"
        imageSrc="/assistive-technologies/nvda-logo.png"
      />
      <AssistiveTechnology
        name="Scaun cu rotile"
        description="Scaunele cu rotile ajută persoanele cu deficiențe motorii să se deplaseze mai ușor."
        disability="Deficiențe motorii"
        imageSrc="/assistive-technologies/wheelchair.jpg"
      />
      <AssistiveTechnology
        name="Fontul Lexend Deca"
        description="Unele fonturi sunt special concepute să fie mai ușor de citit de către persoanele cu dislexie, cum ar fi cel folosit pe acest site."
        disability="Dislexie"
        imageSrc="/assistive-technologies/lexend-deca-specimen.png"
      />
    </div>
    <footer className="bg-gradient-to-b from-gray-200 to-white">
      <p className="p-4 pb-8 text-center">
        Un site excelent pentru achiziționarea acestor produse este{" "}
        <ExternalLink href="https://beindependent.ro/" className="underline">
          BeIndependent.ro
        </ExternalLink>
      </p>
    </footer>
  </>
);

const AssistiveTechnology: React.FC<{
  name: string;
  description: string;
  disability: string;
  imageSrc: string;
}> = ({ name, description, disability, imageSrc }) => (
  <section className="mb-8 rounded-lg shadow bg-white sm:mx-auto sm:max-w-sm">
    <div className="p-4">
      <div className="relative h-32">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="contain" />
      </div>
    </div>
    <div className="m-2 text-center">
      <span className="px-2 py-0.5 rounded-full bg-yellow-400">
        Pentru: {disability}
      </span>
    </div>
    <p className="p-4">{description}</p>
  </section>
);

export default AssistiveTechnologies;
