import React from 'react';
import ResponsiveAntMenu from 'responsive-ant-menu'
import { Menu } from 'antd';

const Nav = () => (
    <ResponsiveAntMenu
        activeLinkKey={location.pathname}
        mobileMenuContent={isMenuShown => isMenuShown ? <button>Close</button> : <button>Open</button>}
        menuClassName={'responsive-ant-menu'}
    >
        {(onLinkClick) =>
            <Menu>
                <Menu.Item key='/' className={'menu-home'}>
                    <a onClick={onLinkClick} href={'/#'}>Home</a>
                </Menu.Item>
                <Menu.Item key='/#foo'>
                    <a onClick={onLinkClick} href={'/#foo'}>Foo</a>
                </Menu.Item>
                <Menu.Item key='/#bar'>
                    <a onClick={onLinkClick}  href={'/#bar'}>Bar</a>
                </Menu.Item>
            </Menu>
        }
    </ResponsiveAntMenu>
);

export default Nav;
