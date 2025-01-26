import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 12C10.1046 12 11 11.1046 11 10 11 8.89543 10.1046 8 9 8 7.89543 8 7 8.89543 7 10 7 11.1046 7.89543 12 9 12ZM21.5 6.5 12 1 2.5 6.5V17.5L12 23 21.5 17.5V6.5ZM12 3.311 19.5 7.65311V14.5338L14.9379 11.7966 6.96669 17.775 4.5 16.3469V7.65311L12 3.311ZM12 20.689 8.84788 18.8641 15.0621 14.2034 19.0595 16.6019 12 20.689Z" />
    </Svg>
  )
}

Icon.displayName = 'NftLine'

/**
 * Remix Icon: Nft Line
 * @see {@link https://remixicon.com/icon/nft-line Remix Icon Docs}
 */
export const NftLine = memo(Icon)
