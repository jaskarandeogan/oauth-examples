import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import classNames from "classnames";

export default function Dropdowns({ children, Icon, text, image, className, translate="md:translate-x-0" }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={classNames("inline-flex w-full justify-center  items-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 ", className)}>
        {Icon&&<Icon className="h-5 w-5" aria-hidden="true"  /> }
        {text&&<span>{text}</span>}
        {image&&<Image src={image.src} alt={image.alt} width={image.width} height={image.height} className={image.className}/>}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={classNames("absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2", translate)}>
          <div className="py-1 flex flex-col">
           {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}