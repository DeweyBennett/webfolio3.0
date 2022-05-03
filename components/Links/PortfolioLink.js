import axios from "axios";
import Link from "next/link";
import { useState } from "react";


export default function PortfolioLink({ project }){
    const [visits, setVisits] = useState(project.visits);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }

    const handleClick = async () => {
        
        try{
            const data = await axios.post(`http://localhost:3000/api/portfolio/${project._id}`, { visits: project.visits + 1 }, config).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });;
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <Link href={project.link} passHref>
            <p
                onClick={handleClick}
                className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-900 cursor-pointer"
                }
            >
                {project.title}
            </p>
        </Link>
    )
}