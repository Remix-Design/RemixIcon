import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z" />
    </Svg>
  )
}

Icon.displayName = 'PantoneFill'

/**
 * Remix Icon: Pantone Fill
 * @see {@link https://remixicon.com/icon/pantone-fill Remix Icon Docs}
 */
export const PantoneFill = memo(Icon)
