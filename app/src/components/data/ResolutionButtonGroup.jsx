import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { classNames, isMinutes } from "../../utils/utils";
import { Tooltip } from "@material-tailwind/react";

const ResolutionButtonGroup = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTooltipOpen = (open) => {
    setTooltipOpen(open);
  };

  const handleTooltipClose = (open) => {
    setTooltipOpen(open);
  };

  return (
    <Menu as="div" className="">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="bottom-0">
          <Menu.Items
            className="overflow-y-auto h-30 w-14
              origin-center absolute right-1.5 rounded-md 
              shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y
              divide-gray-100 focus:outline-none 
              hover:scrollbar-thin scrollbar-none bottom-1"
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="1"
                      onClick={props.handleResolutionChange}
                    >
                      1m
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="5"
                      onClick={props.handleResolutionChange}
                    >
                      5m
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="15"
                      onClick={props.handleResolutionChange}
                    >
                      15m
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="30"
                      onClick={props.handleResolutionChange}
                    >
                      30m
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="60"
                      onClick={props.handleResolutionChange}
                    >
                      60m
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="D"
                      onClick={props.handleResolutionChange}
                    >
                      D
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="W"
                      onClick={props.handleResolutionChange}
                    >
                      W
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className=" hover:bg-gray-100 w-full">
                    <button
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm w-full text-center "
                      )}
                      value="M"
                      onClick={props.handleResolutionChange}
                    >
                      M
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </Transition>

      <div className="h-full w-16">
        <Tooltip
          content="Resolution"
          placement="right"
          open={tooltipOpen}
          className={classNames(
            props.candleLoading ? "hidden" : "",
            "text-black bg-white w-30 h-6 rounded text-center align-middle z-50"
          )}
        >
          <Menu.Button
            onMouseOver={() => handleTooltipOpen(true)}
            onMouseLeave={() => handleTooltipClose(false)}
            className="mt-3 inline-flex justify-center 
          rounded-md  shadow-sm px-4 py-2
           bg-blue-800 text-white font-medium
            hover:bg-blue-700 focus:outline-none 
           sm:mt-0 sm:w-auto sm:text-sm"
          >
            <div className="my-auto flex">
              <p>
                {isMinutes(props.resolution)
                  ? props.resolution + "m"
                  : props.resolution}
              </p>
              <ChevronUpIcon
                className="-mr-1 h-5 w-5 pt-1"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </Tooltip>
      </div>
    </Menu>
  );
};

export default ResolutionButtonGroup;
