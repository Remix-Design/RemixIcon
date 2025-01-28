import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 11V13L5.67257 19H11V21H3V19L8.32557 13H3V11H11ZM21 3V5L15.6726 11H21V13H13V11L18.3256 5H13V3H21Z" />
    </Svg>
  )
}

Icon.displayName = 'ZzzLine'

/**
 * Remix Icon: Zzz Line
 * @see {@link https://remixicon.com/icon/zzz-line Remix Icon Docs}
 */
export const ZzzLine = memo(Icon)
