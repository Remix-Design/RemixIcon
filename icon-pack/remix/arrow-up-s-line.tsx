import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpSLine'

/**
 * Remix Icon: Arrow Up S Line
 * @see {@link https://remixicon.com/icon/arrow-up-s-line Remix Icon Docs}
 */
export const ArrowUpSLine = memo(Icon)
