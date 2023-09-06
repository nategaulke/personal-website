import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function ExperienceModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex">
        <button type="button" className="rounded-lg" onClick={openModal}>
          <img
            className="aspect-square w-60 rounded-lg opacity-50"
            src="/schwab_logo.svg"
            alt="Schwab Logo"
          />
          <h3 className="mt-2 text-xl font-bold">Schwab</h3>
        </button>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-full w-full max-w-5xl transform overflow-hidden rounded-2xl border-4 border-cyan-500 bg-midnight py-8 pr-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <div className="flex h-full w-1/3 flex-col items-center">
                      <img
                        className="h-48 rounded-lg md:h-60"
                        src="/schwab_logo.svg"
                        alt="Schwab Logo"
                      />
                      <div className="mt-2 flex w-full justify-center">
                        <img
                          className="mx-2 aspect-square h-8 rounded-full"
                          src="/dev-icons/java.png"
                          alt="Java"
                        />
                        <img
                          className="mx-2 aspect-square h-8 rounded-full"
                          src="/dev-icons/spring.png"
                          alt="Spring"
                        />
                      </div>
                    </div>
                    <div className="w-2/3">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-white md:text-2xl"
                      >
                        Associate Software Engineer
                      </Dialog.Title>
                      <h4 className="font-bold text-white">
                        Jun. 2023 - Present
                      </h4>
                      <div className="mt-2">
                        <p className="text-white">
                          I started worked at Charles Schwab as a software
                          developer intern from June 2022 to August 2022. I
                          enjoyed the company culture of Charles Schwab and
                          learned a lot in those nine weeks, thanks to my
                          manager and technical advisors. When I was offered a
                          role to come back full time after graduation, I was
                          happy to accept. While my team is based primarily in
                          Phoenix, Arizona, I work remotely in Orlando, Florida.
                          My role in the firm is in Retirement Business
                          Services. I have done different dev tasks such as
                          writing new API endpoints, scripting test automation,
                          and managing servers.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="mt-4 rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium text-white hover:border-white"
                        onClick={closeModal}
                      >
                        &larr; Back
                      </button>
                    </div>
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

export default ExperienceModal;
