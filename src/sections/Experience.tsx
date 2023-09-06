import ExperienceModal from "../components/experience/ExperienceModal";

// h-full w-full max-w-5xl transform overflow-hidden rounded-2xl align-middle

function Experience() {
  return (
    <div className="relative min-h-screen bg-white bg-cover">
      <div className="mx-60 mt-12 text-black">
        <h2 className="text-6xl font-bold">experience.</h2>
        <br />
        <div className="relative grid w-screen grid-cols-3">
          <ExperienceModal />
        </div>
      </div>
    </div>
  );
}

export default Experience;
