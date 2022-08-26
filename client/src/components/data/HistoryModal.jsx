import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CircularIndeterminate from "./CircularIndeterminate";
import Chart from "./Chart";
import ResolutionButtonGroup from "./ResolutionButtonGroup";
import { createFetchUrlForPriceHistory } from "../../utils/utils";
import useSkipFirstRender from "../../hooks/useSkipFirstRender";

const HistoryModal = (props) => {
  const rerenderOnResolutionChange = () => {
    const newUrl = createFetchUrlForPriceHistory(
      props.symbol,
      props.resolution,
      props.dateFrom,
      props.dateTo
    );
    props.setUrl(newUrl);
  };

  useSkipFirstRender(() => {
    rerenderOnResolutionChange();
  }, [props.resolution]);

  return (
    <Transition.Root show={props.historyModal} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={() => {}}>
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
          justify-center min-h-full p-8 text-center sm:p-8"
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
              :my-8 w-full sm:max-w-3xl"
              >
                {props.candleLoading ? (
                  <div className="flex justify-center items-center h-24 bg-gray-400">
                    <CircularIndeterminate />
                  </div>
                ) : (
                  <div className="flex justify-center w-46">
                    <Chart
                      symbol={props.symbol}
                      dateFrom={props.dateFrom}
                      dateTo={props.dateTo}
                      candleLoading={props.candleLoading}
                      candleData={props.candleData}
                      setCandleData={props.setCandleData}
                      companyName={props.companyName}
                    />
                  </div>
                )}
                <div
                  className="bg-gray-700 px-4 py-3 sm:px-6
                 flex justify-between"
                >
                  <ResolutionButtonGroup
                    resolution={props.resolution}
                    handleResolutionChange={props.handleResolutionChange}
                    candleLoading={props.candleLoading}
                  />
                  <button
                    type="button"
                    className="mt-3 inline-flex justify-center 
                    rounded-md  shadow-sm px-4 py-2
                     bg-red-800 text-base font-medium text-white
                      hover:bg-red-700 focus:outline-none 
                     sm:mt-0 
                       sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={props.toggleHistoryModal}
                  >
                    Close
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
