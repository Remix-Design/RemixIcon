import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.41421 5H10V3H3V10H5V6.41421L9.29289 10.7071L10.7071 9.29289L6.41421 5ZM21 14H19V17.5858L14.7071 13.2929L13.2929 14.7071L17.5858 19H14V21H21V14Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandDiagonal2Line'

/**
 * Remix Icon: Expand Diagonal 2 Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-2-line Remix Icon Docs}
 */
export const ExpandDiagonal2Line = memo(Icon)
