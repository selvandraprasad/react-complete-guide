import React from 'react';

import Aux from '../../hoc/Aux';
import layoutClasses from '../Layout/Layout.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={layoutClasses.layoutContent}>
            {props.children}
        </main>
    </Aux>
);export default layout;
