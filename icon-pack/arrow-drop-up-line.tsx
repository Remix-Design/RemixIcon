import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropUpLine'

/**
 * Remix Icon: Arrow Drop Up Line
 * @see {@link https://remixicon.com/icon/arrow-drop-up-line Remix Icon Docs}
 */
export const ArrowDropUpLine = memo(Icon)
