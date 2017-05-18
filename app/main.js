import React from 'react';
import { render } from 'react-dom';

import Button from './components/Button';

render(
    (<div>
        <Button name="lalala"></Button>
    </div>),
    window.document.getElementById('root')
);