import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <div className=" fs-3 mt-4 mb-5"  ><span className="fw-bold" style={{color:"#422AFB"}}> Flights</span> Bookings </div>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
