/**
*
* Icon
*
*/

import React from 'react';

import './styles.css';

const renderIcon = (name) => {
  switch (name) {
    case 'fb':
      return (
        <g>
          <path d='M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001'></path>
        </g>
      );
    default:
      return (
        <g>
          <path d=''></path>
        </g>
      );
  }
}

const Icon = (props) => {
  const { size, name, className } = props;

  return (
    <svg className={className} width={size || '256'} height={size || '256'} viewBox='0 0 256 256'>
      {renderIcon(name)}
    </svg>
  );
}

export default Icon;
