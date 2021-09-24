import { NextPage } from 'next';

import WavesTop from './waves-top.svg';
import PeaksBottom from './peaks-bottom.svg';
import classNames from 'classnames';
import { twPageContainer } from '../utils/tailwind-mixins';

const Home: NextPage<{ homeColor: string }> = ({ homeColor }) => {
    return (
        <div className={'h-screen bg-red-500 text-white'}>
            <WavesTop className={`text-${homeColor} w-full h-auto`} />
            <div
                className={classNames(
                    twPageContainer,
                    'text-3xl h-1/3 flex justify-center flex-col font-bold',
                )}
            >
                <p className={'mb-2 mt-4'}>Hi, I’m Adam 👋🏼</p>
                <p>
                    I help software teams collaborate better in achieving their
                    mission.
                </p>
            </div>
            <PeaksBottom className={`text-${homeColor} w-full h-auto`} />
            <div className={'h-screen bg-yellow-300'}>
                <p>
                    I do that by giving these services to companies that work
                    with me
                </p>
            </div>
        </div>
    );
};

export default Home;
