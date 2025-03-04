import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 20 20" fill={color} height={size} width={size} {...otherProps}>
      <Rect width="20" height="20" rx="10" stroke="none" strokeWidth="0" />
      <Path
        d="M6 11.2667L8.31111 13.4L14 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'CheckMark'

export const CheckMark = memo(Icon)
