import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 16V20H8V22H2V16H4ZM22 16V22H16V20H20V16H22ZM7.5 7C7.5 9.48528 9.51472 11.5 12 11.5C14.4853 11.5 16.5 9.48528 16.5 7H18.5C18.5 9.50729 17.0804 11.683 15.0011 12.7672L15 19H9L8.99992 12.7677C6.92007 11.6837 5.5 9.50769 5.5 7H7.5ZM12 5C13.3807 5 14.5 6.11929 14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5ZM8 2V4L4 3.999V8H2V2H8ZM22 2V8H20V4H16V2H22Z" />
    </Svg>
  )
}

Icon.displayName = 'BodyScanFill'

/**
 * Remix Icon: Body Scan Fill
 * @see {@link https://remixicon.com/icon/body-scan-fill Remix Icon Docs}
 */
export const BodyScanFill = memo(Icon)
