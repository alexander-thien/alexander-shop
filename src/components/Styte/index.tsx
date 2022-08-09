import { Fragment } from 'react';
import { Props } from '../Types';

import '@progress/kendo-theme-default/dist/all.css';
import './GlobalStyle.scss';

const Style: React.FC<Props> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};

export default Style;
