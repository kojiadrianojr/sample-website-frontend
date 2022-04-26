import styled from 'styled-components'
import React from 'react'
import { Flex, Text } from '@metagg/mgg-uikit'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'
import MenuButton from './MenuButton';

interface Props {
    isPushed: boolean;
    togglePush: () => void;
    href: string;
    isMobile: boolean;
  }

  const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;
const Logo:React.FC<Props> = ({isPushed, togglePush, href, isMobile }) => {
    const innerLogo = <img alt='mgg-logo' src='/logo.png' width='60px' />

    return (
        <Flex>
            {
                isMobile && (
                    <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
                        <Menu />
                    </MenuButton>
                )
            }

            <StyledLink to={href} aria-label='MGG Homepage'>
                {innerLogo}
            </StyledLink>
        </Flex>
    )
}

export default Logo;