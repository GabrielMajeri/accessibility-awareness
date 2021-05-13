import PageHeading from "../components/PageHeading";

const EconomicBenefits: React.FC = () => {
  return (
    <>
      <header className="m-4">
        <PageHeading text="Beneficii economice" />
        <p>
          Mai jos îți prezentăm principalele avantaje economice produse de
          integrarea persoanelor cu dizabilități în forța de muncă.
        </p>
      </header>
      <p>
        Conform unui studiu organizat de cei de la Accenture pe 140 de companii
        din America, firmele cu o deschidere spre angajarea persoanelor cu
        dizabilități au avut, în medie, cu 28% venituri mai mari, un venit net
        dublu și marje de profit economic cu 30% mai mari.{" "}
      </p>
      <img src="/plot_Revenue.png" alt="Revenue Graph"></img>
      <img src="/plot_NetIncome.png" alt="Net Income Graph"></img>
      <img
        src="/plot_EconomicProfitMargin.png"
        alt="Economic Profit Margin Graph"
      ></img>
      <p>
        Firmele ce includ persoanele cu dizabilități sunt de două ori mai
        probabil să primească venituri mai mari de la shareholderi față de
        celelalte firme din studiu. În același timp, firmele care au început sa
        își îmbunătățească politica privind persoanele cu dizabilități au văzut
        creșteri de până la de 4 ori mai mult față de celelalte firme.
      </p>
      <br />
      <p>
        Unele companii nu profită de inițiativele de dezvoltare pentru
        persoanele cu dizabilității deoarece sunt îngrijorate de costul de
        acomodare și întreținere a persoanelor cu dizabilități. În realitate
        acestea sunt mici dar profitabile investiții. Conform unui studiu
        realizat de Job Accommodation Network, un departament din cadrul U.S.
        Department of Labor’s Office of Disability Employment Policy, au
        calculat faptul că 59% dintre costurile de acomodare sunt minime, iar
        restul costând undeva la 500$ pentru fiecare persoana cu dizabilități.
      </p>
      <br />
      <h2>Peste avantajul economic</h2>
      <h4>1.Inovare</h4>
      <p>
        Persoanele cu dizabilități trebuie să fie creative pentru a se adapta la
        lumea din jurul lor. Deci, aceste persoane își dezvoltă puncte forte
        precum problem solving, agilitate, persistență și dorința de a
        experimenta - toate acestea sunt esențiale pentru inovare. Având
        persoane cu dizabilități în toate departamentele asigură faptul că
        produsele și serviciile oferite ce ajung pe piață sunt cu adevărat
        incluzive. Făcând produsele mult mai accesibile înseamnă un public mai
        mare de cumpărători.
      </p>
      <h4>2.Productivitate sporită</h4>
      <p>
        Toți angajații beneficiază de un spațiu de muncă diversificat. Studiile
        arată că lucrând alături de persoane cu dizabilități face ca restul
        persoanelor să fie mai conștiente de cum să facă mediul mai inclusiv și
        mai bun pentru toată lumea. Demisiile sunt reduse - cu până la 30 % -
        atunci când firma permite o comunitate cât mai diversificată.
      </p>
      <h4>3.Reputație sporită</h4>
      <p>
        {" "}
        Companiile ce adoptă strategii de marketing și de reclame inclusive tind
        să iasă în evidență în față competiției. Un studiu realizat de National
        Business and Disability Council în 2017 a găsit că 66% dintre
        consumatorii vor prefera să cumpere produse și servicii de la firme
        inclusive, iar 78% dintre cumpărători vor cumpăra de la afaceri ce oferă
        acces ușor persoanelor cu dizabilități în spațiul fizic al locației. Un
        studiu Nielsen din 2016 arată că persoanele cu dizabilități tind să fie
        mai loiale brandului dar și să cheltuiască mai mult decât un consumator
        mediu.
      </p>
    </>
  );
};

export default EconomicBenefits;
