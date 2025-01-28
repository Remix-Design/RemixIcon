import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightSLine'

/**
 * Remix Icon: Arrow Right S Line
 * @see {@link https://remixicon.com/icon/arrow-right-s-line Remix Icon Docs}
 */
export const ArrowRightSLine = memo(Icon)
