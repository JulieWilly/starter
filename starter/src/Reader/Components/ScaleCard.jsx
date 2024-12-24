import { useNavigate } from "react-router"

const ScaleCard = ({card}) => {
    const redirectTo  = useNavigate();

    const handleClick = () => {
        redirectTo(`read-blog/id`)
    }
  return (
 <div className="flex  flex-col cursor-pointer p-1 rounded-xl hover:-translate-y-1 hover:shadow-lg delay-200 duration-200 ease-in-out   " onClick={handleClick}>
{card}
 </div>
  )
}

export default ScaleCard