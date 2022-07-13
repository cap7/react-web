import React from "react"

type Props = {
  id: string
  name: string
  items: any
  isLoading: boolean
  typeSelect?: any
  onSelectMenuItem:(item: string, selectMenu: string) => void;
}

const SelectMenu: React.FC<Props> = ({ id, name, items, isLoading, typeSelect, onSelectMenuItem }) => {
  
  return (
    <div>
      {isLoading ? (
        <select
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue="Seleccione"
        >
          <option>Cargando</option>
        </select>
      ) : (
        <select
          id={id}
          name={name}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue="Seleccione"
          onChange={obj => onSelectMenuItem(obj.target.value, typeSelect)}
        >
          <option>Seleccione</option>
          {items && items.map((value: any, key: number) => (
            <option key={key} id={value.id} value={value.id}>
              {value.name}</option>
          ))}
        </select>
      )}
    </div>
  )
}

export default SelectMenu
