"use client";
import { Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Wrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/*= Header =*/}
      <Header onOpen={onOpen} />
    </>
  );
};

export default Wrapper;
