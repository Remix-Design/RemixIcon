import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2221)">
        <Path
          d="M28.6958 1.98453C26.0664 0.713125 23.1166 0 20.0002 0C16.8838 0 13.9339 0.713125 11.3046 1.98453L9.56543 20L11.3046 38.0155C13.9339 39.2869 16.8838 40 20.0002 40C23.1166 40 26.0664 39.2869 28.6958 38.0155L30.435 20L28.6958 1.98453Z"
          fill="#D80027"
        />
        <Path
          d="M11.3044 1.98529C4.61453 5.22021 0 12.0709 0 20.0001C0 27.9292 4.61453 34.7799 11.3044 38.0148V1.98529Z"
          fill="black"
        />
        <Path
          d="M28.6953 1.98529V38.0148C35.3852 34.7799 39.9997 27.9292 39.9997 20.0001C39.9997 12.0709 35.3852 5.22021 28.6953 1.98529Z"
          fill="#496E2D"
        />
        <Path
          d="M19.9995 13.0436C16.1574 13.0436 13.043 16.1581 13.043 20.0001C13.043 23.842 16.1575 26.9565 19.9995 26.9565C23.8414 26.9565 26.9559 23.842 26.9559 20.0001C26.9559 16.1581 23.8415 13.0436 19.9995 13.0436ZM19.9995 24.3479C17.5982 24.3479 15.6516 22.4012 15.6516 20.0001C15.6516 17.5989 17.5983 15.6523 19.9995 15.6523C22.4006 15.6523 24.3473 17.5989 24.3473 20.0001C24.3473 22.4012 22.4007 24.3479 19.9995 24.3479Z"
          fill="#FFDA44"
        />
        <Path
          d="M19.9999 17.3915C19.0393 17.3915 18.2607 18.1701 18.2607 19.1306V21.7393H21.739V19.1306C21.739 18.1701 20.9604 17.3915 19.9999 17.3915V17.3915Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2221">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Afghanistan'

/**
 * Flags by `Deji.Zeal`: Afghanistan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Afghanistan = memo(Icon)
