import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 12L14 6V18L8 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftSFill'

/**
 * Remix Icon: Arrow Left S Fill
 * @see {@link https://remixicon.com/icon/arrow-left-s-fill Remix Icon Docs}
 */
export const ArrowLeftSFill = memo(Icon)
