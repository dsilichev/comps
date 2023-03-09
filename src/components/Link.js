import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children}) {
    const { navigate } = useContext(NavigationContext);

    const handleclick = (event) => {
        event.preventDefault();

        navigate(to);

    };
    return <a onClick={handleclick}>{children}</a>
}

export default Link;