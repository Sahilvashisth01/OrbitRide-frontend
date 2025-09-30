import React from "react";
import { Link,useNavigate  } from "react-router-dom";
import axios from "axios";

const FinishRide = (props) => {
  const navigate = useNavigate(); 
  async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('captain-token')}`
            }
        })

        if (response.status === 200) {
            
            navigate('/captain-home')
        }

    }
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4 ">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALsAxwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABBEAABAwICBAgNAgYDAQEAAAACAAEDBBIFIhETITIUMUFCUnKBsQYjJDM0UWFicYKRocHR8BU1Q2OS8SVT4bJz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAgIDAAIDAQEBAAAAAAAAAAECEQMhMRJBBBMycSJC/9oADAMBAAIRAxEAPwDyzDW8rFM8XDycesgMO9NHt7k2xcfJx6yZiorRsi4txDmyItyJWrHTpnbOumJCuVixpVBxo61K0GMS6YkG0qlGZCg2FM6kZ0Fr10061BtB7Emvg/HrasVXOEKzeCGeoTxRGdHrvgrSZNYXwFWy3IlXg/DqqKPqpsad8I+yCPfRLIK+00WBIx4CXTpaWaVrSmFNuuCXWlcugEDqENcialCrGN3LNK0sWMYsWLFjHzRhY+Vxp7i1KXBBK1J8I9Nh6y9GkohqKLdTsVHlMwogRyfKjsdw/gspZcqFFsnyoB9i6oUGlFVLIdSZdcMZyW2cljMumZAJpnJba5SCCJjh6Wb3f1W0YhghklPKKuHgsQ0RiU5CPaktPARBlyprTUGTN3LOaQVjbPY8B8JcNKKOIquMS957e9WQauOULo5BkHpC7O32XjNJQlqhtK3/AErDhdNVxePgkKMvdfj0cTO3F9dKCdivHReZLjNMInSfB8QGq8XUjq6no8h+1vb7E3TomyTSsWmW04hpY6xad0DAlShkTUIZYJpYtrEDGli3oWLGPm7CvTYesvTqOUeCDcvMcNbyuPrK7STEFISoxEKvCmSM7hVcEcimxaQpagbiXIij6MhbVChrUdVNkQ2hcz6dceHDCpBBdMylAVrC9HVPHeeX5kXGCnoafyf97fi3IskGw7UsgxNxFYasGFy3mNyropxhjFlzKT6XjwtdGIhu7qd0c9gJFSRlqhzdyaU4FlG77KiEkWCmMZbekO3/AErFSy62LNvc5VCkuAxTqlqSA/3tZURzTgPBJdaUqGssltuR8Z3KpEkd1y7rbrh1jIhqEKip0KlCYsWLFjGLFixYx844c3lcfWVuq/RC6qqeHt5XH1lbatvJC6qqyaKlXN40V2w//K1W+dFSs2RYwrq2yIbQjKtkMwqEunZDhpmRFM2cbu7T9uVRiKnhHOPby6NujYlC0OYfNXW229Jnbb8UPKw5iIrRRIeiZucSV1Uo7pZR7Uj6GKJ46uD/AKriR1LXx7urIUmp8TGIx1VNJJm0brpxXVonEIy0OqIh0iYszcnE7tp0P7HSuI/kyxUWI22jdcnIVwjaRdFee4BNJVVYxiVubQVytGNmOFRWzlzcv6IWx9NFnosboTPVFINyf0hidskZXD+q8jwSvw2qrS1+W72s3243XomBR8Hlj1Emsgk7dn/jqkWRkhwbeNG72J9R7gpDKBa35k5o5hsFXRxvoe6jdY0i1ciEinQlymqzyJU9TZKpykkxqsZMKxwWqaYTRTBem0AE0LEaFOsWMfM1B6XH1lbqtvJC6qqlA3lEfWVsq/RPlVZE48KpWNnFTCyiq98VOLZFgexdVshrUZVMhmZc0+ndDhgstn42W0cupFnH6Np0+vjdbFlEcmolkzWlPaDF6tLMzpRywg3kQ9VLwiuO0hRgy2UQ3dHR99CjAxypJcNBbJgwy22SKS33VLUAQRZpCu5tzv3Ls6ng8VxbyUfxOMK2Qqksoi1ux3+KWNlXSGuARDwjWRb12ZX3GsGjxWiHLdl9TO3ay8/wTF6SWt8RIO9pzaR71fqXwhw8IuCV1THHrt3M2nQjtMDporMHgzHTy5qSGTNvC1pfVlbvB7DRp7Sg1kcVzPYROTdmnToSx8R/hWIFTFJr6Yi8UZcfw09qtGFVEFQHi0yEktDKeQQArkJQVetlIRLdVXx/HyiqKiAeaTtck2D+EJU9WREWVH7adHI2rPXwfIuTlsVSpfC2mMN61CYr4Ux7sRbyf7UCkWmrqbgSkrjNQYLNw2LWkVyaFT9FRlctlY8JaHJaJJ/T22KuAxAYp5QSXgqY5aEa2MBZYtg6xWoQ+W6L0iPrK11PonyqqUPpEfWVtqPRPlVZEolUqm8aKJZsigqmziiBWB7F9UyHZkXVIdlzT6d8OGMK3LRjURERbsfN06H06djt9X+y6FTxpByMj1uHjbzTdv39VzBJZKNyKnYeCfN+EBKXk/vDtW7oC1shxDE/G5c3V5EEJzynu/5IeML5bfe0XJpS08XOIv8AJ+9k9KIicpBGG0N5jdHDcW6OnQ7fVWfBCKnO6XD4ZCHo6Hfj9W3ag8Ehw3elIhL3ZX/Lqz0uHYXUBlq5Bl90mfvZ0torRHiRQV8V0Vwl0S2P8WRnglUyRGQy/wBP7+rQq7jYVuC4nCUs8c8BDoExZxfZyO2n1M21WbCIbaiMhzCQs5W8W3a79yWSAp9EHhAPCK2qLpSl3uq3HHKEuW5PBn4QchdInce19K5YRCXMpX4nD7IaVyvG5GtCVQeqHMSjntEFP4N1UcWIeMLqklVthSL/AODNFJS0giQ9ZOJZBBKo8Vpoos04j2shCxUag/FZlaTVFYsfXCjaKWxIIqgkZTVWfMljIZ7LXEdyxBUdQJMsXSpaJUfNlH6RH1lc6WLhBwxlukqXS+dHrK7YUfldP1vwryJQNeE2ExxYYU9uaPdVXF1ffDD+STdneqCLJYfk2T9AlUyHYUTUqEVGfTrh+TBFTxsoxUopaHs7qG8kLrfhJZiyEPSTaWcdVJHzoya7tbSlMz85YUWAJBKO7d8WTaE8mbL1mUEVNrZfFjmId7bs9b/v1KfEAKIB1pDcOl8rPpZ349mji2MqUmiSk0wmjohKXz4x8u7/AOq1YRS0NP4yCr8b7ze34qiBXygI5bbvrxerk9aKpKqQ8wlmj5vFtfbo2pfrvpT7aLVjVaOJauMrrRLKWnj9ez6JpiWKDhuFSDF5+YHjit5GdtDv2Np0e1BYNh9gFUy5oI4nPk5Gd3Z/Ul9RINUZF0t34JcjUdCSyANDV2ZSTE84JcdNYdyMpD5pKEiBHOUlhChqWctbam8sYmCEpqS+ouFBS0EY0oySmPRVvwunEAFKMPptUAptHLYk22ViqGBnYoeEFfvIZ5lw8gotaHLDh1WVz5ltIY67VEsRUmKeX0vnR6yuGFP5XT9b8Kn03nR6ytmFP5bT9ZepLhzR6PfC7+STdneqELK9+Fb/APCTdneqKKSH5Dk/QLUNkUAii5IilyxjcXuqKXUUoePkuLoA7P8AV+L6aVNxk3o6FOMY7NRxkZ2iJEXu7V3IcFPlnkHW9AdBP28jJXV4tIQWwWxDxWhy/F+N0oeUuEDd++RVWJLbJvK3pDM6m2okKTdnFv8AJtOj6soyUEr3RZv3oXEE9h2y/KX6pMsGtobDNNUwoJJIrrStu6K7IxlARISu6Wln5dj8i1aiKeETUVOi/hYMNCR1Hiiu4s3erVgOBXy6+pIrbdFvH8FxhOHjfcQq1UziOUcoig8r9BWBexrQU1NFSaso/OC0Pq0s+x/tpVUqPBGtpZSGhqY6kR5pPYej4Psfk5U6oavhVWMg+aj02e31v+ns+KkxStEMQ94Ymfl5Xfa/azLrh8fyjUunn5sy8tcKxwCpDxdTBJEXRJtH+1DLhlTEd0WZWzDsV4REI3DJmzCWgm9exGuVDUXZdUXFxaWXNk+HOPNmhlhLogwPAZ8SApJ8o8XxTiPwfGiO3eVlwGOOnpNWRR3CTvxtxPxOpcStOWMRUnjaWzoi16KxJDqt1QsSsM1INiVz0dmYUvjSHYAUqhKa9cVT2HagZJSBK2LYfdcsQsE2tK1YhRrKdT749ZXHCRHhFP8AFVCm3x6yssdQNKEZXZh2iOleo03pHNFpbZYPCcbsKkEc3+1RzOOIN4ZJf+sX0fd/wpcXxyetykVojzRfj9qRTkX72qsMXitk8mXyegqsrJ5ae0S1dpbo7P8AfEksh37yJErJc26SGqI9VKqNIVNg7v0UNMOcUWYrmSO+K73lOUSkZHIFkH97Vll60I2nbzS29vKpR38yVK9BbokpiIMu8PcmsIjl5qTyPZ/kybUVVHKGok87bl9vs+K582HVo68GfdMf0VVFTxXEVylKqkrYit8XBa7j/cdn0P2d6q9RJJaUgjfFCTXjpfb7PorVO4y08MkG7MIuPwdm2/TQm+Lgv/UifzPktLxiNMGmvoiL3dH4Q9bNZ4QUcl2WQHjLsf8A9dcQzDT08cY84kuKUpaKjnLeGY3L4PI7L0apnlp6G1JHqq2aAt0iy+x2bSzssju1urGeQe1n29vsUhv5aRD7O5DMduK282TaKwLGE2JSU9PJrfGWjm4trfD1IvwbxOeKkGSeO6AtDiOl3cGd+T7bFWsYmLMI87J9U+jtipI4+iLKcoJ6ZSMmtlx4RHVReTSCRF7V3wEtVmVKikGn8ZEVpfHR8FbMIxeTVW1JXjzdm1md+P2rky/Hpf5OvH8i9MR4rhk/CC1STz4bOG8vTNQMoXDzucg6zDRlt/RcX1nVUSkYVh5DVPd0VpWx6cYi3VibxNSPG4HszFuj+9CHqaqQjuuuzb375FsqgStiIrbdns+ChmCzLu/vjb2L1ILR5snZIxjrc3O+Cyyy0S3SUbMRhmG7vZbhk/oSbpbhep1QmR1EOT3hUc7a+lGQd4d74smJhkEuxBQjbVSQc2RtI/FkHEaLsFMRIBLpLmFrgmHo6HREcfnI+jtFR02WtEebJs+qWtlE7RFLH4q7o7f1XL7tpZsukfa3IinDzg9FRBDr6e3nRPo+V1mjKSIQEiiKSbL0W5X9iFiIuECW6V7P9HTPVkQagrbuMC9qCPKNxDcPPH1e1lOUSkJL0WHAQgqsFqNfvcIfL69jaG+iIgrP4TDwCtyRk7vTGW23btZ9G1m2vof9EL4GTRHLPCQjbH4xn5XbTy/D8ojEWGtrdZINwiOUfs3e6pjVw0QyOpvy4NnYoqSOSeWOSUhykD6W0Pt0s/LsS6OX/iqf+5pf6yO6jmDgtPJGJFqoxewS5GfkWO1tBhQ+xrvrpVV6snrdD2Wbyv5m7kO0l+Kj7oP3rmoLyser+ENSy+UVEnYixES1h31tOP8Adb7M7ptV1HlEcdyruuvxCl6xP9tH5RWISlrdZ0dqCGGk53VcMG6N2kvg3Gn9LNZm3ri0CPEzM3EqtDUXgVSXQYB737kzpqgrNZzrPys1Zk6Lz4N4kV5Rz26oTYOPc9qtU0YrzjCJNVEI9LaXarrFXa2nj6Vuj6LiywSdndhnaoGrYda7rEdHFcsUPGzpUqPl6s86VvSRNBVDOGom3ub8ENJnNQkBCesj3h2rsTaOJpND2nz/ADd6Hlhuy87mkoaSq1piXt+j8qbTBzlZNNWc7Ti6IKKXhFOQl52PjQmIZdXMO8D6V1EfBcS92RlJiUVgF0SW9B9mp28ojkHdkFBVjaqUZB5pImlfW4aPShLR2ci1VhfEt6CtSommHyi7myD+ELSlqq+0t2VtBIuN9bh8MnOHY/Yg68bLZB5pM6z4aPaCKiKz5d1A1bZ7ulvD3ppOQyxRyDzhSevK0SQnQ2NO6Gng1BwekmqyHLK9gl7Gf8v3Jjlv+ne6wIOAUo011wkA3bG2OzM76H42bTt0etcuWcfeHu/2jBeKonkalKyHGJLYKjtRVcNn8PHoiPcluLFeAj0jZvq6aYj6XCPR0dyZdF/5QRUP40kCz2RSF7yKnLxpIGUslvSJEVERlZVUvwL8KTEqmyIh5xbFDVHbiNIPsfvUWJZ8VjhLdu0v7GS2VS4NhfyKGD3Rbtfj+2hM9dfLHEPOLR9EnGbzcnu6frxN2IvCzvqylIssI/d016JstlLUWS/vkT46qSLDJJYN6PQdvrbTodVCgO87iVqw0uERSR/9gu31Z1HLHRbDLY3wjGhlha8rS6KxVaQgi90li4bPQPHjEgW45B5ymi9JIObc+ztUEgsxFoZdq4cRHM2oPWBuqyUkwz04kPOFIeOlLSjPBsn0mGnLp4kYal/QZFcTWLhbbJ0SRTlwqiEucO8sxj0dDYPtp5NPRTvUqJ9hZzgz+UVFMX9QXU4teFvYhKDLi46P3sR0mytk0dJZcDPpHhe5UQFzdrLdRFfFat0f8zLqupZed++RFcFf6BKAtbh8kfOiJBzDdXU8fSkHvZGYZ6VVtyWIZ/5vSf8A6j3qb/JWP7LFiJX5kHd42Ht7mRNVzkEW/D1vwqnOiKZ9bX00fSkb7JnWFdiHzJZB/Pabr/hHP6aX75UEPLiJpizkhmzmKnqech6fm9b9UwiF+LSWYxTj0W711iBf8rIX9oGb5tDIfG/5xGiq/wBPH4RflR7ZdLS/hPWzCBiPRFH0b8Hohu/qZy/DJJV+d+Zu9N5d+MeTQyoukpKkO6aSwB6RbFbsLPVW9GMfvoVOpM1XDpVlhJ7OP1IT4CBBjpk1RI49Lv2/lYj8XAeEvlbiZYvOlpnqx2j/2Q=="
          ></img>
          <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>

              <p className="text-sm -mt-1 text-gray-600 ">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-line"></i>
            <div>

              <p className="text-sm -mt-1 text-gray-600 ">{props.ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-cash-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <button
          onClick={endRide}
          className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
