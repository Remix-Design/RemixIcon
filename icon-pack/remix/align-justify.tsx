import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignJustify'

/**
 * Remix Icon: Align Justify
 * @see {@link https://remixicon.com/icon/align-justify Remix Icon Docs}
 */
export const AlignJustify = memo(Icon)
