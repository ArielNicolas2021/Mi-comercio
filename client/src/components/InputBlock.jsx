import { useState } from "react"

export const InputBlock = ({ id, label, placeholder, error, type="text", value }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} min={type == "number" ? "1" : ""} className={error ? 'border border-red-300 bg-gray-50 p-2 rounded-md' : 'border border-gray-300 bg-gray-50 p-2 rounded-md'} value={inputValue} onChange={handleChange} />
      {
        error ? <p className="text-red-600">Este campo es obligatorio.</p> : null
      }
    </div>
  )
}
