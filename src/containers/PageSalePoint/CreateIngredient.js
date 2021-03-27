import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import firebaseDB from '../../firebase';
import { useHistory } from "react-router";

function CreateIngredient() {
  let history = useHistory();

  // Create
  const addTest = obj => {
    firebaseDB.database().ref().child('Point').push(
      obj,
      err => {
        if(err){
          console.log(err)
        } else {
          alert('Success')
          history.go('/admin/PageSalePoint')
        }
      }
    )
  }

  const initialFieldValues = {
    image : 'Image',
  }

  var [values, setValues] = useState(initialFieldValues);
  
  const handleInputChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = e => {
    addTest(values);
  }

  return (
    <div>
      <Typography variant="h6">Tạo chi nhánh</Typography>
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
                  label="Mã chi nhánh"
                  placeholder="Nhập tên ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="namePoint"
                  value={values.namePoint}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Tên chi nhánh"
                  placeholder="Mã SKU ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="codePoint"
                  value={values.codePoint}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Địa chỉ"
                  variant="outlined"
                  size="small"
                  name="addressPoint"
                  fullWidth
                  value={values.addressPoint}
                  onChange={handleInputChange}
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
                onClick={handleSubmit}
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
