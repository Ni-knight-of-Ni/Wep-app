//dette bliver ikke brugt i nu..
//er også anvænde som template til nogle andre dele af siden senere, så vi kan udbygge kompuneter til mere avanceret.

import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'

//angiver basis styles til knapperne
const STYLES = ['btn--primary' , 'btn--outline' , 'btn--test'];

const SIZES = ['btn--medium' , 'btn--large'];


//lave extra i "const button" for link $ til at kunne kontorlelere knapper hvis der er behov



export const button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.inclodes(buttonStyles)
      ? buttonStyle
      : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link>
      <button
      className={'btn $(checkButtonStyle) ${checkButtonSize}'}
      onClick={onClick}
      type={type}
      >
      {children}
      </button>
    </Link>
  )
}
