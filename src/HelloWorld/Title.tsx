import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);

	console.log(videoConfig);
	return (
		<h1
			style={{
				margin: '0',
				width: '100%',
				fontSize: 180,
				height: '100%',
				display: 'grid',
				fontWeight: 'bold',
				textAlign: 'center',
				position: 'absolute',
				alignContent: 'center',
				fontFamily: 'Special Elite, cursive',
				textShadow: '0 0 18px black',
				transform: `scale(${spring({
					fps: videoConfig.fps,
					frame: frame - 5,
					from: 1,
					to: 1.5,
					config: {
						damping: 100,
						stiffness: 200,
						mass: 650,
					},
				})})`,
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: titleColor,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
