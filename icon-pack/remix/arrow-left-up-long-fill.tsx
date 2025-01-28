import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.3642 19.7783L19.7784 18.3643L10.1716 8.75734L14 4.92896L4.92889 4.92896L4.9289 14L8.75735 10.1716L18.3642 19.7783Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpLongFill'

/**
 * Remix Icon: Arrow Left Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-long-fill Remix Icon Docs}
 */
export const ArrowLeftUpLongFill = memo(Icon)
