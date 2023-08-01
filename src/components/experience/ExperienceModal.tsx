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
        <button type="button" onClick={openModal}>
          <img
            className="w-60 rounded-lg opacity-50"
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
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl border-4 border-cyan-500 bg-midnight p-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <div>
                      <img
                        className="mr-8 w-60 rounded-lg"
                        src="/schwab_logo.svg"
                        alt="Schwab Logo"
                      />
                    </div>
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-bold text-white"
                      >
                        Associate Software Engineer
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your payment has been successfully submitted. We’ve
                          sent you an email with all of the details of your
                          order.
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
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