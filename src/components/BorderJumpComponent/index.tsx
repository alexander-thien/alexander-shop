const style = {
	borderBottom: ' 1px solid rgb(237, 237, 240)',
	opacity: '1',
};

interface Props {
	text: string;
	style?: object;
}

const BorderJumpComponent = (props: Props) => {
	const text = props.text;
	const style1: object = props.style || {};
	return (
		<div
			// eslint-disable-next-line react/style-prop-object
			style={{ ...style, ...style1 }}
			className='w-[80%] text-center mx-auto  leading-[0.1em] '
		>
			<span>{text || 'Please using props in components'}</span>
		</div>
	);
};

export default BorderJumpComponent;
