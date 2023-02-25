import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function SwitchLabels(props) {
    return (
        <div>
            Dark/Light <Switch onChange={props.change} defaultChecked />
        </div>
    );
}