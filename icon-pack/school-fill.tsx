import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 18.9999H22V8.99991H18V6.58569L12 0.585693L6 6.58569V8.99991H2V18.9999H1V20.9999H23V18.9999ZM6 19H4V11H6V19ZM18 11H20V19H18V11ZM11 12H13V19H11V12Z" />
    </Svg>
  )
}

Icon.displayName = 'SchoolFill'

/**
 * Remix Icon: School Fill
 * @see {@link https://remixicon.com/icon/school-fill Remix Icon Docs}
 */
export const SchoolFill = memo(Icon)
