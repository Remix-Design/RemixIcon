import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.9999 4.99989L5.00003 4.99976L5 6.99976L11.9999 6.99986L12 14.5859H6.58581L13 21.0001L19.4142 14.5859L14 14.5859L13.9999 4.99989Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerRightDownFill'

/**
 * Remix Icon: Corner Right Down Fill
 * @see {@link https://remixicon.com/icon/corner-right-down-fill Remix Icon Docs}
 */
export const CornerRightDownFill = memo(Icon)
