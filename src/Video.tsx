import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: new Date().toLocaleTimeString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
					}),
					titleColor: '#63fa2fcc',
				}}
			/>
		</>
	);
};
