import React from 'react';

function MenuComponent({MenuList, menuClass, menuItemClass}) {

    const handleMenuClick = () => {

    };

    return (
        <ul className={menuClass}>
            {MenuList && MenuList.map((item)=>
                <li className={menuItemClass} onClick={handleMenuClick}><a href={item.href}>{item.value}</a></li>
            )}
        </ul>
    );
}

export default MenuComponent;
