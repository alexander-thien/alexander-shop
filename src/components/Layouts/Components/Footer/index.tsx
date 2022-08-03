import {
	AiOutlineFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillYoutube,
} from 'react-icons/ai';
function Footer() {
	return (
		<div className='w-full h-[400px] bg-[#332E54] py-10 text-white mt-[100px]'>
			<div className='w-[90%] h-[200px]  mx-auto flex'>
				<div className='w-[30%]'>Follow @alexander-shop</div>
				<div className='ml-5 flex w-[30%] flex-col h-[100%] justify-between border-lelf-custom '>
					<div className='flex items-center cursor-pointer hover:text-[#d6d6d6]'>
						<AiOutlineFacebook className='text-[24px] mr-2 ' />
						<span>Face Book</span>
					</div>
					<div className='flex items-center cursor-pointer hover:text-[#d6d6d6]'>
						<AiFillTwitterSquare className='text-[24px] mr-2 ' />
						<span>Twitter</span>
					</div>
					<div className='flex items-center cursor-pointer hover:text-[#d6d6d6]'>
						<AiFillInstagram className='text-[24px] mr-2 ' />
						<span>Instagram</span>
					</div>
					<div className='flex items-center cursor-pointer hover:text-[#d6d6d6]'>
						<AiFillYoutube className='text-[24px] mr-2 ' />
						<span>You Tube</span>
					</div>
				</div>
				<div className='h-[200px]'>
					<img src='http://localhost:3000/img/stamp@2x.webp' alt='' />
				</div>
			</div>
			<div className='w-[90%] mx-auto mt-10 flex text-[12px]'>
				<span className='mr-5 cursor-pointer underline'>
					Terms of Service
				</span>
				<span className='mr-5 cursor-pointer underline'>
					Privacy Policy
				</span>
				<span className='mr-5 cursor-pointer underline'>
					Do Not Sell My Personal Information
				</span>
				<span className='mr-5 cursor-pointer underline'>
					Curology Access Program
				</span>
				<span className='ml-auto no-underline'>
					All Rights Reserved © 2022 Curology
				</span>
			</div>
		</div>
	);
}

export default Footer;
