import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../actions'

function Header() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <header>
            {isLogged ?
            <button onClick={() => dispatch(signIn())}>Logout</button>
            :<button onClick={() => dispatch(signIn())}>Login</button> }
            
        </header>
    )
}

export default Header