import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 10L16 14H8L12 10Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropUpFill'

/**
 * Remix Icon: Arrow Drop Up Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-up-fill Remix Icon Docs}
 */
export const ArrowDropUpFill = memo(Icon)
