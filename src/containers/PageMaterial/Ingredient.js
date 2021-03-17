import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, {useState , useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";

import ResponsiveTable from "../../components/ResponsiveTable";
import { rowsMaterial, columnsMaterial } from "./DefineTableMaterial";

import firebaseDB from '../../firebase';

function Ingredient() {

  // View
  const [data, setData ] = useState({});

  useEffect(() => {
    firebaseDB.database().ref().child('Material').on('value', snapshot => {
      if(snapshot.val() != null)
        setData({
          ...snapshot.val()
        })
    })
  }, [])
  

  return (
    <div>
      <Box mb={2}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              fullWidth
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chi nhánh"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chức vụ"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6">Danh sách nguyên liệu</Typography>
      <Box mt={2}>
        <ResponsiveTable
          rows={rowsMaterial}
          columns={columnsMaterial}
          countResults
          showNumberOrder
          CheckboxAllComponent={CheckBox}
          CheckboxItemComponent={CheckBox}
        />
      </Box>

      {
       Object.keys(data).map((id, index) => {
        const key = index
        return(
          <React.Fragment key={key}>
            {data[id].name}
            {data[id].code}
            {data[id].category}
          </React.Fragment>
        );
      })
      }
    </div>
  );
}

export default Ingredient;
const options = [{ title: "Chọn" }];
