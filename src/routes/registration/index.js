import { h, Component } from 'preact';
import TicketIcon from '../../components/ticket_icon';
import DevFestLogo from '../../components/devfest_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import RegistrationShape from '../../components/SVG/Shape/RegistrationShape';
import RegistrationShapeMobile from '../../components/SVG/Shape/RegistrationShapeMobile';
import style from './style';

export default class Registration extends Component {
	state = {
		registrationStatus: 'opening_soon',
		registrationStatusText: 'Loading ...',
		registrationUrl: 'https://devfest22kl.peatix.com/'
	};

	handleScroll() {
		const ele = document.querySelector('.topappbar.mdc-top-app-bar');
		if (document.documentElement.scrollTop < 56) {
			ele.setAttribute('top', true);
		}
		else {
			ele.removeAttribute('top');
		}
	}

	changeRegistrationStatusText(status) {
		if (status === 'opening_soon') {
			this.setState({ registrationStatusText: 'Opening Soon' });
		}
		if (status === 'closed') {
			this.setState({ registrationStatusText: 'Closed' });
		}
		if (status === 'open') {
			this.setState({ registrationStatusText: 'Open' });
		}
	}

	constructor(props) {
		super(props);
		this.props = props;

		if (props.info) {
			const status = props.info.registration_status;
			this.setState({ registrationStatus: status });
			this.changeRegistrationStatusText(status);
		}
	}

	componentDidMount() {
		document.title = 'Registration - DevFest 2022 Kuala Lumpur';
		window.addEventListener('scroll', this.handleScroll, { passive: true });
		this.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.info !== this.props.info) {
			if (nextProps.info) {
				const status = nextProps.info.registration_status;
				this.setState({ registrationStatus: status });
				this.changeRegistrationStatusText(status);
			}
		}
	}

	render(
		{ rootPath, info },
		{ registrationStatus, registrationStatusText, registrationUrl }
	) {
		return (
			<div>
				<div class={`${style.hero} hero`}>
					<div class={style.heroText}>
						<DevFestLogo rootPath={rootPath} />
						{info && (
							<h2>
								{info.registration_text} <br />
								<span>{info.registration_text_highlight}</span>
							</h2>
						)}
						{registrationStatus === 'open' && (
							<a
								class={style.ticket_btn}
								href={registrationUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{info.registration_btn_text}
							</a>
						)}
					</div>
					<div class={style.heroShape}>
						<div class={style.registrationShape}>
							<RegistrationShape />
						</div>
						<div class={style.registrationShapeMobile}>
							<RegistrationShapeMobile />
						</div>
					</div>
				</div>
				<div class={style.ticket_types}>
					<h3>Ticket type</h3>
					<div class={style.ticket_types_container}>
						<div class={style.ticket_type} id={style.general}>
							<TicketIcon />
							<div class={style.ticket_content}>
								<div class={style.ticket_title}>General admission</div>
								<div class={style.ticket_body}>
									DevFest 2022 KL welcomes anyone who pursues development and tech as a
									career, side occupation, or hobby. The ticket price is RM30.
									Grab your spot NOW at DevFest 2022 KL from our peatix <a href="https://devfest22kl.peatix.com/" target="_blank">event page</a>!!
								</div>
							</div>
						</div>
					</div>
				</div>
				<SocialFooter rootPath={rootPath} />
				<Footer rootPath={rootPath} />
			</div>
		);
	}
}