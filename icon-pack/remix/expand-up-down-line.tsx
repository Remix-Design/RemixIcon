import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandUpDownLine'

/**
 * Remix Icon: Expand Up Down Line
 * @see {@link https://remixicon.com/icon/expand-up-down-line Remix Icon Docs}
 */
export const ExpandUpDownLine = memo(Icon)
