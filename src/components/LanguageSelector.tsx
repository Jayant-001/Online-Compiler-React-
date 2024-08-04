import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    NumberInputStepper,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

type Props = {
    language: string;
    onSelect: Function;
};

const LanguageSelector = ({ language, onSelect }: Props) => {
    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box mb={2}>
            <Menu isLazy>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList bg="#110c1b">
                    {languages.map(([lang, version]) => (
                        <MenuItem
                            color={lang === language ? "blue.400" : ""}
                            bg = {lang === language ? "gray.700" : "transparent"}
                            _hover={{
                                color: "blue.400",
                                bg: "gray.900"
                            }}
                            key={lang}
                            onClick={() => onSelect(lang)}
                        >
                            {lang}
                            &nbsp;
                            <Text fontSize="sm" as="span" color="gray.600">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
