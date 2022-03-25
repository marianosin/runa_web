import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



export default function CartWidget(){
    let styles = {
        marginRight: '15px'
    }
    return (
        <FontAwesomeIcon icon={faCartShopping} style={styles} />

    )
}
