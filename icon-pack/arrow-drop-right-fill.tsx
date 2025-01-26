import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 12L10 16V8L14 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropRightFill'

/**
 * Remix Icon: Arrow Drop Right Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-right-fill Remix Icon Docs}
 */
export const ArrowDropRightFill = memo(Icon)
