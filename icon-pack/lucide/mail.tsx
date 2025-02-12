import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M14.6667 4.66666L8.68666 8.46666C8.48084 8.59561 8.24287 8.664 7.99999 8.664C7.75712 8.664 7.51915 8.59561 7.31333 8.46666L1.33333 4.66666M2.66666 2.66666H13.3333C14.0697 2.66666 14.6667 3.26361 14.6667 3.99999V12C14.6667 12.7364 14.0697 13.3333 13.3333 13.3333H2.66666C1.93028 13.3333 1.33333 12.7364 1.33333 12V3.99999C1.33333 3.26361 1.93028 2.66666 2.66666 2.66666Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'Mail'

/**
 * Lucide Icon: Mail
 * @see {@link https://lucide.dev/icons/mail Lucide Icon Docs}
 */
export const Mail = memo(Icon)
