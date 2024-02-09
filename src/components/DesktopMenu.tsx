import { NavigationBlockRecord } from '@/types/generated'
import React from 'react'
import { SmartButton } from './SmartButton'
import { LanguageSwitcher } from './LanguageSwitcher'

export const DesktopMenu = (props: NavigationBlockRecord) => {
  const {
    menu: { items },
    ctaButton,
    languageToggleLabel,
  } = props

  return (
    <div className="hidden flex-nowrap items-center justify-between gap-x-6 md:flex">
      <ul>
        {items.map((button) => {
          console.log('button', button)
          return (
            <SmartButton
              key={button.id}
              {...button}
              className="text-foreground"
            />
          )
        })}
      </ul>
      <LanguageSwitcher
        languageToggleLabel={languageToggleLabel || 'Language toggler'}
      />
      <SmartButton {...ctaButton[0]} />
    </div>
  )
}
