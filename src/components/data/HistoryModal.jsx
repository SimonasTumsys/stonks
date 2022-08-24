/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CircularIndeterminate from "./CircularIndeterminate";
import Chart from "./Chart";

const HistoryModal = (props) => {
  return (
    <Transition.Root show={props.historyModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        onClose={props.toggleHistoryModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-500 
          bg-opacity-75 transition-opacity"
          />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div
            className="flex items-center sm:items-center 
          justify-center min-h-full p-8 text-center sm:p-8 min-w-[33.25rem] "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative bg-white rounded-lg 
              text-left overflow-hidden shadow-xl transform transition-all 
              :my-8 w-full sm:max-w-4xl"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                  {props.candleLoading ? (
                    <div className="flex justify-center">
                      <CircularIndeterminate />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Chart
                        symbol={props.symbol}
                        dateFrom={props.dateFrom}
                        dateTo={props.dateTo}
                        candleLoading={props.candleLoading}
                        candleData={props.candleData}
                        setCandleData={props.setCandleData}
                      />
                    </div>
                  )}
                </div>
                <div
                  className="bg-gray-200 px-4 py-3 sm:px-6
                 flex flex-row-reverse"
                >
                  <button
                    type="button"
                    className="mt-3 inline-flex justify-center 
                    rounded-md border border-gray-300 shadow-sm px-4 py-2
                     bg-white text-base font-medium text-gray-700
                      hover:bg-gray-50 focus:outline-none 
                     sm:mt-0 
                       sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={props.toggleHistoryModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HistoryModal;
