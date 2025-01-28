import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 12L10 18V6L16 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightSFill'

/**
 * Remix Icon: Arrow Right S Fill
 * @see {@link https://remixicon.com/icon/arrow-right-s-fill Remix Icon Docs}
 */
export const ArrowRightSFill = memo(Icon)
