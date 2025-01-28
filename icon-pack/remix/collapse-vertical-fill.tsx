import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9995 13.4995 16.9492 18.4493 12.9995 18.4483 12.9995 22.9995H10.9995L10.9995 18.4478 7.05222 18.4468 11.9995 13.4995ZM10.9995.999512 10.9995 5.54964 7.05026 5.54956 12 10.4995 16.9497 5.54977 12.9995 5.54968V.999512L10.9995.999512Z" />
    </Svg>
  )
}

Icon.displayName = 'CollapseVerticalFill'

/**
 * Remix Icon: Collapse Vertical Fill
 * @see {@link https://remixicon.com/icon/collapse-vertical-fill Remix Icon Docs}
 */
export const CollapseVerticalFill = memo(Icon)
