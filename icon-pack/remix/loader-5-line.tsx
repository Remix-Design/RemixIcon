import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z" />
    </Svg>
  )
}

Icon.displayName = 'Loader5Line'

/**
 * Remix Icon: Loader 5 Line
 * @see {@link https://remixicon.com/icon/loader-5-line Remix Icon Docs}
 */
export const Loader5Line = memo(Icon)
