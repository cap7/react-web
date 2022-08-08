import React, { Fragment } from "react"
import { Disclosure } from "@headlessui/react"
import { CheckIcon, XIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid"

interface Props {
  listMenu: any
  selectForm: (codForm: string) => void
  stateSelectForm: string
}

const MenuForm: React.FC<Props> = (props) => {
  const { listMenu, selectForm, stateSelectForm } = props
  const takeOrderListMenuChild = (submenu: any) => {
    return (
      <ul role="list" className="">
        {submenu.map((value: any, key: number) => (
          <li key={key}>
            <div className="relative pb-8">
              {key !== submenu.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div
                className="relative flex space-x-3 "
                onClick={() => selectForm(value.codigo)}
              >
                <div>
                  <span
                    className={`${
                      value.estado === "1" ? `bg-green-400` : `bg-red-400`
                    } h-8 w-8 rounded-full flex items-center justify-center`}
                  >
                    {value.estado === "1" ? (
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <XIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </div>
                <div className="flex flex-1 min-w-0 place-items-center ">
                  <label
                    className={`${
                      stateSelectForm === value.codigo
                        ? `font-bold underline underline-offset-4 decoration-2 decoration-indigo-600`
                        : `font-normal`
                    } text-sm text-gray-500 text-justify`}
                  >
                    {value.analisis}
                  </label>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <Fragment>
        {listMenu &&
          listMenu.map((value: any, key: number) => (
            <Disclosure as="div" key={key} defaultOpen={true}>
              {({ open }) => (
                <Fragment key={key}>
                  <div className="flow-root px-2 w-60">
                    <Disclosure.Button className="w-full">
                      <div className="flex py-2 place-items-center ">
                        <div className="flex w-full justify-start  ">
                          <label className="text-sm  text-gray-500">
                            {value.seccion}
                          </label>
                        </div>
                        {open ? (
                          <MinusIcon
                            className="h-4 w-4 text-gray-500  "
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="h-4 w-4 text-gray-500  "
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="w-full border-t border-gray-300 mb-4" />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {takeOrderListMenuChild(value.detalle)}
                    </Disclosure.Panel>
                  </div>
                </Fragment>
              )}
            </Disclosure>
          ))}
      </Fragment>
    </div>
  )
}

export default MenuForm
