import { Loading } from "@/components/loading";
import { Entity } from "@/types";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Center,
  Heading,
  Box,
  Text
} from "@chakra-ui/react";
import { FC } from "react";

type E = {
  name: string;
};

type render = ({ e }: { e: E }) => string;

const print: render = ({ e }) => {
  return e.name;
};

const e: E = {
  name: "some string"
};

print({ e });
