import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const PROFILE = () => {
  let { id } = useParams();

  const [emData, setEmData] = useState([]);
  const [profile, setProfile] = useState([]);
  const [profileKey, setProfileKey] = useState([]);

  useEffect(() => {
    const empData = JSON.parse(localStorage.getItem("employeeDetails"));
    const record = empData.filter((data) => data.employeeCode === id);
    const key = record.length > 0 ? Object.keys(record[0]) : [];
    setProfile(record);
    setProfileKey(key);
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="profile table">
          <TableHead>
            <TableRow>
              {profileKey.map((data, i) => (
                <TableCell key={i}>{data}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {profile.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {profileKey.map((k, index) => (
                  <TableCell key={index} component="th" scope="row">
                    {row[k]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PROFILE;
