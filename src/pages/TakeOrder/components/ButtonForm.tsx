import React from "react"
import { SaveIcon, PlusIcon, PencilIcon } from "@heroicons/react/solid"

interface Props {
  disabledNew: boolean
  disabledSave: boolean
  disabledEdit: boolean
  onClickNew: () => void
  onClickSave: () => void
  onClickEdit: () => void
}

const ButtonForm: React.FC<Props> = (props) => {
  const {
    disabledNew,
    disabledSave,
    disabledEdit,
    onClickNew,
    onClickSave,
    onClickEdit,
  } = props
  return (
    <div className="space-y-4">
      <div>
        <button
          type="submit"
          className= {`${disabledNew ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' } 'group relative flex w-40 py-2 place-items-center justify-center border border-transparent text-sm font-medium rounded-md text-white`}
          onClick={() => onClickNew()}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-5">
            <PlusIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          Nuevo
        </button>
      </div>
      <div>
        <button
          type="submit"
          className= {`${disabledSave ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' } 'group relative flex w-40 py-2 place-items-center justify-center border border-transparent text-sm font-medium rounded-md text-white`}
          onClick={() => onClickSave()}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-5">
            <SaveIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          Guardar
        </button>
      </div>
      <div>
        <button
          type="submit"
          className= {`${disabledEdit ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' } 'group relative flex w-40 py-2 place-items-center justify-center border border-transparent text-sm font-medium rounded-md text-white`}
          onClick={() => onClickEdit()}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-5">
            <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          Editar
        </button>
      </div>
    </div>
  )
}

export default ButtonForm
