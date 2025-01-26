import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7783 5.63577L18.3643 4.22156L8.75734 13.8284L4.92896 10L4.92896 19.0711L14 19.0711L10.1716 15.2426L19.7783 5.63577Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftDownLongFill'

/**
 * Remix Icon: Arrow Left Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-down-long-fill Remix Icon Docs}
 */
export const ArrowLeftDownLongFill = memo(Icon)
