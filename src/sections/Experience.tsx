import ExperienceModal from "../components/experience/ExperienceModal";

function Experience() {
  return (
    <div className="relative min-h-screen bg-white bg-cover">
      <div className="mx-60 mt-12 text-black">
        <h2 className="text-6xl font-bold">experience.</h2>
        <br />
        <div className="grid grid-cols-3 justify-between">
          <ExperienceModal />
        </div>
      </div>
    </div>
  );
}

export default Experience;
