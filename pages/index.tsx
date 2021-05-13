import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

import styles from "./index.module.css";

const Home: React.FC = () => (
  <>
    <section className={`relative ${styles.hero}`}>
      <div className="-z-10 absolute w-full h-full select-none">
        <Image
          src="/landing-page-background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          className="absolute w-full h-full"
        ></div>
      </div>
      <div className="mx-6 h-full flex flex-col items-center text-white text-center">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-24 mb-auto">
          83% dintre românii cu dizabilități nu sunt integrați pe piața muncii*
        </p>
        <p className="text-lg mb-2">Noi credem că și ei pot lucra.</p>
        <a
          href="#find-out-more"
          className="m-6 px-5 py-3 rounded-lg ring-4 bg-blue-800 text-xl shadow-lg"
        >
          Află mai multe
        </a>
        <small className="m-3">
          *conform{" "}
          <ExternalLink
            href="https://adevarul.ro/economie/stiri-economice/analizA-doar-17-romanii-cudizabilitati-integrati-piata-muncii-1_5f9807415163ec42714332e8/index.html"
            className="underline"
          >
            acestui studiu
          </ExternalLink>{" "}
          realizat de OLX
        </small>
      </div>
    </section>
    <section
      className={`min-h-screen bg-gray-100 ${styles.findOutMore}`}
      id="find-out-more"
    >
      <p className="mx-auto max-w-2xl p-5">
        Am pregătit o serie de resurse care te pot ajuta să înțelegi mai bine{" "}
        <strong>barierele</strong> cu care se confruntă persoanele cu
        dizabilități și cum le pot <strong>depăși</strong>.
      </p>
      <div>
        <Card href="/assistive-technologies">
          Descoperă <b>tehnologiile</b> care ajută persoanele cu dizabilități să
          reușească
        </Card>
        <Card href="/success-stories">
          Citește <b>poveștile lor de succes</b>
        </Card>
        <Card href="/economic-benefits">
          Află ce <b>beneficii economice</b> aduce integrarea persoanelor cu
          dizabilități în piața muncii
        </Card>
        <Card href="/employment-resources">
          Ești o persoană cu dizabilități și îți dorești să te angajezi? Vezi ce{" "}
          <b>resurse</b> ți-ar putea fi de ajutor!
        </Card>
        <Card href="/calendar">
          Parcurge <b>calendarul</b> zilelor dedicate persoanelor cu
          dizabilități
        </Card>
      </div>
    </section>
    <section className="bg-gray-200">
      <p className="p-3 text-center">
        Află mai multe despre{" "}
        <InternalLink href="/about">acest proiect</InternalLink>.
      </p>
    </section>
  </>
);

const Card: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="block mx-auto my-2 p-4 max-w-md bg-white rounded border-2 border-gray-400 shadow">
      {children}
    </a>
  </Link>
);

export default Home;
