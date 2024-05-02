import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/index";
import { add_loan_request } from "../../store/reducers/loanRequests";
import useStyles from "./styles";

export default function MyRequests() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const state = useSelector((state) => state?.loan);
  console.log(state, " = State");
  return (
    <Box className={classes.Container}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#000080",
            fontSize: "25px",
            fontWeight: "900",
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          Total Requests
        </Typography>
        <Button
          title="Add Request"
          variant="outlined"
          style={{ marginBlock: "10px" }}
          onClick={() => dispatch(add_loan_request(5003))}
        />
      </Box>
      <TableContainer sx={{ width: "100%", boxShadow: 8, borderRadius: 2 }}>
        <Table stickyHeader>
          <Box sx={{position:'fixed'}}>
          <TableHead sx={{ position: "sticky" }}>
            <TableRow>
              <TableCell className={classes.TableHeading}>
                Requested Package
              </TableCell>
              <TableCell className={classes.TableHeading}>Month</TableCell>
              <TableCell className={classes.TableHeading}>
                Requested Amount
              </TableCell>
              <TableCell className={classes.TableHeading}>
                Requested Status
              </TableCell>
              <TableCell className={classes.TableHeading}>
                Payment Status
              </TableCell>
            </TableRow>
          </TableHead>
          </Box>

          <Box sx={{ height: "80vh", width:'60vw'}}>
            <TableBody>
              {/* {stock.map((item,index)=>( */}
              {/* // <TableRow sx={{backgroundColor:index%2 === 0 ? 'white':'whitesmoke'}}> */}
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography
                    sx={{
                      backgroundColor: "#ff0000",
                      borderRadius: 1.5,
                      color: "#fff",
                    }}
                  >
                    abc
                  </Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>abc</TableCell>
                <TableCell className={classes.TableCell}>
                  <Typography sx={{ backgroundColor: "navy" }}>abc</Typography>
                </TableCell>
                <TableCell
                  className={classes.TableCell}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <Typography className={classes.HighlightedCell}>
                    abc
                  </Typography>
                </TableCell>
              </TableRow>

              {/* ))} */}
            </TableBody>
          </Box>
        </Table>
        <Pagination count={5} page={3} defaultPage={2} />
      </TableContainer>
    </Box>
  );
}
