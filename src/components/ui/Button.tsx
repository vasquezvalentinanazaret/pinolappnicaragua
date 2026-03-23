import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { colors } from '@/theme/colors'
import { cn } from '@/utils/cn' // puedes crear este helper o usar clsx

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'outline' | 'danger'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  const base = 'py-3 px-6 rounded-lg items-center'
  const variants = {
    primary: `bg-[${colors.primary}]`,
    outline: `border border-[${colors.primary}]`,
    danger: `bg-[${colors.danger}]`,
  }

  return (
    <TouchableOpacity
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <Text className={variant === 'outline' ? `text-[${colors.primary}] font-bold` : 'text-white font-bold'}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
