import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownSLine'

/**
 * Remix Icon: Arrow Down S Line
 * @see {@link https://remixicon.com/icon/arrow-down-s-line Remix Icon Docs}
 */
export const ArrowDownSLine = memo(Icon)
