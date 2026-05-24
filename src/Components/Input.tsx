import React from 'react'

type Props = {
    
    id: string, 
    name?: string,
    type : string,
    className?: string,
    placeholder?: string,
    value?: string,
    pattern?: string,
    maxLength?: number,
    inputMode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Input({type,name,id,className,placeholder, value, pattern, maxLength, inputMode, onChange}: Props) {
  return (
    <input type={type} 
    id={id} 
    name={name}
    placeholder={placeholder} 
    className={`${className} py-3 px-3 border border-[#D9D9D9] rounded-md w-full`} 
    value={value}
    pattern={pattern}
    maxLength={maxLength}
    inputMode={inputMode}
    onChange={onChange}    
    />
  )
}