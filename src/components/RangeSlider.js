import { Slider } from '@mui/material';

const convertTime = (hours) => {
      //it is pm if hours from 12 onwards
      let suffix = (hours >= 12)? 'pm' : 'am';

      //only -12 from hours if it is greater than 12 (if not back at mid night)
      hours = (hours > 12)? hours -12 : hours;
  
      //if 00 then it is 12 am
      hours = (hours == '00')? 12 : hours;

      return hours + suffix;
}

function RangeSlider({ day, val=[8,20], setVal }) {
    const gfg = [
        {
          value: 8,
          label: "8 AM",
        },
        {
          value: 10, 
          label: "10 AM",
        },
        {
          value: 12, 
          label: "12 PM",
        },
        {
          value: 14, 
          label: "2 PM",
        },
        {
          value: 16, 
          label: "4 PM",
        },
        {
          value: 18, 
          label: "6 PM",
        },
        {
          value: 20, 
          label: "8 PM",
        },
      ];
      
      const updateRange = (e, data) => {
        setVal(data);
      };
      return (
        <div>
          <div style={{ width: 500, margin: 30 }}>
            <span> {day} : {convertTime(val[0])} to {convertTime(val[1])}</span>{" "}
            <Slider 
              value={val} 
              onChange={updateRange} 
              min={8}
              max={20}
              marks={gfg}
            />
          </div>
        </div>
      );
    }

export default RangeSlider
