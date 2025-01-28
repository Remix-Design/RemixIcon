import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 21V3H21V21H19ZM7 14C7 13.4477 7.44772 13 8 13H16C16.5523 13 17 13.4477 17 14V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V14ZM4 4C3.44772 4 3 4.44772 3 5V10C3 10.5523 3.44772 11 4 11H16C16.5523 11 17 10.5523 17 10V5C17 4.44772 16.5523 4 16 4H4Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignItemRightFill'

/**
 * Remix Icon: Align Item Right Fill
 * @see {@link https://remixicon.com/icon/align-item-right-fill Remix Icon Docs}
 */
export const AlignItemRightFill = memo(Icon)
