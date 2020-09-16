import {useState} from "react";
export const useForm=(initialvalue)=>{
    const[ value ,setValue]=useState(initialvalue);
    return[value,event=>{
        setValue({...value,
                    [event.target.name] : event.target.value,});}]
}