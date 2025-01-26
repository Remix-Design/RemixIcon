import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 3C19.5376 3 22 5.5 22 9C22 10.4251 21.6891 11.7259 21.1729 12.9066C20.2524 12.332 19.165 12 18 12C14.6863 12 12 14.6863 12 18C12 19.1005 12.2963 20.1318 12.8134 21.0185C12.506 21.2007 12.2316 21.3611 12 21.5C9.50001 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM19 17V14H17V17H14V19H16.999L17 22H19L18.999 19H22V17H19Z" />
    </Svg>
  )
}

Icon.displayName = 'HeartAdd2Fill'

/**
 * Remix Icon: Heart Add 2 Fill
 * @see {@link https://remixicon.com/icon/heart-add-2-fill Remix Icon Docs}
 */
export const HeartAdd2Fill = memo(Icon)
