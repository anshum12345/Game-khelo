import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']} className="footerStack">
        <VStack
          alignItems={'stretch'}
          w={'full'}
          px={'4'}
          className="footerVStack"
        >
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            className="Heading"
          >
            {/* Subscribe to get updates */}
            {/* <a href="mailto:example@example.com">Send email</a> */}

          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
              className="Input"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
              className="Button"
            >
            <a href="mailto:anshumdwivedi8@gmail.com">Send email</a>

              <AiOutlineSend size={20} className="AiOutlineSend" />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          className="footerVStack"
        >
          {/* <Heading textTransform={'uppercase'} textAlign={'center'} className="Heading">
            VIDEO HUB
          </Heading>
          <Text className="Text">All rights received</Text> */}
        </VStack>

        <VStack w={'full'} className="footerVStack">
          <Heading size={'md'} textTransform={'uppercase'} className="Heading">
            Coding Plateform
          </Heading>
          <Button variant={'link'} colorScheme={'white'} className="Button-link socialMediaButton">
            <a target={'black'} href="https://github.com/anshum12345">
              GitHub
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'} className="Button-link socialMediaButton">
            <a target={'black'} href="https://www.linkedin.com/in/anshum-dwivedi-67530922a/">
              Linkedin
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'} className="Button-link socialMediaButton">
            <a target={'black'} href="https://leetcode.com/Xavier_2212/">
              LeetCode
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'} className="Button-link socialMediaButton">
            <a target={'black'} href="https://www.codechef.com/users/xavier_0811">
              CodeChef
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
