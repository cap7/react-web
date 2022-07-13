import React from "react"

type Props = {
  id?: string
  name?: string
}

const Input: React.FC<Props> = ({id, name}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={name}
          id={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder=""
        />
      </div>
    </div>
  )
}

export default Input
