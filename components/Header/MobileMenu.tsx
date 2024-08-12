"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { EpClose, SolarHamburgerMenuOutline } from "@/constants/svgIcons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileMenu({
  navigation,
  callToAction,
  mobileIsOpen,
  setMobileIsOpen,
}: {
  navigation: any;
  callToAction: any;
  mobileIsOpen: boolean;
  setMobileIsOpen: any;
}) {
  const handleMobileMenu = () => {
    setMobileIsOpen(!mobileIsOpen);
  };

  function closeModal() {
    setMobileIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={handleMobileMenu}
        className="relative flex size-6 items-center justify-center"
      >
        <SolarHamburgerMenuOutline className="size-6 text-white" />
      </button>

      {/*<button*/}
      {/*  type="button"*/}
      {/*  className={twMerge(*/}
      {/*    "relative size-9",*/}
      {/*    "[&_svg]:absolute [&_svg]:left-1/2 [&_svg]:top-1/2 [&_svg]:size-9 [&_svg]:translate-x-[-50%] [&_svg]:translate-y-[-50%] [&_svg]:text-primary",*/}
      {/*    mobileIsOpen ? "z-40 [&_svg]:text-secondary" : "[&_svg]:text-white",*/}
      {/*  )}*/}
      {/*  onClick={handleMobileMenu}*/}
      {/*>*/}
      {/*  <SolarHamburgerMenuOutline*/}
      {/*    className={mobileIsOpen ? "hidden opacity-0" : "block opacity-100"}*/}
      {/*  />*/}
      {/*  <EpClose*/}
      {/*    className={mobileIsOpen ? "block opacity-100" : "hidden opacity-0"}*/}
      {/*  />*/}
      {/*</button>*/}

      <Dialog
        open={mobileIsOpen}
        onClose={setMobileIsOpen}
        className="relative z-[9999]"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-primary py-7">
                  <div className="flex items-center justify-between px-5 sm:justify-end sm:px-6">
                    <Link
                      href="/"
                      className="inline-block sm:hidden"
                      onClick={() => setMobileIsOpen(false)}
                    >
                      <Image
                        src="/images/paris-logo.svg"
                        alt="Logo"
                        width={250}
                        height={17}
                      />
                    </Link>

                    <button
                      type="button"
                      className="relative flex size-6 items-center justify-center"
                      onClick={handleMobileMenu}
                    >
                      <EpClose className="size-6 text-secondary" />
                    </button>
                  </div>

                  <div className="flex grow flex-col justify-center px-5">
                    <nav>
                      <ul className="flex flex-col">
                        {navigation.map(
                          ({
                            label,
                            url,
                            newTab,
                          }: {
                            label: string;
                            url: string;
                            newTab?: boolean;
                          }) => (
                            <li key={label}>
                              <Link
                                href={url}
                                target={newTab ? "_blank" : "_self"}
                                rel={newTab ? "noopener noreferrer" : undefined}
                                className="py-5 font-pbBold text-xl text-white"
                              >
                                {label}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </nav>

                    <ul className="my-5 flex flex-col">
                      {callToAction.map(({ label, url, newTab, variant }) => (
                        <li key={label}>
                          <Button
                            asChild
                            variant="outline-light"
                            size="sm"
                            className="text-xl"
                          >
                            <Link
                              href={url}
                              target={newTab ? "_blank" : "_self"}
                              rel={newTab ? "noopener noreferrer" : undefined}
                            >
                              {label}
                            </Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
