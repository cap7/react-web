import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
  SelectorIcon,
} from "@heroicons/react/solid"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

type Props = {
  onSignOut?: () => void
  user: any
}

const SidebarNav: React.FC<Props> = ({ onSignOut, user }) => {
  return (
    <div className="min-h-full">
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
        <div className=" py-2 h-0 flex-1 flex flex-col overflow-y-auto">
          <Menu as="div" className="px-3 relative inline-block text-left">
            <div>
              <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                <span className="flex w-full justify-between items-center">
                  <span className="flex min-w-0 items-center justify-between space-x-3">
                   
                    <span className="flex-1 flex flex-col min-w-0">
                      <span className="text-gray-900 text-sm font-medium truncate">
                        {user && user.nombre}
                      </span>
                      <span className="text-gray-500 text-sm truncate">
                      {user && user.codigo}
                      </span>
                    </span>
                  </span>
                  <SelectorIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
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
              <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                <div className="py-1" onClick={onSignOut}>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Cerrar sesión
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <nav className="px-3 mt-6">
            <div className="space-y-1"></div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SidebarNav
