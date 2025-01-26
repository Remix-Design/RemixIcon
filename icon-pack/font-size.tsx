import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.246 15H4.75416L2.75416 20H0.600098L7.0001 4H9.0001L15.4001 20H13.246L11.246 15ZM10.446 13L8.0001 6.88516L5.55416 13H10.446ZM21.0001 12.5351V12H23.0001V20H21.0001V19.4649C20.4118 19.8052 19.7287 20 19.0001 20C16.791 20 15.0001 18.2091 15.0001 16C15.0001 13.7909 16.791 12 19.0001 12C19.7287 12 20.4118 12.1948 21.0001 12.5351ZM19.0001 18C20.1047 18 21.0001 17.1046 21.0001 16C21.0001 14.8954 20.1047 14 19.0001 14C17.8955 14 17.0001 14.8954 17.0001 16C17.0001 17.1046 17.8955 18 19.0001 18Z" />
    </Svg>
  )
}

Icon.displayName = 'FontSize'

/**
 * Remix Icon: Font Size
 * @see {@link https://remixicon.com/icon/font-size Remix Icon Docs}
 */
export const FontSize = memo(Icon)
