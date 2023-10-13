import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { isMobile } from "react-device-detect";

function Modal(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        aria-labelledby="buttonTitle"
        className="flex justify-center rounded-lg duration-200 hover:-translate-y-2"
        onClick={openModal}
      >
        {props.button}
      </button>
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
                <Dialog.Panel className="h-full w-full max-w-5xl transform overflow-hidden rounded-2xl border-4 border-cyan-500 bg-white px-8 py-8 text-left align-middle shadow-xl transition-all sm:px-0 sm:pr-8">
                  <div className="sm:flex">
                    {isMobile && (
                      <button
                        type="button"
                        className="text-md mb-4 rounded-md border border-transparent bg-transparent px-2 py-1 font-medium text-black hover:border-white"
                        onClick={closeModal}
                      >
                        &larr; Back
                      </button>
                    )}
                    <div className="flex h-full w-auto flex-col items-center sm:w-1/3">
                      {props.logo ? (
                        <div>
                          <img
                            className="aspect-square h-48 rounded-lg md:h-60"
                            src={props.logo}
                            alt={props.title}
                          />
                          <div className="mt-2 flex w-full flex-wrap justify-center">
                            {props.miniIcons.map(
                              (miniIcon: any, index: any) => (
                                <div key={index}>{miniIcon}</div>
                              )
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-2 flex h-48 w-full items-center justify-center">
                          {props.miniIcons.map((miniIcon: any, index: any) => (
                            <div
                              className="mx-2 rounded-full bg-white text-3xl text-black"
                              key={index}
                            >
                              {miniIcon}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-auto items-center justify-center sm:w-2/3">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-xl font-bold text-black sm:text-left md:text-2xl"
                      >
                        {props.position}
                      </Dialog.Title>
                      <h4 className="text-center font-bold text-black sm:text-left">
                        {props.timePeriod}
                      </h4>
                      <div className="mt-2">
                        <p className="text-justify text-black">
                          {props.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="mt-4 w-full rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium text-black hover:border-black sm:w-max"
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

export default Modal;
