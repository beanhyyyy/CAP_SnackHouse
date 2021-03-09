import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Autocomplete } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
function CreateIngredient() {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Typography>Tạo mới nguyên vật liệu</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={4} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="center">
                  <Typography>Image</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <IconButton color="primary" variant="outlined">
                    <AddIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Tên"
                  placeholder="Nhập tên ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Mã SKU"
                  placeholder="Mã SKU ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Autocomplete
                  options={option}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Danh mục"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Autocomplete
                  options={option1}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Đơn vị tính"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Nhập giá sản phẩm"
                  defaultValue={0}
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Kho được phép bán</b>
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Tất cả các kho"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<CheckIcon />}
              >
                Submit
              </Button>
              &nbsp;&nbsp;
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<CloseIcon />}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CreateIngredient;

const option = [{ title: "Chọn danh mục" }];
const option1 = [{ title: "Chọn đơn vị" }];
