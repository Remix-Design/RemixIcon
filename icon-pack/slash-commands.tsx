import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H5V7H3V3ZM9.78839 21H7.66003L14.2115 3H16.3398L9.78839 21ZM21 3H19V7H21V3Z" />
    </Svg>
  )
}

Icon.displayName = 'SlashCommands'

/**
 * Remix Icon: Slash Commands
 * @see {@link https://remixicon.com/icon/slash-commands Remix Icon Docs}
 */
export const SlashCommands = memo(Icon)
