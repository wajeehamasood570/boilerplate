import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Switches() {
  return (
    <div>
       <FormGroup>
      <FormControlLabel required control={<Switch />} label="On" sx={{margin:"50px auto"}}/>
    </FormGroup>
      
    </div>
  );
}