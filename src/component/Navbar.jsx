import profile from '../assets/img/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="flex justify-between py-5 mx-12">
            <div className="ml-10"><strong>Logo</strong></div>
            <ul className="flex justify-end space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Course</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>

                <li className="relative pl-4" style={{ marginTop: '-8px' }}>
                    <div className="flex items-center" onClick={handleToggleDropdown}>
                        <img src={profile} alt="prof" className="h-12 navprofile" style={{ marginTop: '-4px' }} />
                        <p><strong>Lina</strong> <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></p>
                    </div>

                    {dropdownVisible && (
                        <ul className="absolute right-0 top-full bg-white border border-gray-200 rounded-md py-2 mt-1">
                            <li className="flex items-center px-4">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                <span>Profile</span>
                            </li>
                            <li className="flex items-center px-4">
                                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                                <span>Logout</span>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
