import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5859 18L21.1925 22.6066L22.6068 21.1924L2.80777 1.39343L1.39355 2.80765L3.00008 4.41417V22H5.00008V16H12.0001L12.7237 17.4472C12.8931 17.786 13.2393 18 13.6181 18H16.5859ZM21.0001 5.99995V16.7576L7.24241 2.99995H12.382C12.7608 2.99995 13.1071 3.21396 13.2765 3.55274L14.0001 4.99995H20.0001C20.5524 4.99995 21.0001 5.44767 21.0001 5.99995Z" />
    </Svg>
  )
}

Icon.displayName = 'FlagOffFill'

/**
 * Remix Icon: Flag Off Fill
 * @see {@link https://remixicon.com/icon/flag-off-fill Remix Icon Docs}
 */
export const FlagOffFill = memo(Icon)
