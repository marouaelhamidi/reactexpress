import React from 'react';
import {Router,Route,Link} from 'react';

class Header extends React.Component {
    render() {
      return (
        <div className="sidebar">
        <a activeClassName="active" href="/">Home</a>
        <a  activeClassName="active" href="users">utilisateurs</a>
        <a activeClassName="active" href="etudiants">Etudiants</a>
        <a activeClassName="active" href="professeurs">Professeurs</a>
        <a activeClassName="active" href="modules">Modules</a>
             </div>
      );
    }
  }
  export default Header;
   