'use client'

import { useEffect, useState } from 'react'

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header" id="top">
      <div className="header-inner section-shell">
        <a className="brand" href="#top" aria-label="Ravi Kumar, home">
          Ravi<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Let&apos;s work together</a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? 'menu-icon is-open' : 'menu-icon'} aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <nav
        className={open ? 'mobile-nav is-open' : 'mobile-nav'}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {navigation.map((item, index) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
        <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>Start a project</a>
      </nav>
    </header>
  )
}
