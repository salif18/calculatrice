import React, { useState } from 'react';

const Calculatrice = () => {
   
    const Symbole = ['1','2','3','4','5','6','7','8','9','0']
    const Signes = ['(',')','+','-','/','%','.']
    
    const [ecrant,setEcrant]=useState('')

    const HandleClick = (e)=>{
        setEcrant(ecrant.concat(e.target.value))
    }
    const Delete = ()=>{
        setEcrant('')
    }
    const resultat = ()=>{
        setEcrant(eval(ecrant).toString())
    }
    return (
        <div className='calc'>
         <h1 className='title'>Calculatrice</h1>
           <input type='text' className='ecrant' placeholder='0' value={ecrant}/>
            {Symbole.map((v)=>(<button type='button' value={v} className='btn-symbole' onClick={HandleClick}>{v}</button>))}
            {Signes.map((s)=>(<button type='button' value={s} className='btn-signes' onClick={HandleClick}>{s}</button>))}
            <button type='button' value={'*'} className='btn-signes' onClick={HandleClick}>X</button>
            <button type='button' value={'**'} className='btn-signes' onClick={HandleClick}>^</button>
            <button type='button' value={'Math.sqrt'} className='btn-signes'>Rc</button>
           <button type='button' value={'C'} className='btn-clear' onClick={Delete}>C</button>
           <button type='button' value={'='} className='result' onClick={resultat}>=</button>
        </div>
    );
};

export default Calculatrice;