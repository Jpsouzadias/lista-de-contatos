import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserInfo = ({
  id,
  name,
  email,
  username,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <Box marginBottom={4}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">User Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table className="user-info" aria-label="user information table">
              <TableBody>
                <TableRow>
                  <TableCell>ID:</TableCell>
                  <TableCell>{id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Username:</TableCell>
                  <TableCell>{username}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>{email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone:</TableCell>
                  <TableCell>{phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Website</TableCell>
                  <TableCell>{website}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table className="user-info" aria-label="address information table">
              <TableBody>
                <TableRow>
                  <TableCell>Street:</TableCell>
                  <TableCell>{address.street}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Suite:</TableCell>
                  <TableCell>{address.suite}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>City:</TableCell>
                  <TableCell>{address.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Zipcode:</TableCell>
                  <TableCell>{address.zipcode}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Geo Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table className="user-info" aria-label="geo information table">
              <TableBody>
                <TableRow>
                  <TableCell>Lat:</TableCell>
                  <TableCell>{address.geo.lat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lng:</TableCell>
                  <TableCell>{address.geo.lng}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table className="user-info" aria-label="company information table">
              <TableBody>
                <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>{company.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CatchPhrase:</TableCell>
                  <TableCell>{company.catchPhrase}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bs:</TableCell>
                  <TableCell>{company.bs}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UserInfo;
