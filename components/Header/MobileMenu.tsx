"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { EpClose, SolarHamburgerMenuOutline } from "@/constants/svgIcons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkItem, Navigation } from "@/types";

export default function MobileMenu({
  navigation,
  callToAction,
  mobileIsOpen,
  setMobileIsOpen,
}: {
  navigation: Navigation;
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
                <div className="flex h-full flex-col overflow-y-scroll bg-primary">
                  <div className="flex items-center justify-between p-5 sm:justify-end sm:p-7">
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
                      className="flex size-6 items-center justify-center"
                      onClick={handleMobileMenu}
                    >
                      <EpClose className="size-6 text-secondary" />
                    </button>
                  </div>

                  <div className="flex grow flex-col items-center justify-center p-5 lg:p-7">
                    <nav>
                      <ul className="flex flex-col items-center">
                        {navigation.map(({ label, url, newTab }: LinkItem) => (
                          <li key={label}>
                            <Link
                              href={url}
                              target={newTab ? "_blank" : "_self"}
                              rel={newTab ? "noopener noreferrer" : undefined}
                              className="py-5 text-center font-pbBold text-xl text-white"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <ul className="my-5 flex flex-col">
                      {callToAction.map(({ label, url, newTab }: LinkItem) => (
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
