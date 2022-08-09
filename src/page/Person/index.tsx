import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserItem, useUserStore } from '../../store/UserStore';
import styles from './person.module.scss';
import { BsListUl, BsXCircleFill } from 'react-icons/bs';
import { Field } from '@progress/kendo-react-form';
import { InputCustom } from '../../components/InputValidator';
const cx = (style: any[]) => style.join(' ');

function Person() {
	const { getPerson, userUpdate } = useUserStore();
	const user: UserItem = getPerson();
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [isSetting, SetIsSetting] = useState(false);
	const [name, setName] = useState({
		firstName: '',
		lastName: '',
	});

	const navigate = useNavigate();

	const onSetting = () => {
		if (isSetting === false) {
			SetIsSetting(true);
		} else {
			const newUser: UserItem = {
				...user,
				firstName: name.firstName,
				lastName: name.lastName,
				address: address,
				phone: phone,
			};
			userUpdate(newUser);
			SetIsSetting(false);
		}
	};

	const closeSetting = () => {
		SetIsSetting(false);
	};

	useEffect(() => {
		if (user.auth === 'false') navigate('/login');
		else {
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={cx([styles.wraper])}>
			<div className={cx([styles.person_infor, 'border-custom'])}>
				<div className={styles.person_img_wraper}>
					<img src='https://i.pravatar.cc/300' alt='' />
				</div>
				<div className={styles.person_infor_wraper}>
					<p className='font-semibold text-[40px] mb-5'>
						Name:{' '}
						{`${name.firstName || user.firstName} ${
							name.lastName || user.lastName
						}`}
					</p>
					{!isSetting || (
						<div className='flex items-center justify-between'>
							<span className=''>First Name:</span>
							<input
								type='text'
								className='p-3 w-[30%] bg-[#36324e1e]'
								value={name.firstName}
								onChange={(e) =>
									setName({
										...name,
										firstName: e.target.value,
									})
								}
							/>
							<span className=''>Last Name:</span>
							<input
								type='text'
								className='p-3 w-[30%] bg-[#36324e1e]'
								value={name.lastName}
								onChange={(e) =>
									setName({
										...name,
										lastName: e.target.value,
									})
								}
							/>
						</div>
					)}
					<p className={styles.person_infor_item}>
						Address: {address}
					</p>
					{!isSetting || (
						<input
							type='text'
							className='bg-[#36324e1e] p-3'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					)}
					<span className={styles.person_infor_item}>
						Phone: {phone}
					</span>
					{!isSetting || (
						<input
							type='text'
							className='bg-[#36324e1e] p-3'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					)}
				</div>
				<div className='flex flex-col'>
					<BsListUl
						onClick={onSetting}
						className='text-[32px] cursor-pointer font-semibold hover:text-[#000]'
					/>
					{!isSetting || (
						<BsXCircleFill
							className='text-[32px] cursor-pointer font-semibold hover:text-[#000] mt-10'
							onClick={closeSetting}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Person;
