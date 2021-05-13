import Image from "next/image";
import PageHeading from "../components/PageHeading";

const SuccessStories: React.FC = () => (
  <>
    <header className="m-4">
      <PageHeading text="Povești de succes" />
      <p className="mx-auto max-w-prose">
        Pe această pagină am vrut să prezentăm poveștile unor oameni care au
        muncit din greu, s-au adaptat și au depășit prejudecățile societății
        asupra persoanelor cu dizabilități.
      </p>
    </header>
    <div className="max-w-xl mx-auto flex flex-wrap">
      <SuccessStory
        name="Iulian Crăciun"
        job="Om de afaceri"
        disability="Deficiențe motorii"
        imageSrc="/success-stories/iulian-craciun.jpg"
      />
      <SuccessStory
        name="George Nicolescu"
        job="Cântăreț"
        disability="Deficiențe de vedere"
        imageSrc="/success-stories/george-nicolescu.jpg"
      />
      <SuccessStory
        name="Marlee Matlin"
        job="Actriță"
        disability="Deficiențe auditive"
        imageSrc="/success-stories/marlee-matlin.jpg"
      />
      <SuccessStory
        name="Richard Branson"
        job="Om de afaceri"
        disability="Dislexie"
        imageSrc="/success-stories/richard-branson.jpg"
      />
    </div>
  </>
);

const SuccessStory: React.FC<{
  name: string;
  job: string;
  disability: string;
  imageSrc: string;
}> = ({ name, job, disability, imageSrc }) => (
  <div className="flex-grow max-w-md m-2 px-10 py-4 rounded-lg shadow-md">
    <div className="relative h-36">
      <Image src={imageSrc} layout="fill" objectFit="contain" />
    </div>
    <h2 className="text-center text-lg font-bold">{name}</h2>
    <p className="text-center">{job}</p>
    <p className="text-center text-sm text-gray-500">{disability}</p>
  </div>
);

export default SuccessStories;
