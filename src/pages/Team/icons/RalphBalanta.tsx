import React from 'react'
import PNG from 'assets/teams/5 T&D Ralph.png'
import { SvgProps } from '../../../components/svgIcon/types'
import SvgIcon from '../../../components/svgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon Img={PNG} width={props.width} />
}

export default Icon