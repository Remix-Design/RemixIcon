import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 14L8 10H16L12 14Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropDownFill'

/**
 * Remix Icon: Arrow Drop Down Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-down-fill Remix Icon Docs}
 */
export const ArrowDropDownFill = memo(Icon)
