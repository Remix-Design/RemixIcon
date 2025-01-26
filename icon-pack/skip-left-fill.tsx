import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipLeftFill'

/**
 * Remix Icon: Skip Left Fill
 * @see {@link https://remixicon.com/icon/skip-left-fill Remix Icon Docs}
 */
export const SkipLeftFill = memo(Icon)
