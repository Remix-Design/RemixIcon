import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_981)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M10.8101 27.8262L5.8584 34.1416C9.47746 37.7611 14.4769 40.0001 19.9999 40.0001C28.2678 40.0001 35.3627 34.9822 38.4086 27.8262H10.8101Z"
          fill={color}
        />
        <Path
          d="M38.4397 12.2463C35.4108 5.05172 28.2958 0 19.9999 0C14.4769 0 9.47746 2.23898 5.8584 5.85852L10.867 12.2463H38.4397Z"
          fill={color}
        />
        <Path
          d="M4.34766 14.71V25.2172H39.3109C39.7595 23.5538 39.9998 21.805 39.9998 19.9998C39.9998 18.1684 39.7531 16.395 39.2919 14.71H4.34766Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85791C-1.95262 13.6684 -1.95262 26.3317 5.85785 34.1423C9.08543 30.9147 12.1896 27.8106 20 20.0001L5.85785 5.85791Z"
          fill={color}
        />
        <Path
          d="M8.09426 14.7827L9.38918 18.7683H13.5803L10.1898 21.2318L11.4846 25.2176L8.09426 22.7542L4.70371 25.2176L5.99887 21.2318L2.6084 18.7683H6.79918L8.09426 14.7827Z"
          fill={color}
        />
        <Path d="M4.30566 20H11.8857V23.4783H4.30566V20Z" fill={color} />
        <Path
          d="M13.3205 16.0126L12.0908 14.7827L8.09484 18.7787L4.09891 14.7827L2.86914 16.0126L6.86859 20.0049L2.86914 24.0044L4.09891 25.2176L8.09484 21.2288L12.0908 25.2176L13.3205 24.0044L9.32109 20.0049L13.3205 16.0126Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_981">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Mozambique'

/**
 * Flags by Deji.Zeal: Mozambique
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mozambique = memo(Icon)
