import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label1 = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ColorCheckboxes() {
  const [value, setValue] = React.useState(4);
  return (
    <>
      <div> {/*CheckBox */}
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
        <br />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel disabled control={<Switch defaultChecked />} label="Label" />
        <br />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="error" />

        <Checkbox {...label} defaultChecked sx={{
          '&.Mui-checked': { color: pink[600] },
        }}
        />
      </div>

      {/* Hodnoceni */}
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Hodnoceni</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>


       <div> {/* Switch */}
        <Switch {...label1} defaultChecked />
        <Switch {...label1} defaultChecked color="secondary" />
        <Switch {...label1} defaultChecked color="warning" />
        <Switch {...label1} defaultChecked color="default" />
        <PinkSwitch {...label1} defaultChecked />
      </div>


      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="warning" />
        <CircularProgress color="inherit" />
        <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </Box>


    </>
  );
}