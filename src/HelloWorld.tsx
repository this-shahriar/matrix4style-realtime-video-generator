import {useEffect} from 'react';
import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 15;
	const matrixVideo =
		'https://vod-progressive.akamaized.net/exp=1631203099~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F907%2F22%2F554536305%2F2623128036.mp4~hmac=c9747dbea25f6484153f3a7fc7aef69cca71d598a8c0a1e6daa7cd055a9eb2e2/vimeo-prod-skyfire-std-us/01/907/22/554536305/2623128036.mp4?filename=Matrix+-+75043.mp4';

	return (
		<div style={{flex: 1, position: 'relative'}}>
			<Video
				style={{
					height: '100%',
					position: 'absolute',
					transition: 'ease-in-out 1s',
					filter: frame > 20 && frame < 148 ? 'grayscale(50%)' : '',
				}}
				src={matrixVideo}
				volume={0}
			></Video>
			<div style={{opacity}}>
				<Sequence from={transitionStart + 10} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
			</div>
		</div>
	);
};
