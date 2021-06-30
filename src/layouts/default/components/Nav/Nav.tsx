import ActiveLink from '../../../../common/components/ActiveLink';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: ' (current page)';
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Pedidos</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/order/pvea?email=martin.rivera.c@gmail.com&dateFrom=2021-01-01&dateTo=2021-04-04">
          <a className="nav-link">Tracking de Incidencias</a>
        </ActiveLink>
      </li>
      <li>
        <Box>
          <Link href="/">Link</Link>
        </Box>
      </li>
    </ul>
  </nav>
)

export default Nav
