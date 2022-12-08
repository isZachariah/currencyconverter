import type { FC } from "react";

type NumberInputProps = {
  value: string
  onChange: ((value: string) => void)
    id: string
    label: string
}


export const NumberInput: FC<NumberInputProps> = ({ value, onChange, id, label }) => {

  return (
    <div className={"flex flex-col align-left justify-end"}>
      <label className='' htmlFor={id}>{label}</label>
      <input
        type={"number"}
        id={id}
        name={id}
        required
        className={"input[type=number] outline-none h-12 w-80 rounded border-gray-700 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}