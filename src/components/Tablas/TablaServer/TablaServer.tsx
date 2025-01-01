import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const TablaServer = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              "name"
            </TableCell>
            <TableCell align="right">"calories"</TableCell>
            <TableCell align="right">"fat"</TableCell>
            <TableCell align="right">"carbs"</TableCell>
            <TableCell align="right">"protein"</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              "name"
            </TableCell>
            <TableCell align="right">"calories"</TableCell>
            <TableCell align="right">"fat"</TableCell>
            <TableCell align="right">"carbs"</TableCell>
            <TableCell align="right">"protein"</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              "name"
            </TableCell>
            <TableCell align="right">"calories"</TableCell>
            <TableCell align="right">"fat"</TableCell>
            <TableCell align="right">"carbs"</TableCell>
            <TableCell align="right">"protein"</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              "name"
            </TableCell>
            <TableCell align="right">"calories"</TableCell>
            <TableCell align="right">"fat"</TableCell>
            <TableCell align="right">"carbs"</TableCell>
            <TableCell align="right">"protein"</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaServer;
