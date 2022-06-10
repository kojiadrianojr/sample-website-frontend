import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import { SvgProps } from "../../components/svgIcon/types";
import { CardContainer } from './styled';
import AndyAgnasImg from "./icons/AndyAgnas";
import HatuSheikhImg from "./icons/HatuSheikh";
import RicoZuñigaImg from "./icons/RicoZuniga";
import MorrisPericoImg from "./icons/MorrisPerico";
import AnneRamosImg from "./icons/AnneRamos";
import DianaApongolImg from "./icons/DianaApongol";
import KaranSharmaImg from "./icons/KaranSharma";
import LyrafeAriolaImg from "./icons/LyrafeAriola";
import DianaGeeDelasAlasImg from "./icons/DianaGeeDelasAlas";
import RalphBalantaImg from "./icons/RalphBalanta";
import AldrickBonaobraImg from "./icons/AldrickBonaobra";
import MedardMandaneImg from "./icons/MedardMandane";
import HarvinCadagImg from "./icons/HarvinCadag";
import JohnCarloAriolaImg from "./icons/JohnCarloAriola";
// import IconModule from './icons'

interface Props {
  name?: string;
  title?: string;
}

const IconModule = {
  AndyAgnasImg,
  HatuSheikhImg,
  RicoZuñigaImg,
  MorrisPericoImg,
  AnneRamosImg,
  DianaApongolImg,
  KaranSharmaImg,
  LyrafeAriolaImg,
  DianaGeeDelasAlasImg,
  RalphBalantaImg,
  AldrickBonaobraImg,
  MedardMandaneImg,
  HarvinCadagImg,
  JohnCarloAriolaImg,
};

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const Team:React.FC<Props> = ({name, title}) => {
  const src = `${name.replace(/\s+/g, '')}Img`
  const Icon = Icons[src]
  const iconElement: React.ReactElement = <Icon mr="8px" width={300}/>;
  return (
    <CardContainer>
      {iconElement}
      <Text color="primary" fontSize="2em">{name}</Text>
      <Text fontSize='1em'>{title}</Text>
    </CardContainer>
  )
}

export default Team;