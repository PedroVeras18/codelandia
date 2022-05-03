import './Header.css'
import React from 'react';

import { FaSistrix } from 'react-icons/fa'

export default function Header(){
    return(
        <div className='Header'>
            <div className="Text">
                <p>Codelândia</p>
                <p>blog</p>
            </div>
            <div className="Input">
                <FaSistrix className='Icon' size={30}></FaSistrix>
                <input type="text"
                    placeholder='Pesquisar no blog' />
            </div>
        </div>
        
    )
}