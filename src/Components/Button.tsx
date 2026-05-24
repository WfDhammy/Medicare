import React from 'react'


type Props = {
    className? : string,
    content: string,
    type: "button" | "submit" | "reset",
    onClick?: (e : React.MouseEvent<HTMLButtonElement>)=> void,
    
}

export default function Button({className,content,type,onClick}: Props) {
  return (
    <button className={`z${className} bg-[#28574E] w-full h-[52px] rounded-md text-white cursor-pointer hover:bg-[#4F8379]`} type={type} >
      {content}
    </button>
  )
}