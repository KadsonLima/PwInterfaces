import { Box, Button, Center, Input, Text, VStack } from '@chakra-ui/react';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { chakra } from '@chakra-ui/react';

const SingleFileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "file";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      var formData = new FormData();
      formData.append("file", file);
      console.log(file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const {
        data,
        error,
      }: {
        data: {
          url: string | string[];
        } | null;
        error: string | null;
      } = await res.json();

      if (error || !data) {
        alert(error || "Sorry! something went wrong.");
        return;
      }

      console.log("File was uploaded successfully:", data);
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong.");
    }
  };

  return (
    <chakra.form
      w="full"
      p={3}
      borderWidth="1px"
      borderColor="gray.500"
      borderStyle="dashed"
      onSubmit={(e) => e.preventDefault()}
      encType="multipart/form-data"
    >
      <VStack spacing={6}>
        <Box w="full">
          {previewUrl ? (
            <Center>
              <chakra.img
                alt="file uploader preview"
                objectFit="cover"
                src={previewUrl}
                maxW="80"
                maxH="218"
                mx="auto"
              />
            </Center>
          ) : (
            <label
              htmlFor="fileInput"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              h="full"
              py={3}
              transition="color 150ms"
              cursor="pointer"
              _hover={{ color: 'gray.600' }}
            >
              <chakra.svg
                xmlns="http://www.w3.org/2000/svg"
                w="14"
                h="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </chakra.svg>
              <Text fontSize="sm" fontWeight="medium">
                Select an image
              </Text>
              <Input
                id="fileInput"
                name="file"
                type="file"
                display="none"
                onChange={onFileUploadChange}
              />
            </label>
          )}
        </Box>
        <VStack spacing={1.5} alignItems="center">
          <Button
            disabled={!previewUrl}
            onClick={onCancelFile}
            w={{ base: 'full', md: 'auto' }}
            px={4}
            py={3}
            fontSize="sm"
            fontWeight="medium"
            color="white"
            transition="background-color 300ms"
            bg={previewUrl ? 'gray.700' : 'gray.400'}
            _hover={{ bg: previewUrl ? 'gray.600' : 'gray.400' }}
          >
            Cancel file
          </Button>
          <Button
            disabled={!previewUrl}
            onClick={onUploadFile}
            w={{ base: 'full', md: 'auto' }}
            px={4}
            py={3}
            fontSize="sm"
            fontWeight="medium"
            color="white"
            transition="background-color 300ms"
            bg={previewUrl ? 'gray.700' : 'gray.400'}
            _hover={{ bg: previewUrl ? 'gray.600' : 'gray.400' }}
          >
            Upload file
          </Button>
        </VStack>
      </VStack>
    </chakra.form>
  );
};

export default SingleFileUploadForm;
