import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM11.9996 6.34326L17.9493 12.293H12.9996V17.657H10.9996V12.293H6.0498L11.9996 6.34326Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpBoxFill'

/**
 * Remix Icon: Arrow Up Box Fill
 * @see {@link https://remixicon.com/icon/arrow-up-box-fill Remix Icon Docs}
 */
export const ArrowUpBoxFill = memo(Icon)
