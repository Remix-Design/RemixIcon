import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.04304 5.79285 2.83594 12 9.04304 18.2071 10.4573 16.7928 5.66436 12 10.4573 7.20706 9.04304 5.79285ZM14.957 18.2072 21.1641 12.0001 14.957 5.793 13.5427 7.20721 18.3356 12.0001 13.5427 16.793 14.957 18.2072Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandLeftRightLine'

/**
 * Remix Icon: Expand Left Right Line
 * @see {@link https://remixicon.com/icon/expand-left-right-line Remix Icon Docs}
 */
export const ExpandLeftRightLine = memo(Icon)
