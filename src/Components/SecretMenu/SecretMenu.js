import './SecretMenu.css'

const SecretMenu = props => {
    return (
        <section className='secret-menu'>
            <h3>Secret Menu</h3>
            <button onClick={() => props.showMenu(false)}>Exit</button>
        </section>
    )
}

export default SecretMenu