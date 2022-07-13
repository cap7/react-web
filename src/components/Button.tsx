import React from "react"

type Props = {
  id: string
  name: string
  text: string
  sm?: boolean
  md?: boolean
  lg?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ id, name, text, sm, md, lg, onClick }) => {
  return (
    <>
      {sm && (
        <button
          id={id}
          name={name}
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {md && (
        <button
          id={id}
          name={name}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {lg && (
        <button
          id={id}
          name={name}
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default Button
