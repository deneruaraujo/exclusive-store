"use client";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


export function NavigationBar() {
  return (
    <NavigationMenu.Root className="text-xs w-32 lg:w-64 lg:text-base">
      <NavigationMenu.List className=' flex flex-col gap-4 border-r-[1px] border-opacity-30 border-black'>
        <NavigationMenu.Item className='flex justify-between mt-5 lg:mt-10'>
          <Popover.Root>
            <Popover.Trigger className='w-full flex justify-between items-center'>
              <span>Woman's Fashion</span>
              <MdOutlineKeyboardArrowRight size={30} className='lg:mr-4' />
            </Popover.Trigger>
            <Popover.Portal>
              {/* Popover animation: https://www.radix-ui.com/docs/primitives/components/popover */}
              <Popover.Content side='right' sideOffset={10} className='flex flex-col fixed w-52 h-52 lg:w-80 lg:h-80 gap-3 py-4 pr-4 pl-6 mt-[-1.5rem] overflow-auto text-sm bg-exclusive-background rounded-md shadow-[0_5px_8px_1px_hsla(206,22%,7%,.35)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'>
                <span className='text-base font-medium'>Woman's Fashion</span>
                <div className='grid grid-cols-2 gap-y-3'>
                  <NavigationMenu.Link href='#'>
                    Bags
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Tees & Tops
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Blouses & Shirts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Sweatshirts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Knitwear
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Cardigans
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Outerwear
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Dresses
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Blazer & Suits
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Bottoms
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Sweatpants
                  </NavigationMenu.Link>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='flex justify-between'>
          <Popover.Root>
            <Popover.Trigger className='w-full flex justify-between items-center'>
              <span>Men's Fashion</span>
              <MdOutlineKeyboardArrowRight size={30} className='lg:mr-4' />
            </Popover.Trigger>
            <Popover.Portal>
              {/* Popover animation: https://www.radix-ui.com/docs/primitives/components/popover */}
              <Popover.Content side='right' sideOffset={10} className='flex flex-col fixed w-52 h-52 lg:w-80 lg:h-80 gap-3 py-4 pr-4 pl-6 mt-[-4.4rem] overflow-auto text-sm bg-exclusive-background rounded-md shadow-[0_5px_8px_1px_hsla(206,22%,7%,.35)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'>
                <span className='text-base font-medium '>Men's Fashion</span>
                <div className='grid grid-cols-2 gap-y-3'>
                  <NavigationMenu.Link href='#'>
                    Jacket
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Tees & Tanks
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Shirts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Polo Shirts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Bottoms
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Jeans
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Shorts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Denim
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Outerwear
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Sweatshirts
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href='#'>
                    Cardigans & Jumpers
                  </NavigationMenu.Link>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Electronics
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Home & Lifestyle
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Medicine
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Baby’s & Toys
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Groceries & Pets
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href='#'>
            Health & Beauty
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}