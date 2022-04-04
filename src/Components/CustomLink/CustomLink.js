import React from 'react';
import {Link,useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
  
    return (
      
      <div>
        <Link style={{ 
            color: match? 'rgb(239 68 68)':'#95a5a6',
            padding:`10px`,
            borderBottom:  match? "2px solid rgb(239 68 68)":"none",
            fontWeight: match? `bold`: `normal`
          }}

          to={to}
          {...props}>
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;