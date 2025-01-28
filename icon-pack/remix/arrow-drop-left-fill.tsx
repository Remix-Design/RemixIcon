import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 12L13 8V16L9 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropLeftFill'

/**
 * Remix Icon: Arrow Drop Left Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-left-fill Remix Icon Docs}
 */
export const ArrowDropLeftFill = memo(Icon)
