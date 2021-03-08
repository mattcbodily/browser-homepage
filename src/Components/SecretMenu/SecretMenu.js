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
            <div onClick={() => setThemeMenu(true)}>{props.theme}</div>
            {themeMenu
                ? (
                    <div>
                        <p onClick={() => changeTheme('mountain')}>Mountain</p>
                        <p onClick={() => changeTheme('space')}>Space</p>
                        <p onClick={() => changeTheme('ocean')}>Ocean</p>
                    </div>
                )
                : null}
            <button onClick={() => props.showMenu(false)}>Exit</button>
        </section>
    )
}

export default SecretMenu