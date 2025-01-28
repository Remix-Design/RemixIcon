import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 4H19V6H10V12H18V14H10V21H7V4Z" />
    </Svg>
  )
}

Icon.displayName = 'FontSans'

/**
 * Remix Icon: Font Sans
 * @see {@link https://remixicon.com/icon/font-sans Remix Icon Docs}
 */
export const FontSans = memo(Icon)
