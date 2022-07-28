import { Loader } from '@progress/kendo-react-indicators';

function Loading() {
	return (
		<div className='w-[100%] h-[100%] flex justify-center items-center'>
			<Loader
				size='large'
				themeColor={'tertiary'}
				type='converging-spinner'
			/>
		</div>
	);
}

export default Loading;
