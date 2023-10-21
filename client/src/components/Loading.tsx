import loading from '../assets/image/loading2.gif'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-green-600/50 z-40'>
            <div className='w-80 p-4 space-y-2 text-center bg-white rounded-md'>
                <img src={loading} alt="" className='w-10 mx-auto' />
                <div>
                    <p>Plaese wait</p>
                    <p>We are working on it...</p>
                </div>
            </div>
        </div>
    );
};

export default Loading;