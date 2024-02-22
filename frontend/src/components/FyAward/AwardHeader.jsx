import { useContext } from "react"
import SkeletonTable from "../skelton/tableSkelton"
import { MyContext } from "../../context/AuthProvider"

const AwardHeader = ({ year }) => {
    const { summaryLoading } = useContext(MyContext)
    return (
        <>
            {
                summaryLoading ?
                        <SkeletonTable qty={1} width={400} />
                    :
                    
                        year && year?.List.map((ele, i) => {
                            return (
                                <div key={i} className="text-white max-w-6xl mx-auto">
                                    <p className="text-3xl">{ele.AwardName}</p>
                                    <p className="text-3xl">Calculations as of {ele.DisplayDateString}</p>
                                </div>
                            )
                        })
                        
                    
            }
        </>
    )
}

export default AwardHeader
