import { useState } from "react"

export default function Layout(props:any){
    
    return(
        <div className="bg-gray-300">
            {props.children}
        </div>
    )
}