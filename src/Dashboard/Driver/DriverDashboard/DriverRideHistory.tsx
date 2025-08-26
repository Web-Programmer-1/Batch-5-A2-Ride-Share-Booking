import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useGetDriverRiderHistoryQuery } from "../../../redux/driverApislice";

const statusOptions = ["pending", "completed", "cancelled"];


const DriverRideHistory = () => {
  const [filters, setFilters] = useState({
    status: "",
    from: "",
    to: "",
    page: 1,
    limit: 10,
  });

  const { data, isLoading, isError } = useGetDriverRiderHistoryQuery(filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePageChange = (_: any, value: number) => {
    setFilters((prev) => ({ ...prev, page: value }));
  };

  const handleFilterReset = () => {
    setFilters({ status: "", from: "", to: "", page: 1, limit: 10 });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Driver Ride History
      </Typography>

      <Box display="flex" gap={2} mb={3} flexWrap="wrap">
        <TextField
          select
          label="Status"
          name="status"
          value={filters.status}
          onChange={handleChange}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="">All</MenuItem>
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="date"
          name="from"
          label="From"
          value={filters.from}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          name="to"
          label="To"
          value={filters.to}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <Button variant="outlined" onClick={handleFilterReset}>
          Reset Filters
        </Button>
      </Box>

      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Typography color="error">Failed to load ride history.</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Requested At</TableCell>
                  <TableCell>Pickup</TableCell>
                  <TableCell>Drop-off</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((ride: any) => (
                  <TableRow key={ride._id}>
                    <TableCell>{ride._id}</TableCell>
                    <TableCell>{ride.status}</TableCell>
                    <TableCell>
                      {new Date(ride.requestedAt).toLocaleString()}
                    </TableCell>
                    <TableCell>{ride.pickupLocation}</TableCell>
                    <TableCell>{ride.dropoffLocation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(data.total / filters.limit)}
              page={filters.page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default DriverRideHistory;
