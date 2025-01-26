import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.1488 15.3042L12 20.5996L15.8513 15.3042L12 17.6742L8.1488 15.3042ZM17.1374 12.1643L12 3.81608L6.86261 12.1643L12 15.3258L17.1374 12.1643ZM4 13L12 0L20 13L12.0001 24L4 13Z" />
    </Svg>
  )
}

Icon.displayName = 'EthLine'

/**
 * Remix Icon: Eth Line
 * @see {@link https://remixicon.com/icon/eth-line Remix Icon Docs}
 */
export const EthLine = memo(Icon)
