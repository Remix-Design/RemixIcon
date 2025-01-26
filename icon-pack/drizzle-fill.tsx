import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 18V21H9V18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H11ZM13 20H15V23H13V20Z" />
    </Svg>
  )
}

Icon.displayName = 'DrizzleFill'

/**
 * Remix Icon: Drizzle Fill
 * @see {@link https://remixicon.com/icon/drizzle-fill Remix Icon Docs}
 */
export const DrizzleFill = memo(Icon)
