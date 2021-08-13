import React, { useEffect, useState } from "react";
import Axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      if (response.data.leght > 0) setUsers(response.data);
    });
  }, []);

  return (
    <Box className="box-users">
      <h4>Show all users</h4>
      <br />
      <Table striped bordered hover className="text-center">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>username</Th>
            <Th>email</Th>
            <Th>country</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((val, key) => {
            return (
              <Tr>
                <Td>{val.userId}</Td>
                <Td>{val.username}</Td>
                <Td>{val.email}</Td>
                <Td>{val.country}</Td>
                <Td>
                  <Link>
                    <FaEdit />
                  </Link>
                </Td>
                <Td>
                  <Link>
                    <FaTrash />
                  </Link>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {users.length < 1 ? <div className="empty-space"></div> : null}
    </Box>
  );
}
