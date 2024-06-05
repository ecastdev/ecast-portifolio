import  { ecasLogo,ecastID, } from "../assests/assest";

export default function Landing(){
    return(
      <div className="flex  justify-around items-center">
       
        <div>
            <h1 className="text-center text-9xl uppercase font-extrabold text-amber-500">
                Hi! am Ecast
            </h1>
            <h4 className='text-center text-3xl font-medium bg-black text-amber-500 ml-20 '>
                Frontend developer
            </h4>
            <p className=" text-center text-xl ">
                Professionalize in Frontend development am highly skilled in it 

            </p>
        </div>
        {/* my image id  */}
        <div>
            <img src={ecastID} className=" w-full h-screen"/>

        </div>

      </div>  
    );
}