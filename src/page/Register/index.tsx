import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { EmailInput, emailValidator } from '../../components/EmailValidator';
import { Loader } from '@progress/kendo-react-indicators';
import {
	InputCustom,
	InputValidate,
	PassValidate,
} from '../../components/InputValidator';
import { useUserStore } from '../../store/UserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
	const { addUser } = useUserStore();

	const [isLoading, setIsLoading] = useState(false);

	let navigate = useNavigate();

	const handleSubmit = async (dataItem: any) => {
		setIsLoading(true);
		const a = await addUser(
			dataItem.email,
			dataItem.pass,
			dataItem.firstName,
			dataItem.lastName
		);
		if (a) {
			setIsLoading(false);
			navigate('/login');
		}
	};

	return (
		<div className='w-[100%] h-[100%] flex'>
			<div className=' register_back_ground'></div>
			<div className='register_back_form flex flex-col w-[35%] h-[100%] ml-2 p-10'>
				<h1 className='text-[26px] font-bold mt-2 '>
					Register to start here
				</h1>

				<Form
					onSubmit={handleSubmit}
					render={(formRenderProps) => (
						<FormElement className='text-center mt-10'>
							<div>
								<Field
									name={'email'}
									type={'email'}
									component={EmailInput}
									label={'Email'}
									validator={emailValidator}
								/>
							</div>
							<div className='mt-3'>
								<Field
									name={'pass'}
									type={'password'}
									component={InputCustom}
									label={'Password'}
									validator={PassValidate}
								/>
							</div>
							<div className='mt-3'>
								<Field
									name={'firstName'}
									type={'text'}
									component={InputCustom}
									label={'First name'}
									validator={InputValidate}
								/>
							</div>
							<div className='mt-3'>
								<Field
									name={'lastName'}
									type={'text'}
									component={InputCustom}
									label={'Last name'}
									validator={InputValidate}
								/>
							</div>
							<Button
								themeColor={'info'}
								type={'submit'}
								className='p-3 mt-5 w-[50%] bg-[#332e54]'
							>
								{isLoading ? (
									<Loader
										size='medium'
										type={'pulsing'}
										themeColor={'light'}
									/>
								) : (
									"Let's Go"
								)}
							</Button>
						</FormElement>
					)}
				/>
				<div className='mt-10 border-b-[1px] text-center leading-[0.1rem]'>
					<span className='p-2 bg-[#f8f8fa] text-[14px]'>Or</span>
				</div>
				<div className='text-center mt-10'>
					<Button
						fillMode='outline'
						className='p-3 mt-5 w-full  hover:bg-blue-500 border-blue-500 text-[#3b82f6]'
					>
						Login with FaceBook
					</Button>
					<Button
						fillMode='outline'
						className='p-3 mt-5 w-full  hover:bg-red-500 border-red-500 text-[#ef4444]'
					>
						Login with Google
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Register;
