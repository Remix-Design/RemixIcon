import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpFill'

/**
 * Remix Icon: Arrow Right Up Fill
 * @see {@link https://remixicon.com/icon/arrow-right-up-fill Remix Icon Docs}
 */
export const ArrowRightUpFill = memo(Icon)
