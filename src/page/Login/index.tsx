import * as React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import BorderJumpComponent from '../../components/BorderJumpComponent';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@progress/kendo-react-layout';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const emailValidator = (value: string) => {
	return emailRegex.test(value) ? '' : 'Please enter a correct email.';
};

const EmailInput = (fieldRenderProps: any) => {
	const { validationMessage, visited, ...others } = fieldRenderProps;
	return (
		<div>
			<Input {...others} className={'text-[14px] h-14'} />
			{visited && validationMessage && (
				<Error className={'font-black'}>{validationMessage}</Error>
			)}
		</div>
	);
};

function Login() {
	let navigate = useNavigate();

	const handleSubmit = (dataItem: any) => {
		console.log('submit run');
	};

	const GotoRegister = () => {
		navigate('/register', { state: { register: true } });
	};

	return (
		<div className='w-[100%] h-[100%] flex justify-center items-center'>
			<div className='flex flex-col items-center  w-96 min-h-[600px]'>
				<h1 className='font-extrabold text-[26px]'>Log in</h1>

				<Form
					onSubmit={handleSubmit}
					render={(formRenderProps) => (
						<FormElement className='w-[100%] text-center'>
							<div>
								<Field
									name={'email'}
									type={'email'}
									component={EmailInput}
									label={'Email'}
									validator={emailValidator}
								/>
							</div>
							<Button
								themeColor={'info'}
								type={'submit'}
								className='p-3 mt-5 w-[50%] bg-[#332e54]'
							>
								Login
							</Button>
						</FormElement>
					)}
				/>

				<BorderJumpComponent
					text='Login with option'
					style={{ marginTop: '50px' }}
				/>

				<div className='flex justify-around items-center h-20 w-full mt-11 border-b-[1px] pb-4'>
					<Avatar type='text' themeColor={'info'} size='large'>
						<span>FB</span>
					</Avatar>
					<Avatar type='text' themeColor={'primary'} size='large'>
						<span>Google</span>
					</Avatar>
					<Avatar type='text' themeColor={'warning'} size='large'>
						<span>Zalo</span>
					</Avatar>
				</div>

				<span className='text-[13px] mt-4'>
					Don't have an account? Click below to get started!
				</span>
				<Button
					themeColor={'secondary'}
					fillMode='outline'
					className='p-3 mt-5 w-[50%]'
					onClick={GotoRegister}
				>
					Get Stated
				</Button>
			</div>
		</div>
	);
}

export default Login;
