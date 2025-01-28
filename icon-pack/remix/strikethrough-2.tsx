import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 9H11V6H5V4H19V6H13V9ZM13 15V20H11V15H13ZM3 11H21V13H3V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Strikethrough2'

/**
 * Remix Icon: Strikethrough 2
 * @see {@link https://remixicon.com/icon/strikethrough-2 Remix Icon Docs}
 */
export const Strikethrough2 = memo(Icon)
