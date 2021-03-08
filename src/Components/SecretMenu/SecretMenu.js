import React, { useState } from 'react'
import './SecretMenu.css'

const SecretMenu = props => {
    let [themeMenu, setThemeMenu] = useState(false)

    const changeTheme = (theme) => {
        props.themeFn(theme)
        setThemeMenu(false)
    }

    return (
        <section className='secret-menu'>
            <h3>Secret Menu</h3>
            <h4>Select a Theme</h4>
            <div id='theme-display' onClick={() => setThemeMenu(!themeMenu)}>{props.theme}</div>
            {themeMenu
                ? (
                    <div id='theme-flex'>
                        <p onClick={() => changeTheme('mountain')}>mountain</p>
                        <p onClick={() => changeTheme('space')}>space</p>
                        <p onClick={() => changeTheme('ocean')}>ocean</p>
                    </div>
                )
                : null}
            <button onClick={() => props.showMenu(false)}>Exit</button>
        </section>
    )
}

export default SecretMenu