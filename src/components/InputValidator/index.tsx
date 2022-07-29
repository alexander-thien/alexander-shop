import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';

const textRegex = new RegExp(/^([^0-9]*)$/);
const passRegex = new RegExp(
	'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);
const InputValidate = (value: string) => {
	if (value === undefined) return 'Fiel invalid...';
	return textRegex.test(value) ? '' : 'Fiel invalid...';
};

const PassValidate = (value: string) => {
	if (value === undefined) return 'Fiel invalid...';
	return passRegex.test(value) ? '' : 'Fiel invalid...';
};

const InputCustom = (fieldRenderProps: any) => {
	const { validationMessage, visited, ...others } = fieldRenderProps;
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
export { InputValidate, InputCustom, PassValidate };
