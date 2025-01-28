import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2051)">
        <Path
          d="M40 20C40 13.1358 36.5415 7.08013 31.2724 3.47825L20 2.60864L8.72758 3.47817C3.45859 7.08013 0 13.1359 0 20C0 26.8643 3.45859 32.9198 8.72758 36.5217L20 37.3913L31.2724 36.5218C36.5415 32.9198 40 26.8643 40 20Z"
          fill="#0052B4"
        />
        <Path
          d="M31.2724 3.47816C28.0626 1.28394 24.1815 -0.00012207 20 -0.00012207C15.8185 -0.00012207 11.9373 1.28394 8.72754 3.47816H31.2724Z"
          fill="#A2001D"
        />
        <Path
          d="M8.72754 36.5216C11.9372 38.7158 15.8185 39.9999 20 39.9999C24.1815 39.9999 28.0626 38.7158 31.2724 36.5216H8.72754Z"
          fill="#A2001D"
        />
        <Path
          d="M19.9998 29.5652C25.2825 29.5652 29.565 25.2827 29.565 19.9999C29.565 14.7172 25.2825 10.4347 19.9998 10.4347C14.7171 10.4347 10.4346 14.7172 10.4346 19.9999C10.4346 25.2827 14.7171 29.5652 19.9998 29.5652Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9999 27.8261C24.3222 27.8261 27.826 24.3223 27.826 20C27.826 15.6778 24.3222 12.174 19.9999 12.174C15.6777 12.174 12.1738 15.6778 12.1738 20C12.1738 24.3223 15.6777 27.8261 19.9999 27.8261Z"
          fill="#6DA544"
        />
        <Path
          d="M19.9997 25.2174C22.8812 25.2174 25.2171 22.8815 25.2171 20C25.2171 17.1185 22.8812 14.7826 19.9997 14.7826C17.1181 14.7826 14.7822 17.1185 14.7822 20C14.7822 22.8815 17.1181 25.2174 19.9997 25.2174Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9999 18.6956L17.1738 19.9999V22.1738L19.9999 23.913L22.826 22.1738V19.9999L19.9999 18.6956Z"
          fill="#0052B4"
        />
        <Path d="M17.1738 17.3912H22.826V19.9999H17.1738V17.3912Z" fill="#FFDA44" />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2051">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Belize'

/**
 * Flags by `Deji.Zeal`: Belize
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Belize = memo(Icon)
