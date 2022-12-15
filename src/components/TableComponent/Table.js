import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const empDetails = [
  {
    userId: "rirani",
    jobTitleName: "Developer",
    firstName: "Romin",
    lastName: "Irani",
    preferredFullName: "Romin Irani",
    employeeCode: "E1",
    region: "CA",
    phoneNumber: "408-1234567",
    emailAddress: "romin.k.irani@gmail.com",
  },
  {
    userId: "nirani",
    jobTitleName: "Developer",
    firstName: "Neil",
    lastName: "Irani",
    preferredFullName: "Neil Irani",
    employeeCode: "E2",
    region: "CA",
    phoneNumber: "408-1111111",
    emailAddress: "neilrirani@gmail.com",
  },
  {
    userId: "thanks",
    jobTitleName: "Program Directory",
    firstName: "Tom",
    lastName: "Hanks",
    preferredFullName: "Tom Hanks",
    employeeCode: "E3",
    region: "CA",
    phoneNumber: "408-2222222",
    emailAddress: "tomhanks@gmail.com",
  },
];

export default function BasicTable() {
  const [empData, setEmpData] = useState(empDetails);

  const navigate = useNavigate();
  const key = ["firstName", "lastName", "employeeCode", "view"];
  console.log(key);

  useEffect(() => {
    localStorage.setItem("employeeDetails", JSON.stringify(empData));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {key.map((data, i) => (
              <TableCell key={i}>{data}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {empData.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {key.map((k, index) => {
                return k === "view" ? (
                  
                    <TableCell key={index} component="th" scope="row">
                      <Link to={`/profile/${row['employeeCode']}`}>view profile{" "}</Link>
                    </TableCell>
                  
                ) : (
                  <TableCell key={index} component="th" scope="row">
                    {row[k]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
