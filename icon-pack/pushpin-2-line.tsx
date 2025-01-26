import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18ZM9 5V11.6056L7.4037 14H16.5963L15 11.6056V5H9Z" />
    </Svg>
  )
}

Icon.displayName = 'Pushpin2Line'

/**
 * Remix Icon: Pushpin 2 Line
 * @see {@link https://remixicon.com/icon/pushpin-2-line Remix Icon Docs}
 */
export const Pushpin2Line = memo(Icon)
