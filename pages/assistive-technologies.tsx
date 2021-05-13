import PageHeading from "../components/PageHeading";

const AssistiveTechnologies: React.FC = () => (
  <>
    <header className="m-4">
      <PageHeading text="Tehnologii asistive" />
      <p>
        Pe această pagină prezentăm principalele tehnologii care ajută
        persoanele cu dizabilități să-și desfășșoare mai ușor activitățile în
        viața de zi cu zi.
      </p>
    </header>
    <section>
      <img src="" alt="Cititor de ecran" />
      <span>Deficiențe de vedere</span>
      <p>
        Cititoarele de ecran sunt programe care citesc cu voce tare textul aflat
        pe ecran.
      </p>
    </section>
    <section>
      <img src="" alt="Scaun cu rotile" />
      <span>Deficiențe motorii</span>
      <p>
        Scaunele cu rotile ajută persoanele cu deficiențe motorii să se
        deplaseze mai ușor.
      </p>
    </section>
    <section>
      <img src="" alt="Fontul Lexend Deca" />
      <span>Dislexie</span>
      <p>
        Unele fonturi sunt special concepute să fie mai ușor de citit de către
        persoanele cu dislexie, cum ar fi cel folosit pe acest site.
      </p>
    </section>
  </>
);

export default AssistiveTechnologies;
