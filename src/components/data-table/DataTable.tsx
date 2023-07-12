import React, { FC } from "react";
import { Loading } from "../loading";
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
import { Type_Entity } from "@/types";
export type Type_DataTableProps<Entry> = {
  entry: Entry[];
  columns: Type_TableColumn<Entry>[];
  isLoading: boolean;
};

type Type_TableColumn<Entry> = {
  title: string;
  field: keyof Entry; // link the field to it's corresponding field/value in Entry
  render?: ({ entry }: { entry: Entry }) => JSX.Element;
};

//Enter the fields of each data to their corresponding column(Create a table)

export const DataTable = <Entry extends Type_Entity>({
  columns,
  entry,
  isLoading
}: Type_DataTableProps<Entry>) => {
  if (isLoading) return <Loading />;
  if (entry.length === 0) {
    return (
      <Center h="56" p="4" bg="gray.100">
        <Heading>No data available</Heading>
      </Center>
    );
  }
  return (
    <Box h="full" borderWidth="1px" bg="whiteAlpha.400">
      <TableContainer>
        <Table variant={`striped`} w="full">
          <Thead>
            <Tr>
              {columns.map((column, index) => {
                return <Th key={index + column.title}>{column.title}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {entry.map((entry, index) => {
              return (
                <Tr key={index}>
                  {columns.map(({ title, field, render }, index) => {
                    return (
                      <Td key={index + title}>
                        <Text>
                          {render ? render({ entry }) : `${entry[field]}`}
                        </Text>
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
