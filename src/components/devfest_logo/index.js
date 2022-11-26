import { h, Component } from 'preact';

import style from './style';
export default class IoLogo extends Component {
	render({ rootPath }) {
		return (
			<div class={style.logo_container}>
				<img src="assets/devfest22-logo.svg" />
			</div>
		);
	}
}