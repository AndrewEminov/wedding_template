import React from 'react';

function MenuComponent({MenuList, menuClass, menuItemClass, menuItemHref}) {

    const handleMenuClick = () => {

    };

    return (
        <ul className={menuClass}>
            {MenuList.map((value)=>
                <li className={menuItemClass} onClick={handleMenuClick}><a href={menuItemHref}>{value}</a></li>
            )}
        </ul>
    );
}

export default MenuComponent;
