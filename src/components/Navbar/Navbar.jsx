import { Link } from 'react-router-dom';
import logo from '../../assets/taskMaster.png';
import favIcon from '../../assets/taskmaster-favicon-color.png';

const Navbar = () => {
    return (
        <div>
            <div className='max-w-[90rem] mx-auto'>
                <img className='h-9' src={logo} alt="" />
                {/* <img className='' src={favIcon} alt="" /> */}
            </div>
            <div>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;