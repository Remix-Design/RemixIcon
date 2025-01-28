import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z" />
    </Svg>
  )
}

Icon.displayName = 'FontSize2'

/**
 * Remix Icon: Font Size 2
 * @see {@link https://remixicon.com/icon/font-size-2 Remix Icon Docs}
 */
export const FontSize2 = memo(Icon)
