import React from 'react'
import { SidebarContainer,
        Icon,
        CloseIcon,
        SideBtnWrap,
        SidebarLink,
        SidebarRoute,
        SidebarWrapper,
        SidebarMenu
    } from './SidbarElements'  
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='description' onClick={toggle}>
                        Description
                    </SidebarLink>
                    <SidebarLink to='search' onClick={toggle}>
                        Goto Date
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
