import { Fragment } from 'react';
import { Props } from '../Types';

import './GlobalStyle.scss';
import '@progress/kendo-theme-default/dist/all.css';
const Style: React.FC<Props> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};

export default Style;
