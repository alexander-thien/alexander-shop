import * as React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@progress/kendo-react-layout';
import { EmailInput, emailValidator } from '../../components/EmailValidator';

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

				<div className='w-full mt-11 border-b-[1px] text-center leading-[0.1rem]'>
					<span className='p-2 bg-[#f8f8fa]'>Or sign in with </span>
				</div>
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
