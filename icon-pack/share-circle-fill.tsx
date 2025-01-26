import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 2.04938V4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM18.7071 6.70711L12 13.4142L10.5858 12L17.2929 5.29289L14 2H22V10L18.7071 6.70711Z" />
    </Svg>
  )
}

Icon.displayName = 'ShareCircleFill'

/**
 * Remix Icon: Share Circle Fill
 * @see {@link https://remixicon.com/icon/share-circle-fill Remix Icon Docs}
 */
export const ShareCircleFill = memo(Icon)
