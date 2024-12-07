import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Tabs, Tab } from '@nextui-org/react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function Appbar() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 30],
    ['#00000000', '#00000000']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 10, 20, 30],
    ['none', 'blur(2px)', 'blur(8px)', 'blur(16px)']
  );

  let tabs = [
    { id: 'about', label: 'Nosotros' },
    { id: 'prising', label: 'Membresia' },
    { id: 'training', label: 'Entrenamiento' },
    { id: 'stories', label: 'Historias' }
  ];

  return (
    <Navbar
      className="pt-[10px]"
      maxWidth="full"
      shouldHideOnScroll={true}
      motionProps={{ style: { backgroundColor, backdropFilter } }}
    >
      <NavbarBrand>
        <NavbarItem className="hidden 2xl:flex">
          <div className="rounded-lg bg-gray-300/30 h-[40px] w-[480px]">
            <div className="absolute">
              <div className="flex items-center h-[40px] w-[480px] px-6 py-2 justify-between cursor-pointer">
                {tabs.map((tab) => (
                  <div key={tab.id} className="text-white text-[0.875rem]">{ tab.label }</div>
                ))}
              </div>
            </div>
          </div>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="w-full 2xl:w-auto" justify="center">
        <NavbarItem className="items-center">
          <div className="flex gap-2 h-[55px] items-center">
            <img src="./images/logo.jpg" alt="" className="w-[45px] h-[45px] rounded-full" />
            <div className="text-white font-bold text-[30px]">Brufit</div>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden 2xl:flex" justify="end">
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
