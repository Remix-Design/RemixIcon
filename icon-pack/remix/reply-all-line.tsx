import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 4.5V9C19.5228 9 24 13.4772 24 19C24 19.2727 23.9891 19.5428 23.9677 19.81C22.5055 17.0364 19.6381 15.119 16.313 15.0053L16 15H13.9999L14 19.5L6 12L14 4.5ZM8 4.5V7.237L2.92 12L7.999 16.761L8 19.5L0 12L8 4.5ZM12 9.11646L8.92423 12L11.9999 14.8834L11.9999 13L16.0341 13.0003L16.3814 13.0065C17.6657 13.0504 18.9053 13.3165 20.0568 13.7734C18.5898 12.0749 16.4204 11 14 11H12V9.11646Z" />
    </Svg>
  )
}

Icon.displayName = 'ReplyAllLine'

/**
 * Remix Icon: Reply All Line
 * @see {@link https://remixicon.com/icon/reply-all-line Remix Icon Docs}
 */
export const ReplyAllLine = memo(Icon)
