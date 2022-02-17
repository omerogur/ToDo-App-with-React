import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const initialValue = { title: "", id: "" , completed: false }


function Header({ todoSet,todos }) {
    const [form,setForm] = useState(initialValue);
     //input girilen değeri yakalıyoruz
    const inputChanged = (e) => {
        setForm({...form,title:e.target.value, id:nanoid()})
        console.log("test",form.title)
    }
    //form submit halinde
      const onSubmit = (e) => {
          e.preventDefault()
          if(form.title ===""){
              return false
          }
          todoSet([...todos,form])
          setForm(initialValue)
      }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit} >
                <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus 
                value ={form.title} 
                onChange={inputChanged}   
                />
            </form>

        </header>
    )

}


export default Header