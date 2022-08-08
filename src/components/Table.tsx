import React, { Fragment } from "react"

type Props = {
  id: string
  columns: any[]
  data: any
}

const Table: React.FC<Props> = ({ id, columns, data }) => {
  return (
    <div id={id} className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full  divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  {columns.map((value: string, key: number) => (
                    <Fragment key={key}>
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        {value}
                      </th>
                    </Fragment>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((value: any, key: number) => (
                  <tr className="divide-x divide-gray-200" key={key}>

                    {value.map((item: any, key: number) => (
                      <td
                        key={key}
                        className="whitespace-nowrap px-5 py-3 text-sm text-gray-500"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
