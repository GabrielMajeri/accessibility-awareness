import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Și eu pot să lucrez</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />
    </Head>

    <NavBar />

    <main>
      <section className="relative h-screen">
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
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-28 mb-auto">
            83% dintre românii cu dizabilități nu sunt integrați pe piața
            muncii*
          </p>
          <p className="text-lg mb-2">Noi credem că și ei pot lucra.</p>
          <a
            href="#find-out-more"
            className="m-6 px-5 py-3 rounded-lg bg-blue-800 text-xl shadow-lg"
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
      <section className="h-screen" id="find-out-more">
        <p>
          Am pregătit o serie de resurse care te pot ajuta să înțelegi mai bine
          barierele cu care se confruntă persoanele cu dizabilități și cum le
          pot depăși.
        </p>
        <div>
          <Card>
            Descoperă{" "}
            <InternalLink href="/assistive-technologies">
              tehnologiile
            </InternalLink>{" "}
            care ajută persoanele cu dizabilități să reușească
          </Card>
          <Card>
            Citește{" "}
            <InternalLink href="/success-stories">
              poveștile lor de succes
            </InternalLink>
          </Card>
          <Card>
            Află ce{" "}
            <InternalLink href="/economic-benefits">
              beneficii economice
            </InternalLink>{" "}
            aduce integrarea persoanelor cu dizabilități în piața muncii
          </Card>
          <Card>
            Ești o persoană cu dizabilități și îți dorești să te angajezi? Vezi
            ce <InternalLink href="/employment-resources">resurse</InternalLink>{" "}
            ți-ar putea fi de ajutor!
          </Card>
          <Card>
            <InternalLink href="/calendar">Calendarul</InternalLink> zilelor
            dedicate persoanelor cu dizabilități
          </Card>
        </div>
      </section>
    </main>
  </>
);

const Card: React.FC = ({ children }) => <div className="m-3">{children}</div>;

export default Home;
