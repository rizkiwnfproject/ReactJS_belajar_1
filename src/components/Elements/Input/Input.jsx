import React, { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => {
    const { type, placeholder, name} = props;
    return (
        <input type={type} className='text-sm border border-slate-400 rounded w-full py-2  px-3 text-slate-700 placeholder:opacity-50' placeholder={placeholder} name={name} ref={ref} />
    )
})

// (props) => {
//     const { type, placeholder, name, ref } = props;
//     return (
//         <input type={type} className='text-sm border border-slate-400 rounded w-full py-2  px-3 text-slate-700 placeholder:opacity-50' placeholder={placeholder} name={name} ref={ref}/>
//     )
// }
