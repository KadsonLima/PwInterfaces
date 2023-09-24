import { Box, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import MultipleFileUploadForm from '../../components/MultipleFileUploadForm';
import SingleFileUploadForm from '../../components/SingleUploadForm';

const Home = () => {
  return (
    <Box>
      <Head>
        <title>File uploader</title>
        <meta name="description" content="File uploader" />
      </Head>

      <Box py={10}>
        <Box maxW="3xl" mx="auto" px={3}>
          <Heading mb={10} fontSize="3xl" fontWeight="bold" color="gray.900">
            Upload your files
          </Heading>

          <Box spacing={10}>
            <Box>
              <Heading
                mb={3}
                fontSize="xl"
                fontWeight="bold"
                color="gray.900"
              >
                Interfaces.pck
              </Heading>
              <SingleFileUploadForm />
            </Box>
            <Box>
              <Heading
                mb={3}
                fontSize="xl"
                fontWeight="bold"
                color="gray.900"
              >
                Surfaces.pck
              </Heading>
              <SingleFileUploadForm />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="footer">
        <Box maxW="3xl" mx="auto" px={3}>
          <Text>All right reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
