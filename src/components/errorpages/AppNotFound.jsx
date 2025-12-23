import Appnotfound from '../../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div className="w-full lg:max-h-[50vh]">
            <div className="lg:max-w-11/12 flex items-center justify-center flex-col">
                <img src={Appnotfound} alt="appnotfound" width={500} height={500}/>
                <h1 className="text-blck font-bold text-3xl mt-3">OOPS!! APP NOT FOUND</h1>
                <p className="text-gray-400 text-[18px] p-1">The app you are requesting is not found on our system. Please try another apps</p>
            </div>
        </div>
    );
};

export default AppNotFound;