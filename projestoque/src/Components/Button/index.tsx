import React from 'react';
import {Text} from 'react-native';
import * as Style from './styles';
interface Types{
  title?: string;
  color?: string;
  height?:string;
  width?:string;
  onPress?: () => void;
  navigate?: (screen: string) => string;
}

export const BotaoHome: React.FC<Types> = ({
  title,
  color,
  onPress,
  height,
  width,
  navigate,
}) => {
  return (
    <Style.ViewBotao
    width={width}
    >
    <Style.Botao 
      bgColor={color}
      onPress={onPress}
      height={height}
      width={width}
      >
        
        <Style.TxtButton
        // color={color}
        >
          {title}

        </Style.TxtButton>
      </Style.Botao>
        </Style.ViewBotao>
   
  )
}