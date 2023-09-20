import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaBars } from "react-icons/fa";

function MobileHeader() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => void element?.scrollIntoView({ behavior: "smooth" }));
    closeModal();
  };

  return (
    <>
      <div className="flex">
        {!isOpen && (
          <button type="button" aria-label="Menu" onClick={openModal}>
            <FaBars className="fixed left-0 right-0 z-10 m-4 flex bg-opacity-60 text-4xl text-accent-blue mix-blend-luminosity" />
          </button>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="max-w-screen h-full w-full transform overflow-hidden rounded-2xl text-left transition-all">
                  <div className="flex h-[50vh] w-full flex-col flex-wrap justify-between text-white">
                    <button type="button" onClick={closeModal}>
                      <FaBars className="fixed left-0 right-0 m-4 flex bg-opacity-60 text-4xl text-white transition-none" />
                    </button>
                    <button
                      type="button"
                      className="mt-12 rounded border border border-transparent p-2 hover:border-white"
                      onClick={() => handleClick("home")}
                    >
                      HOME
                    </button>
                    <button
                      type="button"
                      className="rounded border border border-transparent p-2 hover:border-white"
                      onClick={() => handleClick("about")}
                    >
                      ABOUT
                    </button>
                    <button
                      type="button"
                      className="rounded border border border-transparent p-2 hover:border-white"
                      onClick={() => handleClick("experience")}
                    >
                      EXPERIENCE
                    </button>
                    <button
                      type="button"
                      className="rounded border border border-transparent p-2 hover:border-white"
                      onClick={() => handleClick("projects")}
                    >
                      PROJECTS
                    </button>
                    <button
                      type="button"
                      className="rounded border border border-transparent p-2 hover:border-white"
                      onClick={() => handleClick("contact")}
                    >
                      CONTACT
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MobileHeader;
