import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";

function Modal(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function getLinkSymbols() {
    let websites: JSX.Element[] = [];
    if (props.linkedSites != null) {
      for (let i = 0; i < props.linkedSites.length; i++) {
        if (props.linkedSites[i].toLowerCase().includes("github")) {
          websites.push(
            <a
              href={props.linkedSites[i]}
              target="_blank"
              className="px-2 text-3xl font-medium text-black hover:opacity-70"
              key={i}
            >
              <FaGithub />
            </a>
          );
        } else {
          websites.push(
            <a
              href={props.linkedSites[i]}
              target="_blank"
              className="px-2 text-3xl font-medium text-black hover:opacity-70"
              key={i}
            >
              <TbWorld />
            </a>
          );
        }
      }
      return <div className="flex">{websites}</div>;
    }
    return <div />;
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
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
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
                <Dialog.Panel
                  className={`h-full w-full transform overflow-hidden rounded-2xl border-4 border-cyan-500 bg-white px-8 py-8 text-left align-middle shadow-xl transition-all sm:px-0 ${
                    props.logo ? "max-w-5xl sm:pr-8" : "max-w-3xl sm:px-8"
                  }`}
                >
                  <div className="sm:flex">
                    {isMobile && (
                      <div className="w-full text-right">
                        <button
                          type="button"
                          className="mb-4 rounded-md border border-transparent bg-transparent px-2 py-1 text-black hover:border-white"
                          onClick={closeModal}
                        >
                          <FaTimes className="text-3xl" />
                        </button>
                      </div>
                    )}
                    {props.logo ? (
                      <div className="flex h-full w-auto flex-col items-center sm:w-1/3">
                        <img
                          className="aspect-square h-48 rounded-lg md:h-60"
                          src={props.logo}
                          alt={props.title}
                        />
                        {props.miniIcons ? (
                          <div className="mt-2 flex w-full flex-wrap justify-center">
                            {props.miniIcons.map(
                              (miniIcon: any, index: any) => (
                                <div key={index}>{miniIcon}</div>
                              )
                            )}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                    <div
                      className={`w-auto items-center justify-center ${
                        props.logo ? "sm:w-2/3" : ""
                      } `}
                    >
                      <Dialog.Title
                        as="h3"
                        className="flex justify-between text-center text-xl font-bold text-black sm:text-left md:text-2xl"
                      >
                        <div>
                          {props.title} - {props.position}
                        </div>
                        {!isMobile && (
                          <button
                            type="button"
                            className="rounded-md border border-transparent bg-transparent px-2 py-1 text-black hover:opacity-50"
                            onClick={closeModal}
                          >
                            <FaTimes className="text-3xl" />
                          </button>
                        )}
                      </Dialog.Title>
                      <h4 className="text-center font-bold text-black sm:text-left">
                        {props.timePeriod}
                      </h4>
                      <div className="mt-2">
                        <p className="text-justify text-black">
                          {props.description}
                        </p>
                      </div>
                      <div className="mt-4 flex w-full justify-end">
                        {getLinkSymbols()}
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

export default Modal;
