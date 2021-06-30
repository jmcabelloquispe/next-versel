import React from 'react'
import Nav from './Nav'
import Container from '@material-ui/core/Container';

type Props = {
  children: React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div>
      <Nav /> 
      <Container maxWidth={false}>
        <>
        {children}
        </>
      </Container>
    </div>
  )
}

export default Layout;
