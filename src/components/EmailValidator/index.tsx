import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const emailValidator = (value: string) => {
	return emailRegex.test(value) ? '' : 'Please enter a correct email.';
};
const EmailInput = (fieldRenderProps: any) => {
	const { validationMessage, visited, ...others } = fieldRenderProps;
	console.log(fieldRenderProps);

	return (
		<div>
			<Input {...others} className={'text-[14px] h-14'} />
			{visited && validationMessage && (
				// eslint-disable-next-line react/jsx-no-undef
				<Error className={'font-black'}>{validationMessage}</Error>
			)}
		</div>
	);
};

export { emailValidator, EmailInput };
