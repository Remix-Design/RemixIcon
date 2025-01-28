import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H6.6V6.6L10.2001 6.6001V10.2001L13.8 10.2002L13.8 6.6001H17.3999V3H20.9999V20.9999H17.3999V13.8002L13.8 13.7998V17.3998H10.2V13.8002L6.6 13.7998V20.9999H3V3Z" />
    </Svg>
  )
}

Icon.displayName = 'MixtralFill'

/**
 * Remix Icon: Mixtral Fill
 * @see {@link https://remixicon.com/icon/mixtral-fill Remix Icon Docs}
 */
export const MixtralFill = memo(Icon)
