'use client'
import { useState } from 'react'

type MenuItems = 'hero' | 'projects' | 'contact'

interface ISections {
  name: Capitalize<MenuItems>
  id: number
}

const sections: ISections[] = [
  { name: 'Projects', id: 1 },
  { name: 'Contact', id: 2 },
]

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItems>('hero')

  const toggleSelectedMenu = (menuItem: MenuItems) => setSelectedMenu(menuItem)

  return (
    <header className="z-40 sticky top-0 bg-black-pallete bg-opacity-60 backdrop-blur flex flex-col h-24 px-8">
      <div className="h-full flex items-center">
        <h1 className="text-3xl font-medium flex-1">
          Cass.sh | <small>I Write Some Code</small>
        </h1>
        <div className="flex text-xl items-center gap-8">
          <button className="bg-red-pallete text-black-pallete rounded-lg p-2 w-40 mr-8 text-xl hover:bg-black-pallete hover:text-red-pallete hover:border hover:border-red-pallete transition-all ease-in">
            Hire me!
          </button>
          {sections.map((item) => (
            <a
              key={item.id}
              onClick={() =>
                toggleSelectedMenu(item.name.toLowerCase() as MenuItems)
              }
              href={`#${item.name.toLowerCase() as MenuItems}`}
              className={
                selectedMenu === `${item.name.toLowerCase() as MenuItems}`
                  ? 'border-b border-b-red-pallete -mb-[1px]'
                  : ''
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
