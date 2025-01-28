import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM6.3436 12.001L12.0005 6.34412L13.4147 7.75834L10.172 11.001H17.6573V13.001H10.172L13.4147 16.2436L12.0005 17.6578L6.3436 12.001Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftBoxLine'

/**
 * Remix Icon: Arrow Left Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-box-line Remix Icon Docs}
 */
export const ArrowLeftBoxLine = memo(Icon)
