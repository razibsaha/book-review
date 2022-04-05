import React from 'react';
import {Link,useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = (props) => {
  const {name,link} = props.route;
  let resolved = useResolvedPath(link);
  let match = useMatch({ path:resolved.pathname, end: true });
    
  
    return (
      
      <div>

      {/* <li className='mr-20'>
        <a href={link}>{name}</a>
      </li> */}


        <Link style={{ 
            color: match? 'rgb(239 68 68)':'',
            padding: `10px`,
            paddingBottom: match?'2px': '0px',
            marginBottom: match?'6px': '0px',
            borderBottom:  match? "3px solid rgb(239 68 68)":"none",
            fontWeight: match? `bold`: `normal`
          }}

          to={link}>
          {name}
        </Link>
      </div>
    );
  }

export default CustomLink;